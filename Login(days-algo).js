// MONTH CONTAINER AND ITS CHILDREN
const monthsContainer = document.querySelector(".months_container"),
    month = monthsContainer.querySelector("#month_input"),
    monthDatalist = monthsContainer.querySelector("#months"),
    children = monthDatalist.children,
    errorForMonth = document.querySelector("#error_for_month"),
    daysInput = document.querySelector("#daysInput");

const day = document.querySelector("#dayslist");
let lengthOfChildren = children.length;


month.addEventListener('change', function () {
    let monthValue = 0;
    let monthInputLowercase = month.value.toLowerCase();;

    if (month.value == "") {
        errorForMonth.innerHTML = " ";
        daysInput.disabled = true;
        return;
    }
    // CHECK IF THE INPUTTED MONTH IS VALID
    for (let i = 0; i < lengthOfChildren; i++) {
        let datalistLowercaseValue = children[i].value.toLowerCase();

        if (monthInputLowercase !== datalistLowercaseValue) {
            errorForMonth.innerText = "Please enter a valid month";
            monthValue++;
        }
        else {
            // ELSE JUST REMOVE THE ERROR MESSAGE
            errorForMonth.innerText = "";
            daysInput.disabled = false;
            console.log("hello");

            // THE INPUTTED VALUE IS VALID AND EQUALS TO FEBRUARY REMOVE THE ERROR
            // MESSAGE AND EXIT THE FUNCTION
            if (monthInputLowercase === "february") {
                let monthValue = 1;
                errorForMonth.innerText = "";
                daysAlgo(monthValue);
                break;
            }
            daysAlgo(monthValue);
            break;

        }
    }
});


function daysAlgo(monthValue) {
    let numberOfChildren = day.childElementCount;
    if (monthValue === 1) {
        while (numberOfChildren > 28) {
            const lastChild = day.lastElementChild;
            lastChild.remove();
            numberOfChildren--;
        }
    }
    else if (monthValue % 2 == 0) {
        while (numberOfChildren != 31) {
            const option = document.createElement("option");
            numberOfChildren++;
            option.value = numberOfChildren;
            option.innerText = numberOfChildren;
            day.appendChild(option);
        }
    }
    else if (monthValue % 2 == 1) {

        while (numberOfChildren < 30) {
            console.log("hello");
            const option = document.createElement("option");
            numberOfChildren++;
            option.value = numberOfChildren;
            option.innerText = numberOfChildren;
            day.appendChild(option);
        }

        while (numberOfChildren > 30) {
            const lastChild = day.lastElementChild;
            lastChild.remove();
            numberOfChildren--;
        }
    }
}



