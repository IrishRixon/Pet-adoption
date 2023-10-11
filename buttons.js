const formPages = ["Log in", "Sign Up form 1", "Sign Up form 2", "Email Verification"];
let currentPage = formPages[0];

//SIGN UP BUTTON
signupBtn.addEventListener("click", function() {
    if(currentPage == formPages[0]) {
        currentPage = formPages[1];

        cardContainer.className = "col-6";
        bodyOfLogin.style.display = "none";
        bodyOfSignup.style.display = "block";
        pageTitle.innerText = "Sign Up";
    }
});

//SIGN UP BACK BUTTON AND NEXT
backBtn.addEventListener('click',function() {
    if(currentPage == formPages[1]) {
        currentPage = formPages[0];

        cardContainer.className = "col-4";
        bodyOfSignup.style.display = "none";
        bodyOfLogin.style.display = "block";
        pageTitle.innerText = "Log In";
        cardContainer.style.height = "460px";
    }
    else if(currentPage == formPages[2]) {
        currentPage = formPages[1];

        credentialsForm1.style.display = "block";
        credentialsForm2.style.display = "none";
    }
    // else if(currentPage == formPages[3]) {
    //     currentPage = formPages[2];

    //     cardContainer.style.height = "434.014px";
    //     signupTitleTxt.innerText = "Sign Up";
    //     credentialsForm2.style.display = "flex";
    //     verificationContainer.style.display = "none";
    // }
});

//NEXT BUTTON 
nextBtn.addEventListener('click', function() {
    if(currentPage == formPages[1]) {
        currentPage = formPages[2];

        credentialsForm1.style.display = "none";
        credentialsForm2.style.display = "flex";
    }
    else if(currentPage == formPages[2]) {
        currentPage = formPages[3];

        cardContainer.style.height = "381px";
        signupTitleTxt.innerText = "Enter Verification Code";
        credentialsForm2.style.display = "none";
        verificationContainer.style.display = "block";
        nextBtn.style.display = "none";
        backBtn.innerText = "Verify";
        buttonsContainer.style.gap = "0";
        backBtn.classList.add("verifyBtn");
    }
});

incorrectEmailTxt.addEventListener('click', function() {
    currentPage = formPages[2];

        cardContainer.style.height = "434.014px";
        signupTitleTxt.innerText = "Sign Up";
        credentialsForm2.style.display = "flex";
        verificationContainer.style.display = "none";
        nextBtn.style.display = "block";
        backBtn.innerText = "Back";
        buttonsContainer.style.gap = "123px";
        backBtn.classList.remove("verifyBtn");
});