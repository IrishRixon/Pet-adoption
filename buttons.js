const formPages = ["Log in", "Sign Up form 1"];
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

    }
});