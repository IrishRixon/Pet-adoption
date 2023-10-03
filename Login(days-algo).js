// MONTH CONTAINER AND ITS CHILDREN
const monthsContainer = document.querySelector(".months_container"),
month = monthsContainer.querySelector("#month_input"),
errorForMonth = monthsContainer.querySelector("#error_for_month");

const day = document.querySelector("#dayslist");
const children = month.children;
const lengthOfChildren = children.length;

let MonthValue = -1;
function valueOfMonth() {
    let monthInputLowercase;
    let datalistLowercaseValue;

    for(let i = 0; i < lengthOfChildren; i++) {
        datalistLowercaseValue = children[i].textContent.toLowerCase();
        monthInputLowercase = month.value.toLowerCase();

        if(monthInputLowercase !== datalistLowercaseValue) {
            errorForMonth.textContent = "Please enter a valid month";
            return;
        }
        else {
            errorForMonth.textContent = "";
        }
    }

    for(let i = 0; i < lengthOfChildren; i++) {
        if(monthInputLowercase !== datalistLowercaseValue) {
            MonthValue++;
        }
        else {
            break;
        }
    }
}

function daysAlgo() {
    
}

