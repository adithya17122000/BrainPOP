const vocabbuilder = {
    tooltitle: "//h1[normalize-space()='Vocabulary Builder']",
    topicorblueprint: "//span[normalize-space()='Topic or Blueprint']",
    selecttopic: ".multiselect__tags",
    selecttopicinput: "#single-select-object",
    topicoption: "ul.multiselect__content li.multiselect__element span.multiselect__option span",
    gradelevel: "//label[normalize-space()='Select Grade Level'] ",
    gradeoption: ".grade-level-icon",
    generatevocab: "//button[normalize-space()='Generate Vocabulary']",
    vocabword:".vocab-term",
    vocabcard:".vocab-item",
    stratergydropdown:"(//select[@class='form-select'])[3]",
    generatequestion:"//button[normalize-space()='Generate Questions']",
    questioncardtitle:"body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > span:nth-child(2)"


}
export default { vocabbuilder };