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
    currentYear = new Date().getFullYear();