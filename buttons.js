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

        setTimeout(function() {
            checkIcon.style.visibility = "visible";
        },1000);

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
    currentPage = formPages[3];

    cardContainer.style.height = "434.014px";
    signupTitleTxt.innerText = "Sign Up";
    credentialsForm3.style.display = "flex";
    verificationContainer.style.display = "none";
    backBtn.style.display = "block";
    nextBtn.innerText = "Next";
    buttonsContainer.style.gap = "123px";
    nextBtn.classList.remove("verifyBtn");
});