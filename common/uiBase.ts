import { expect, Page } from "@playwright/test";
import { elementFactoryUtils } from "../utils/uiElementFactoryModule";
import testData from "../resource/uiTestData/uiTestData";


const loginPage = elementFactoryUtils.login.login;
const dashboardPage = elementFactoryUtils.dashboard.dashboard;
const quizgeneratorPage = elementFactoryUtils.quizgenerator.quizgenerator;
const vocabBuilderPage = elementFactoryUtils.vocabbuilder.vocabbuilder;

interface NavigationParams {
  page?: Page;
  url?: string;
}

const uiBase = {
  async login({ page, url }: NavigationParams): Promise<void> {
    await page.goto(url, { waitUntil: "networkidle" });
    await page.fill(loginPage.username, testData.createAccount.username);
    await page.fill(loginPage.password, testData.createAccount.password);
    await page.click(loginPage.signin);
    await uiBase.validatedashboradPage({ page, url });
  },
  async validatedashboradPage({ page }: NavigationParams): Promise<void> {
    await page.locator(dashboardPage.title).isVisible();
    await page.locator(dashboardPage.myassignmentboard).isVisible();
    await page.locator(dashboardPage.recentactivityboard).isVisible();
    await page.locator(dashboardPage.quickaccessboard).isVisible();
    await page.locator(dashboardPage.dashboardMenu).isVisible();
    await page.locator(dashboardPage.libraryMenu).isVisible();
    await page.locator(dashboardPage.toolMenu).isVisible();
    await page.locator(dashboardPage.signoutButton).isVisible();
  },
  async quizgeneratorPage({ page, topic, gradelevel }: { page: Page; topic: string, gradelevel: string }): Promise<void> {
    await page.locator(dashboardPage.quizgenerator).click();
    await page.locator(quizgeneratorPage.tooltitle).isVisible();
    await page.locator(quizgeneratorPage.topicorblueprint).isVisible();
    await page.locator(quizgeneratorPage.selecttopic).click();
    await page.locator(quizgeneratorPage.topicoption, {
      hasText: topic
    }).click();
    await page.waitForSelector(quizgeneratorPage.gradelevel);
    await page.locator(quizgeneratorPage.gradeoption, {
      hasText: gradelevel
    }).click();
  },
  async blueprintsummary({ page }: NavigationParams) {
    await page.locator(quizgeneratorPage.blueprintsummary).isVisible();
    await page.locator(quizgeneratorPage.topic).click();
    const topicname = await page.locator(quizgeneratorPage.topicvalue).innerText();
    return topicname.trim();
  },
  async contentsection({ page }: NavigationParams): Promise<void> {
    await page.locator(quizgeneratorPage.transcriptcontent).isVisible();
    const content = await page.locator(quizgeneratorPage.transcriptcontent).inputValue();
    // console.log("Content:", content);
    expect(content).not.toBe("");
    const wordCount = await page.locator(quizgeneratorPage.wordcount).innerText();
    expect(wordCount).toContain("Word Count");
    const readingTime = await page.locator(quizgeneratorPage.readingtime).innerText();
    expect(readingTime).toContain("Reading Time");
    const learningStandard = await page.locator(quizgeneratorPage.learningstandard).inputValue();
    // console.log("Learning Standard:", learningStandard);
    expect(learningStandard).not.toBeNull();
    await page.locator(quizgeneratorPage.learningstandard).innerText();
    const gradingProgression = await page.locator(quizgeneratorPage.gradingprogression).inputValue();
    // console.log("Grading Progression:", gradingProgression);
    expect(gradingProgression).not.toBeNull();

  },
  async setupsection({ page, selectMisconceptionsQuiz = false, questionType = "Multiple Choice", provider = "OpenAI",
    model = "gpt-4", questionCount = 5 }: {
      page: Page, selectMisconceptionsQuiz?: boolean, questionType?: "Multiple Choice" | "Multi Select" | "Fill in the Table" | "Match List" | "Venn Diagram", provider?: string,
      model?: string, questionCount?: 5 | 10 | 15 | 20;
    }) {
    await page.locator(quizgeneratorPage.conceptsquiz).isVisible();
    await page.locator(quizgeneratorPage.misconceptquiz).isVisible();
    const conceptsQuizText = await page.locator(quizgeneratorPage.conceptsquiz).innerText();
    expect(conceptsQuizText).toContain("Concepts Quiz");
    const misConceptQuizText = await page.locator(quizgeneratorPage.misconceptquiz).innerText();
    expect(misConceptQuizText).toContain("Misconceptions Quiz");
    if (selectMisconceptionsQuiz) {
      const isEnabled = await page.locator(quizgeneratorPage.misconceptquizbutton).isEnabled();
      if (isEnabled) {
        await page.locator(quizgeneratorPage.misconceptquizbutton).click();
      } else {
        throw new Error("Misconceptions Quiz button is disabled and cannot be selected.");
      }
    } else {
      await expect(page.locator(quizgeneratorPage.conceptsquizbutton)).toBeEnabled();
      await page.locator(quizgeneratorPage.conceptsquizbutton).click();
    }
    await page.waitForTimeout(1000);
    const questionTypeMap: Record<string, string> = {
      "Multiple Choice": quizgeneratorPage.multiplechoicebutton,
      "Multi Select": quizgeneratorPage.multiselectbutton,
      "Fill in the Table": quizgeneratorPage.fillinthetablebutton,
      "Match List": quizgeneratorPage.matchlistbutton,
      "Venn Diagram": quizgeneratorPage.venndiagrambutton,
    };
    const selectedTypeLocator = questionTypeMap[questionType];
    if (!selectedTypeLocator) {
      throw new Error(`Unsupported question type: ${questionType}`);
    }
    // Only click if it's not Multiple Choice (default)
    // if (questionType !== "Multiple Choice") {
    //   const button = page.locator(selectedTypeLocator);
    //   await expect(button).toBeVisible({ timeout: 5000 });
    //   await expect(button).toBeEnabled();
    //   await button.click();
    // }
    const button = page.locator(selectedTypeLocator);
    await button.scrollIntoViewIfNeeded(); // helps for headless mode
    await expect(button).toBeVisible({ timeout: 5000 });
    await expect(button).toBeEnabled();
    // await page.waitForTimeout(2000); // Give time for any animations to finish
    await button.click();
    // await page.pause();
    await page.waitForTimeout(500);
    const additionalInstruction = await page.locator(quizgeneratorPage.additionalinstruction).innerText();
    expect(additionalInstruction).not.toBeNull();
    const providerDropdown = page.locator('select.form-select').first();
    await providerDropdown.selectOption(provider);
    const modelDropdown = page.locator('select.form-select').nth(1);
    await modelDropdown.selectOption(model);
    await page.waitForTimeout(300);
    const validCounts = [5, 10, 15, 20];
    if (!validCounts.includes(questionCount)) {
      throw new Error(`Invalid question count. Must be one of ${validCounts.join(", ")}`);
    }
    const radioButtonId = `question-count-${questionCount}`;
    const radioInput = page.locator(`input#${radioButtonId}`);
    await expect(radioInput).toBeVisible({ timeout: 5000 });
    await expect(radioInput).toBeEnabled();
    await page.waitForTimeout(200);
    // Always explicitly select the desired question count
    await radioInput.scrollIntoViewIfNeeded();
    await radioInput.check();
    await page.locator(quizgeneratorPage.generatequestion).isEnabled();
    await page.waitForTimeout(2000);
    await page.locator(quizgeneratorPage.generatequestion).click();
    await page.waitForSelector(quizgeneratorPage.questioncard);
    const questionsGenerated = await page.locator(quizgeneratorPage.questioncard);
    const questionCountnumber = await questionsGenerated.count();
    const questioncardname = await page.locator(quizgeneratorPage.questioncardtitle).first().innerText();
    return { questionCountnumber, questioncardname };
  },
  async evaluatesection({ page }: NavigationParams): Promise<void> {
    await page.locator(quizgeneratorPage.gradeappropriate).isVisible();
    await page.locator(quizgeneratorPage.gradeappropriatevalue).fill("test comment");
    await page.locator(quizgeneratorPage.independentcompletionwithmovieonly).isVisible();
    await page.locator(quizgeneratorPage.independentcompletionwithmovieonlyvalue).fill("test comment");
    await page.locator(quizgeneratorPage.contentfocus).isVisible();
    await page.locator(quizgeneratorPage.contentfocusvalue).fill("test comment");
    await page.locator(quizgeneratorPage.vocabularyintegration).isVisible();
    await page.locator(quizgeneratorPage.vocabularyintegrationvalue).fill("test comment");
    await page.locator(quizgeneratorPage.answerformatting).isVisible();
    await page.locator(quizgeneratorPage.answerformattingvalue).fill("test comment");
    await page.locator(quizgeneratorPage.distractorquality).isVisible();
    await page.locator(quizgeneratorPage.distractorqualityvalue).fill("test comment");
    await page.locator(quizgeneratorPage.imagesuggestion).isVisible();
    await page.locator(quizgeneratorPage.imagesuggestionvalue).fill("test comment");
    await page.locator(quizgeneratorPage.plainlanguage).isVisible();
    await page.locator(quizgeneratorPage.plainlanguagevalue).fill("test comment");
    await page.locator(quizgeneratorPage.punctuationandformatting).isVisible();
    await page.locator(quizgeneratorPage.punctuationandformattingvalue).fill("test comment");
  },
  async exportsection({
    page, expectedTopic, expectedGradeLevel, expectedQuizType, expectedQuestionType, expectedQuestionCount, expectedProvider, expectedModel
  }: {
    page: Page;
    expectedTopic: string;
    expectedGradeLevel: string;
    expectedQuizType: string;
    expectedQuestionType: string;
    expectedQuestionCount: number;
    expectedProvider: string;
    expectedModel: string;
  }): Promise<void> {
    const summaryGrid = page.locator('.summary-grid');

    const clean = (text?: string | null) => text?.trim() || '';

    const topic = await summaryGrid.locator('.summary-item', { hasText: 'Topic' }).locator('.item-value').textContent();
    const gradeLevel = await summaryGrid.locator('.summary-item', { hasText: 'Grade Level' }).locator('.item-value').textContent();
    const quizType = await summaryGrid.locator('.summary-item', { hasText: 'Quiz Type' }).locator('.item-value').textContent();
    const questionTypeFromSummary = await summaryGrid.locator('.summary-item', { hasText: 'Question Types' }).locator('.question-type-badge').textContent();
    const questionCount = await summaryGrid.locator('.summary-item', { hasText: 'Total Questions' }).locator('.item-value').textContent();
    const provider = await summaryGrid.locator('.summary-item', { hasText: 'Provider' }).locator('.item-value').textContent();
    const model = await summaryGrid.locator('.summary-item', { hasText: 'Model' }).locator('.item-value').textContent();

    expect(clean(topic)).toBe(expectedTopic);
    expect(clean(gradeLevel)).toBe(expectedGradeLevel);
    expect(clean(quizType)).toBe(expectedQuizType);
    expect(clean(questionTypeFromSummary)).toBe(expectedQuestionType);
    expect(Number(clean(questionCount))).toBe(expectedQuestionCount);
    expect(clean(provider)).toBe(expectedProvider);
    expect(clean(model).toLowerCase()).toBe(expectedModel.toLowerCase());
  },
  async resetfunction({ page }: NavigationParams): Promise<void> {
    await page.locator(quizgeneratorPage.reset).click();
    await page.waitForTimeout(5000);
    const topicInput = page.locator(quizgeneratorPage.selecttopicinput);
    await expect(topicInput).toHaveValue('');
    const content = await page.locator(quizgeneratorPage.transcriptcontent).inputValue();
    expect(content).toBe("");
    const learningStandard = await page.locator(quizgeneratorPage.learningstandard).inputValue();
    expect(learningStandard).toBe("");
    await page.locator(quizgeneratorPage.learningstandard).innerText();
    const gradingProgression = await page.locator(quizgeneratorPage.gradingprogression).inputValue();
    expect(gradingProgression).toBe("");
    const additionalInstruction = await page.locator(quizgeneratorPage.additionalinstruction).innerText();
    expect(additionalInstruction).toBe("");
    await expect(page.locator(quizgeneratorPage.gradeleveltext)).toBeVisible();
    await expect(page.locator(quizgeneratorPage.blueprintsummarytext)).toBeVisible();
    await expect(page.locator(quizgeneratorPage.generatequestiontext)).toBeVisible();
  },
  async vocabbuilderPage({ page, topic, gradelevel }: { page: Page; topic: string, gradelevel: string }) {
    await page.locator(dashboardPage.vocabbuilder).click();
    await page.locator(vocabBuilderPage.tooltitle).isVisible();
    await page.locator(vocabBuilderPage.topicorblueprint).isVisible();
    await page.locator(vocabBuilderPage.selecttopic).click();
    await page.locator(vocabBuilderPage.topicoption, {
      hasText: topic
    }).click();
    await page.waitForSelector(vocabBuilderPage.gradelevel);
    await page.locator(vocabBuilderPage.gradeoption, {
      hasText: gradelevel
    }).click();
    await page.waitForTimeout(3000);
    // const wordDropdown = page.locator('select#word');
    // await wordDropdown.waitFor();
    // const wordOptions = await wordDropdown
    //   .locator('option:not([disabled]):not([value=""])')
    //   .allInnerTexts();
    // console.log('\n Available Words for selected Topic & Grade:');
    // wordOptions.forEach((word, i) => console.log(`  ${i + 1}. ${word}`));
    // console.log(`\n Use one or more of these in the next step if needed.`);
    // return wordOptions; 
    // const wordDropdown = page.locator('select#word');
    // await wordDropdown.waitFor();
    // const wordOptions = await wordDropdown
    //   .locator('option:not([disabled]):not([value=""])')
    //   .allInnerTexts();
    // console.log(wordOptions);
    // return wordOptions;
    const wordDropdown = page.locator('select#word');
    await wordDropdown.waitFor();
    const options = wordDropdown.locator('option:not([disabled]):not([value=""])');
    const optionCount = await options.count();
    const wordList: { label: string; value: string }[] = [];
    for (let i = 0; i < optionCount; i++) {
      const option = options.nth(i);
      const label = await option.innerText();
      const value = await option.getAttribute('value');
      if (label && value) {
        wordList.push({ label: label.trim(), value });
      }
    }
    console.log(wordList);
    return wordList;

  },
  async generatevocab({ page, provider = "OpenAI", model = "gpt-4" }): Promise<void> {
    const providerDropdown = page.locator('select.form-select').first();
    await providerDropdown.selectOption(provider);
    const modelDropdown = page.locator('select.form-select').nth(1);
    await modelDropdown.selectOption(model);
    await page.waitForTimeout(300);
    const additionalInstruction = await page.locator(quizgeneratorPage.additionalinstruction).innerText();
    expect(additionalInstruction).not.toBeNull();
  },
  async vocabcard({ page }: { page: Page }) {
    await expect(page.locator(vocabBuilderPage.vocabcard)).toBeVisible();
    const vocabword = await page.locator(vocabBuilderPage.vocabword).innerText();
    return vocabword;
  },
  async generatequestion({ page, questionType = "Multiple Choice", questionCount = 5, strategyType = "auto" }: {
    page: Page, questionType?: "Multiple Choice" | "Multi Select" | "Fill in the Table" | "Fill in the Sentence", provider?: string,
    model?: string, questionCount?: 5 | 10 | 15 | 20, strategyType?: "Synonym/Antonym" | "Word Parts" | "analogy" | "Application" | "auto";
  }) {
    const questionTypeMap: Record<string, string> = {
      "Multiple Choice": quizgeneratorPage.multiplechoicebutton,
      "Multi Select": quizgeneratorPage.multiselectbutton,
      "Fill in the Table": quizgeneratorPage.fillinthetablebutton,
      "Fill in the Sentence": quizgeneratorPage.fillinthesentence
    };
    const selectedTypeLocator = questionTypeMap[questionType];
    if (!selectedTypeLocator) {
      throw new Error(`Unsupported question type: ${questionType}`);
    }
    const button = page.locator(selectedTypeLocator);
    // await button.scrollIntoViewIfNeeded(); // helps for headless mode
    await expect(button).toBeVisible({ timeout: 5000 });
    await expect(button).toBeEnabled();
    await button.click();
    await page.waitForTimeout(300);
    const validCounts = [5, 10, 15, 20];
    if (!validCounts.includes(questionCount)) {
      throw new Error(`Invalid question count. Must be one of ${validCounts.join(", ")}`);
    }
    const radioButtonId = `question-count-${questionCount}`;
    const radioInput = page.locator(`input#${radioButtonId}`);
    await expect(radioInput).toBeVisible({ timeout: 5000 });
    await expect(radioInput).toBeEnabled();
    await page.waitForTimeout(2000);
    // Always explicitly select the desired question count
    await radioInput.scrollIntoViewIfNeeded();
    await radioInput.check();
    const additionalInstruction = await page.locator(quizgeneratorPage.additionalinstruction).innerText();
    expect(additionalInstruction).not.toBeNull();
    const strategyDropdown = page.locator(vocabBuilderPage.stratergydropdown);
    await expect(strategyDropdown).toBeVisible({ timeout: 5000 });
    await strategyDropdown.selectOption(strategyType);
    await expect(page.locator(vocabBuilderPage.generatequestion)).toBeEnabled();
    await page.waitForTimeout(2000)
    await page.locator(vocabBuilderPage.generatequestion).click();
    await page.waitForSelector(quizgeneratorPage.questioncard);
    const questionsGenerated = await page.locator(quizgeneratorPage.questioncard);
    const questionCountnumber = await questionsGenerated.count();
    const questioncardname = await page.locator(vocabBuilderPage.questioncardtitle).first().innerText();
    return { questionCountnumber, questioncardname };
  },
  async vocabexport({ page, expectedTopic, expectedGradeLevel, expectedQuestionType, expectedQuestionCount, expectedProvider, expectedModel }: {
    page: Page; expectedTopic: string; expectedGradeLevel: string; expectedQuestionType: string; expectedQuestionCount: number; expectedProvider: string; expectedModel: string;
  }): Promise<void> {
    const summaryGrid = page.locator('.summary-grid');
    const clean = (text?: string | null) => text?.trim() || '';
    const topic = await summaryGrid.locator('.summary-item', { hasText: 'Topic' }).locator('.item-value').textContent();
    const gradeLevel = await summaryGrid.locator('.summary-item', { hasText: 'Grade Level' }).locator('.item-value').textContent();
    const questionTypeFromSummary = await summaryGrid.locator('.summary-item', { hasText: 'Question Types' }).locator('.question-type-badge').textContent();
    const questionCount = await summaryGrid.locator('.summary-item', { hasText: 'Total Questions' }).locator('.item-value').textContent();
    const provider = await summaryGrid.locator('.summary-item', { hasText: 'Provider' }).locator('.item-value').textContent();
    const model = await summaryGrid.locator('.summary-item', { hasText: 'Model' }).locator('.item-value').textContent();
    expect(clean(topic)).toBe(expectedTopic);
    expect(clean(gradeLevel)).toBe(expectedGradeLevel);
    expect(clean(questionTypeFromSummary)).toBe(expectedQuestionType);
    expect(Number(clean(questionCount))).toBe(expectedQuestionCount);
    expect(clean(provider)).toBe(expectedProvider);
    expect(clean(model)).toBe(expectedModel);

  }

}

export default { uiBase };
