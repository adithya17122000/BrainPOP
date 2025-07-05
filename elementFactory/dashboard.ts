const dashboard = {
    title: "//h1[normalize-space()='Dashboard']",
    myassignmentboard:"(//div[@class='dashboard-card'])[1]",
    recentactivityboard:"(//div[@class='dashboard-card'])[2]",
    quickaccessboard:"(//div[@class='dashboard-card'])[3]",
    dashboardMenu: "//a[normalize-space()='Dashboard']",
    libraryMenu: "//a[normalize-space()='Library']",
    toolMenu: "(//a[normalize-space()='Tools'])[1]",
    signoutButton: ".footer-menu-item.logout-link.w-50",
    quizgenerator: "a[href='/tools/quiz-generator']",
    vocabbuilder:"a[href='/tools/vocab-builder']",
}

export default { dashboard }
