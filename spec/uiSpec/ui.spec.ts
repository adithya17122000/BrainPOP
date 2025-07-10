import { test, expect } from "@playwright/test";
import { uiCommonUtils } from "../../utils/uiCommonMethodModule";
const testSpec = uiCommonUtils
// import { askUserToSelectWord } from '../../utils/wordSelectionHelper';
import { getRandomWord } from '../../utils/wordSelectionHelper';
const resource: string = "/";

//Login

test('Validate Login', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url })
})

//Quiz Generator Section

test.only('Quiz Generator-1', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Drama';
    const gradeoption = '2-3';
    const selectMisconceptionsQuiz = false;
    const questionType = 'Multiple Choice';
    const provider = 'OpenAI';
    const model = 'gpt-4.1-mini';
    const questionCount = 5;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-2', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Religion';
    const gradeoption = '4-5';
    const selectMisconceptionsQuiz = true;
    const questionType = 'Venn Diagram';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionCount = 5;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-3', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Sound';
    const gradeoption = '6-8';
    const selectMisconceptionsQuiz = false;
    const questionType = 'Multi Select';
    const provider = 'Gemini';
    const model = 'gemini-2.0-flash';
    const questionCount = 5;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-4', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Camouflage';
    const gradeoption = '4-5';
    const selectMisconceptionsQuiz = true;
    const questionType = 'Fill in the Table';
    const provider = 'OpenAI';
    const model = 'gpt-4o';
    const questionCount = 5;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-5', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Brown v Board of Education of Topeka';
    const gradeoption = '6-8';
    const selectMisconceptionsQuiz = false;
    const questionType = 'Match List';
    const provider = 'Gemini';
    const model = 'gemini-2.5-pro-exp-03-25';
    const questionCount = 5;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-6', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Nutrition';
    const gradeoption = '6-8';
    const selectMisconceptionsQuiz = false;
    const questionType = 'Multi Select';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionCount = 5;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-7', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Peer Pressure';
    const gradeoption = '4-5';
    const selectMisconceptionsQuiz = true;
    const questionType = 'Venn Diagram';
    const provider = 'OpenAI';
    const model = 'gpt-4.1-nano';
    const questionCount = 5;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-8', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Adolescence';
    const gradeoption = '6-8';
    const selectMisconceptionsQuiz = false;
    const questionType = 'Venn Diagram';
    const provider = 'OpenAI';
    const model = 'gpt-4.1-nano';
    const questionCount = 5;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-9', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Disability Rights';
    const gradeoption = '6-8';
    const selectMisconceptionsQuiz = false;
    const questionType = 'Multiple Choice';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionCount = 15;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-10', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Constitutional Convention';
    const gradeoption = '4-5';
    const selectMisconceptionsQuiz = true;
    const questionType = 'Multiple Choice';
    const provider = 'OpenAI';
    const model = 'gpt-4o';
    const questionCount = 10;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-11', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Inca Civilization';
    const gradeoption = '2-3';
    const selectMisconceptionsQuiz = true;
    const questionType = 'Multi Select';
    const provider = 'Gemini';
    const model = 'gemini-2.0-flash';
    const questionCount = 15;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

// test.only('Quiz Generator-122', async ({ page, baseURL }) => {
//     let quizGeneratorRequestData: any = null;
//     let quizGeneratorResponseData: any = null;

//     // Capture the request payload
//     page.on('request', request => {
//         if (request.url().includes('/api/quiz-generator')) {
//             quizGeneratorRequestData = {
//                 url: request.url(),
//                 method: request.method(),
//                 headers: request.headers(),
//                 postData: request.postDataJSON?.() || request.postData() || null
//             };
//         }
//     });

//     // Capture the response
//     page.on('response', async response => {
//         if (response.url().includes('/api/quiz-generator')) {
//             try {
//                 const responseBody = await response.json().catch(() => null);
//                 quizGeneratorResponseData = {
//                     url: response.url(),
//                     status: response.status(),
//                     headers: response.headers(),
//                     body: responseBody
//                 };

//                 // Print both request and response together
//                 console.log('🎯 /api/quiz-generator API Call:\n');
//                 console.log(JSON.stringify({
//                     request: quizGeneratorRequestData,
//                     response: quizGeneratorResponseData
//                 }, null, 2));
//             } catch (err) {
//                 console.error('❌ Failed to parse /api/quiz-generator response:', err);
//             }
//         }
//     });

//     // === Test logic ===
//     const url = baseURL + resource;
//     await testSpec.login({ page, url });

//     const topicToSelect = 'Inca Civilization';
//     const gradeoption = '2-3';
//     const selectMisconceptionsQuiz = false;
//     const questionType = 'Multi Select';
//     const provider = 'Gemini';
//     const model = 'gemini-2.0-flash';
//     const questionCount = 10;

//     await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
//     const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
//     expect(selectedTopicFromSummary).toBe(topicToSelect);

//     await testSpec.contentsection({ page });
//     const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });

//     // await page.pause();

//     expect(questionCountnumber).toBe(questionCount);
//     expect(questioncardname).toBe(questionType);

//     await testSpec.evaluatesection({ page });
//     await testSpec.exportsection({
//         page,
//         expectedTopic: topicToSelect,
//         expectedGradeLevel: gradeoption,
//         expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts',
//         expectedQuestionType: questionType,
//         expectedQuestionCount: questionCount,
//         expectedProvider: provider,
//         expectedModel: model
//     });

//     await testSpec.resetfunction({ page });

//     // Optional assertion: ensure data was captured
//     expect(quizGeneratorRequestData).not.toBeNull();
//     expect(quizGeneratorResponseData).not.toBeNull();
// });

test('Quiz Generator-12', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Apollo Project';
    const gradeoption = '2-3';
    const selectMisconceptionsQuiz = true;
    const questionType = 'Multi Select';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionCount = 20;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-13', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Brain';
    const gradeoption = '4-5';
    const selectMisconceptionsQuiz = false;
    const questionType = 'Fill in the Table';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionCount = 15;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})

