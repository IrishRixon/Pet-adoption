// MONTH CONTAINER AND ITS CHILDREN
const monthsContainer = document.querySelector(".months_container"),
month = document.querySelector("#month_input"),
monthDatalist = document.querySelector("#months"),
children = monthDatalist.children;
errorForMonth = document.querySelector("#error_for_month");

const day = document.querySelector("#dayslist");
const lengthOfChildren = children.length;


month.addEventListener('change', function () {
    let monthInputLowercase = month.value.toLowerCase(); ;

    // CHECK IF THE INPUTTED MONTH IS VALID
    for(let i = 0; i < lengthOfChildren; i++) {
        let datalistLowercaseValue = children[i].value.toLowerCase();
        
        if(monthInputLowercase !== datalistLowercaseValue) {
            errorForMonth.innerText = "Please enter a valid month";
        }
        else {
            // ELSE JUST REMOVE THE ERROR MESSAGE
            errorForMonth.innerText = "";
            // THE INPUTTED VALUE IS VALID AND EQUALS TO FEBRUARY REMOVE THE ERROR
            // MESSAGE AND EXIT THE FUNCTION
            if(monthInputLowercase === "february") {
                let monthValue = 1;
                errorForMonth.innerText = "";
                daysAlgo(monthValue);
                break;
            }
            else {
                let monthValue = 0;
                // IF THE INPUTTED MONTH IS VALID FIND THE VALUE MONTH BASE ON SEQUENCE
                for(let i = 0; i < lengthOfChildren; i++) {
                    let datalistLowercaseValue = children[i].value.toLowerCase();
                    if(monthInputLowercase !== datalistLowercaseValue) {
                        monthValue = i;
                    }
                    else {
                        daysAlgo(monthValue);
                        break;
                    }
                }
                break;
            }
            
        }
    }
});


function daysAlgo(monthValue) {
    let numberOfChildren = day.childElementCount;
    console.log(monthValue);
    if(monthValue === 1) {
        while (numberOfChildren > 28) {
            const lastChild = day.lastElementChild;
            lastChild.remove();
            numberOfChildren--;
        }
    }
    else if(monthValue % 2 == 0) {
        if(numberOfChildren <= 28) {
            while(numberOfChildren != 31) {
                const option = document.createElement("option");
                numberOfChildren++;
                option.value = numberOfChildren;
                option.innerText = numberOfChildren;
                day.appendChild(option);
            }
        }
    }
    else {
        if(numberOfChildren <= 27) {
            while(numberOfChildren != 30) {
                numberOfChildren++;
                option.value = numberOfChildren;
                option.innerText = numberOfChildren;

                day.appendChild(option);
            }
        }
    }
}



