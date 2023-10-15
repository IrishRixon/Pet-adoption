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
    pageTitle = document.querySelector("title"),
    credentialsForm1 = document.querySelector(".credentials_form1"),
    credentialsForm2 = document.querySelector(".credentials_form2"),
    credentialsForm3 = document.querySelector(".credentials_form3"),
    signupTitleTxt = document.querySelector("#signup_titleTxt"),
    verificationContainer = document.querySelector(".verification_container"),
    incorrectEmailTxt = document.querySelector("#incorrectEmailTxt"),
    buttonsContainer = document.querySelector(".buttons_container"),
    accountSuccess = document.querySelector(".accountCreated_container"),
    checkIcon = document.querySelector("#checkIcon"),

    // FORGOT PASS
    forgotPassBtn = document.querySelector("#forgotPassBtn"),
    cancelBtn = document.querySelector("#cancelBtn"),
    searchBtn = document.querySelector("#searchBtn"),
    continueBtn = document.querySelector("#continueBtn"),
    bodyOfForgotPass = document.querySelector(".body_of_forgotPass"),
    forgotPassTitle = document.querySelector("#forgotPass_titleTxt"),
    forgotPassForm1 = document.querySelector(".forgotPass_form1"),
    forgotPassForm2 = document.querySelector(".forgotPass_form2"),
    forgotPassForm3 = document.querySelector(".forgotPass_form3"),
    notYouBtn = document.querySelector("#notYouBtn"),
    signupForm = document.querySelector("#signupForm"),
    loginUsingPassword = document.querySelector("#loginPass"),
    forgotIncorrectEmailTxt = document.querySelector("#forgotIncorrectEmailTxt");


function forgotPassOpenClose(status) {
    if (status == "open") {
        bodyOfLogin.style.display = "none";
        bodyOfForgotPass.style.display = "block";
        cardContainer.style.height = "328px";
        cardContainer.className = "col-6";
        forgotPassForm1.style.display = "block";
        signupForm.style.display = "none";
    }
}

function logInOpenClose(status) {
    if (status == "open") {
        bodyOfLogin.style.display = "block";
        pageTitle.innerText = "Log In";
        cardContainer.style.height = "460px";
        cardContainer.className = "col-4";
    }
}