test('Quiz Generator-14', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Feudalism';
    const gradeoption = '6-8';
    const selectMisconceptionsQuiz = false;
    const questionType = 'Venn Diagram';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionCount = 15;
    await testSpec.quizgeneratorPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    const { questionCountnumber, questioncardname } = await testSpec.setupsection({ page, selectMisconceptionsQuiz, questionType, provider, model, questionCount });
    // await page.pause();
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.exportsection({ page, expectedTopic: topicToSelect, expectedGradeLevel: gradeoption, expectedQuizType: selectMisconceptionsQuiz ? 'misconceptions' : 'concepts', expectedQuestionType: questionType, expectedQuestionCount: questionCount, expectedProvider: provider, expectedModel: model, });
    await testSpec.resetfunction({ page });
})




//Vocab Builder Section

test('vocab Builder-1', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Drama';
    const gradeoption = '4-5';
    const provider = 'OpenAI';
    const model = 'gpt-4.1-mini';
    const questionType = 'Fill in the Sentence';
    const questionCount = 5;
    const strategyType = 'analogy';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    // await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-2', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Industrial Revolution';
    const gradeoption = '6-8';
    const provider = 'OpenAI';
    const model = 'gpt-4.1-nano';
    const questionType = 'Fill in the Table';
    const questionCount = 5;
    const strategyType = 'Synonym/Antonym';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    // await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-3', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'The Underground Railroad';
    const gradeoption = '4-5';
    const provider = 'Gemini';
    const model = 'gemini-2.0-flash';
    const questionType = 'Multiple Choice';
    const questionCount = 5;
    const strategyType = 'Application';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    // await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-4', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Ethics';
    const gradeoption = '2-3';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionType = 'Multi Select';
    const questionCount = 5;
    const strategyType = 'Word Parts';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    // await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-5', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Public Speaking';
    const gradeoption = '6-8';
    const provider = 'Gemini';
    const model = 'gemini-2.0-flash';
    const questionType = 'Multi Select';
    const questionCount = 5;
    const strategyType = 'auto';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    // await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-6', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Immigration';
    const gradeoption = '4-5';
    const provider = 'OpenAI';
    const model = 'gpt-4.1-nano';
    const questionType = 'Fill in the Sentence';
    const questionCount = 5;
    const strategyType = 'analogy';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    // expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const expectedBaseWord = selected.value.split(' ')[0].toLowerCase();
    expect(word.toLowerCase()).toBe(expectedBaseWord);
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-7', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Brain';
    const gradeoption = '2-3';
    const provider = 'Gemini';
    const model = 'gemini-2.5-pro-exp-03-25';
    const questionType = 'Fill in the Table';
    const questionCount = 5;
    const strategyType = 'Application';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-8', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Adaptations';
    const gradeoption = '6-8';
    const provider = 'OpenAI';
    const model = 'gpt-4o';
    const questionType = 'Multiple Choice';
    const questionCount = 5;
    const strategyType = 'analogy';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-9', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Apollo Project';
    const gradeoption = '6-8';
    const provider = 'OpenAI';
    const model = 'gpt-4o';
    const questionType = 'Multiple Choice';
    const questionCount = 5;
    const strategyType = 'analogy';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-10', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Thomas Edison';
    const gradeoption = '2-3';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionType = 'Fill in the Sentence';
    const questionCount = 5;
    const strategyType = 'Word Parts';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-11', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Disability Rights';
    const gradeoption = '2-3';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionType = 'Fill in the Sentence';
    const questionCount = 15;
    const strategyType = 'Word Parts';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-12', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Disability Rights';
    const gradeoption = '2-3';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionType = 'Fill in the Sentence';
    const questionCount = 15;
    const strategyType = 'Word Parts';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-13', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Sound';
    const gradeoption = '6-8';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionType = 'Multiple Choice';
    const questionCount = 10;
    const strategyType = 'Word Parts';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-14', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Religion';
    const gradeoption = '4-5';
    const provider = 'OpenAI';
    const model = 'gpt-4.1-mini';
    const questionType = 'Multiple Choice';
    const questionCount = 10;
    const strategyType = 'analogy';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-15', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Climate Change';
    const gradeoption = '6-8';
    const provider = 'Gemini';
    const model = 'gemini-2.0-flash';
    const questionType = 'Multi Select';
    const questionCount = 10;
    const strategyType = 'Application';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})

