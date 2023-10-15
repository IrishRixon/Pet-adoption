const formPages = ["Log in", "Sign Up form 1", "Sign Up form 2", "Sign up form 3", "Email Verification", "Account Successfully Created"];
let currentPage = formPages[0];

//SIGN UP BUTTON
signupBtn.addEventListener("click", function () {
    if (currentPage == formPages[0]) {
        currentPage = formPages[1];

        cardContainer.className = "col-6";
        bodyOfLogin.style.display = "none";
        credentialsForm1.style.display = "block";
        bodyOfSignup.style.display = "block";
        signupForm.style.display = "block";
        pageTitle.innerText = "Sign Up";
    }
});

//SIGN UP BACK BUTTON AND NEXT
backBtn.addEventListener('click', function () {
    if (currentPage == formPages[1]) {
        currentPage = formPages[0];

        cardContainer.className = "col-4";
        bodyOfSignup.style.display = "none";
        bodyOfLogin.style.display = "block";
        pageTitle.innerText = "Log In";
        cardContainer.style.height = "460px";
    }
    else if (currentPage == formPages[2]) {
        currentPage = formPages[1];

        credentialsForm2.style.display = "none";
        credentialsForm1.style.display = "block";
    }
    else if (currentPage == formPages[3]) {
        currentPage = formPages[2];

        credentialsForm3.style.display = "none";
        credentialsForm2.style.display = "flex";
    }

});

//NEXT BUTTON 
nextBtn.addEventListener('click', function () {
    if (currentPage == formPages[1]) {
        currentPage = formPages[2];

        credentialsForm1.style.display = "none";
        credentialsForm2.style.display = "flex";
    }
    else if (currentPage == formPages[2]) {
        currentPage = formPages[3];

        credentialsForm2.style.display = "none";
        credentialsForm3.style.display = "flex";
    }
    else if (currentPage == formPages[3]) {
        currentPage = formPages[4];

        cardContainer.style.height = "381px";
        signupTitleTxt.innerText = "Enter Verification Code";
        credentialsForm3.style.display = "none";
        verificationContainer.style.display = "block";
        backBtn.style.display = "none";
        nextBtn.innerText = "Verify";
        buttonsContainer.style.gap = "0";
        nextBtn.classList.add("verifyBtn");
    }

    else if (currentPage == formPages[4]) {
        currentPage = formPages[5];

        cardContainer.style.height = "120px";
        accountSuccess.style.display = "flex";
        bodyOfSignup.style.display = "none";

        setTimeout(function () {
            checkIcon.style.visibility = "visible";
        }, 1000);

        setTimeout(function () {
            currentPage = formPages[0];

            accountSuccess.style.display = "none";
            cardContainer.className = "col-4";
            bodyOfLogin.style.display = "block";
            pageTitle.innerText = "Log In";
            cardContainer.style.height = "460px";
            verificationContainer.style.display = "none";
            backBtn.style.display = "block";
            nextBtn.innerText = "Next";
            buttonsContainer.style.gap = "123px";
            nextBtn.classList.remove("verifyBtn");
            signupTitleTxt.innerText = "Sign Up";
            checkIcon.style.visibility = "hidden";
        }, 3500);
    }
});

incorrectEmailTxt.addEventListener('click', function () {
    if (currentPage == formPages[4]) {
        currentPage = formPages[3];

        cardContainer.style.height = "434.014px";
        signupTitleTxt.innerText = "Sign Up";
        credentialsForm3.style.display = "flex";
        verificationContainer.style.display = "none";
        backBtn.style.display = "block";
        nextBtn.innerText = "Next";
        buttonsContainer.style.gap = "123px";
        nextBtn.classList.remove("verifyBtn");
    }
});

// FORGOT PASS
const forgotPassFormPage = ["Log In", "Find Account", "Send Code", "Enter Code"];
let forgotPassCurrentPage = forgotPassFormPage[3];

forgotPassBtn.addEventListener('click', function () {
    if (forgotPassCurrentPage == forgotPassFormPage[0]) {
        forgotPassCurrentPage = forgotPassFormPage[1];
        forgotPassOpenClose("open");
    }
});

searchBtn.addEventListener('click', function () {
    if (forgotPassCurrentPage == forgotPassFormPage[1]) {
        forgotPassCurrentPage = forgotPassFormPage[2];

        forgotPassTitle.innerText = "We'll send a code to your email";
        forgotPassTitle.style.fontSize = "28px";
        forgotPassTitle.style.borderBottom = "1px solid #415A77";
        forgotPassForm1.style.display = "none";
        forgotPassForm2.style.display = "flex";
    }

});

cancelBtn.addEventListener('click', function () {
    forgotPassCurrentPage = forgotPassFormPage[0];

    cardContainer.className = "col-4";
    bodyOfLogin.style.display = "block";
    bodyOfForgotPass.style.display = "none";
    pageTitle.innerText = "Log In";
    cardContainer.style.height = "460px";
});

notYouBtn.addEventListener('click', function () {
    if (forgotPassCurrentPage == forgotPassFormPage[2]) {
        forgotPassCurrentPage = forgotPassFormPage[1];

        forgotPassTitle.innerText = "Find Your Account";
        forgotPassTitle.style.fontSize = "35px";
        forgotPassTitle.style.borderBottom = "0 solid #415A77";
        forgotPassForm1.style.display = "block";
        forgotPassForm2.style.display = "none";
    }
});

loginUsingPassword.addEventListener('click', function () {
    logInOpenClose('open');
    bodyOfForgotPass.style.display = "none";
});

continueBtn.addEventListener('click', function () {
    if (forgotPassCurrentPage == forgotPassFormPage[2]) {
        forgotPassCurrentPage = forgotPassFormPage[3];

        forgotPassTitle.innerText = "Enter Code";
        forgotPassForm2.style.display = "none";
        forgotPassForm3.style.display = "block";
    }
});

forgotIncorrectEmailTxt.addEventListener('click', function() {
    if(forgotPassCurrentPage == forgotPassFormPage[3]) {
        forgotPassCurrentPage = forgotPassFormPage[2];

        forgotPassTitle.innerText = "We'll send a code to your email";
        forgotPassTitle.style.fontSize = "28px";
        forgotPassTitle.style.borderBottom = "1px solid #415A77";
        forgotPassForm3.style.display = "none";
        forgotPassForm2.style.display = "flex";
    }
});
