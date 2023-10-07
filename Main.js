const daysInput = document.querySelector('#daysInput'),
    daysList = document.querySelector("#dayslist"),
    errorForDays = document.querySelector("#error_for_days"),
    
    // MONTH CONTAINER AND ITS CHILDREN
    monthsContainer = document.querySelector(".months_container"),
    month = monthsContainer.querySelector("#month_input"),
    monthDatalist = monthsContainer.querySelector("#months"),
    children = monthDatalist.children,
    day = document.querySelector("#dayslist"),
    lengthOfChildren = children.length,
    errorForMonth = document.querySelector("#error_for_month"),

    // REGEX
    yearRegex = /^\d{4}$/,
    // YEAR
    yearInput = document.querySelector("#yearInput"),
    errorForYear = document.querySelector("#error_for_year"),
    currentYear = new Date().getFullYear(),

    //SOMETHING TO DO WITH BUTTONS
    signupBtn = document.querySelector("#signupBtn"),
    cardContainer = document.querySelector("#card_container"),
    bodyOfLogin = document.querySelector(".body_of_login"),
    bodyOfSignup = document.querySelector(".body_of_signup"),
    backBtn = document.querySelector("#back_button"), //Sign up back button
    nextBtn = document.querySelector("#next_button"), //Sign up next button
    pageTitle = document.querySelector("title");