test('vocab Builder-16', async ({ page, baseURL }) => {
    const url = baseURL + resource
    await testSpec.login({ page, url });
    const topicToSelect = 'Roman Republic';
    const gradeoption = '6-8';
    const provider = 'Anthropic';
    const model = 'claude-3-5-sonnet-20240620';
    const questionType = 'Fill in the Table';
    const questionCount = 15;
    const strategyType = 'Synonym/Antonym';
    const availableWords = await testSpec.vocabBuilderPage({ page, topic: topicToSelect, gradelevel: gradeoption });
    const selectedTopicFromSummary = await testSpec.blueprintsummary({ page });
    expect(selectedTopicFromSummary).toBe(topicToSelect);
    await testSpec.contentsection({ page });
    await testSpec.generatevocab({ page, provider, model });
    const selected = getRandomWord(availableWords);
    console.log(`Random word selected: ${selected.label} (value: ${selected.value})`);
    const dropdown = page.locator('select#word');
    await dropdown.click();
    await expect(
        dropdown.locator(`option[value="${selected.value}"]`)
    ).toHaveCount(1, { timeout: 10000 });
    await dropdown.selectOption({ value: selected.value });
    // console.log(`Successfully selected word: ${selected.label}`);
    await page.locator("//button[normalize-space()='Generate Vocabulary']").isEnabled();
    await page.locator("//button[normalize-space()='Generate Vocabulary']").click();
    const word = await testSpec.vocabcard({ page });
    expect(word.toLowerCase()).toBe(selected.value.toLowerCase());
    const { questionCountnumber, questioncardname } = await testSpec.generatequestion({ page, questionType, questionCount, strategyType });
    expect(questionCountnumber).toBe(questionCount);
    expect(questioncardname).toBe(questionType);
    await testSpec.evaluatesection({ page });
    await testSpec.vocabexport({page,expectedTopic:topicToSelect, expectedGradeLevel:gradeoption, expectedQuestionType:questionType, expectedQuestionCount:questionCount, expectedProvider:provider, expectedModel:model})
})