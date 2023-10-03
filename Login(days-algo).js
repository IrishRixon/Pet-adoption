// MONTH CONTAINER AND ITS CHILDREN
const monthsContainer = document.querySelector(".months_container"),
month = document.querySelector("#month_input"),
monthDatalist = document.querySelector("#months"),
children = monthDatalist.children;
errorForMonth = document.querySelector("#error_for_month");

const day = document.querySelector("#dayslist");
const lengthOfChildren = children.length;


month.addEventListener('change', function () {
    let monthValue = -1;
    let monthInputLowercase = "";
    let datalistLowercaseValue = "";

    // CHECK IF THE INPUTTED MONTH IS VALID
    for(let i = 0; i < lengthOfChildren; i++) {
        datalistLowercaseValue = children[i].innerText.toLowerCase();
        monthInputLowercase = month.value.toLowerCase();

        if(monthInputLowercase !== datalistLowercaseValue) {
            errorForMonth.innerText = "Please enter a valid month";
            console.log("hello");
        }
        else {
            // ELSE JUST REMOVE THE ERROR MESSAGE
            errorForMonth.innerText = "";
            // THE INPUTTED VALUE IS VALID AND EQUALS TO FEBRUARY REMOVE THE ERROR
            // MESSAGE AND EXIT THE FUNCTION
            if(monthInputLowercase === "february") {
                monthValue = 1;
                errorForMonth.innerText = "";
                return;
            }
            else {
                // IF THE INPUTTED MONTH IS VALID FIND THE VALUE MONTH BASE ON SEQUENCE
                for(let i = 0; i < lengthOfChildren; i++) {
                    if(monthInputLowercase !== datalistLowercaseValue) {
                        monthValue++;
                    }
                    else {
                        daysAlgo(monthValue);
                        break;
                    }
                }
            }
            
        }
    }
});


function daysAlgo(monthValue) {
    const lastChild = day.lastElementChild,
    numberOfChildren = day.childElementCount,
    option = document.createElement("option");

    if(monthValue === 1) {
        while (numberOfChildren > 27) {
            lastChild.remove();
            numberOfChildren--;
        }
    }
    else if(monthValue % 2 == 0) {
        if(numberOfChildren <= 27) {
            while(numberOfChildren != 30) {
                numberOfChildren++;
                option.value = numberOfChildren;
                option.innerText = numberOfChildren;

                day.appendChild(option);
            }
        }
    }
    else {
        if(numberOfChildren <= 27) {
            while(numberOfChildren != 29) {
                numberOfChildren++;
                option.value = numberOfChildren;
                option.innerText = numberOfChildren;

                day.appendChild(option);
            }
        }
    }
}



