const sections = document.querySelector(".sections"),
    sectionsChildren = sections.children,
    bgDesign = document.querySelector(".BG_design");

    const image = sections.querySelector('img');
console.log(image);

const scrollDown = (evenOdd) => {
    sectionsChildren[index].style.height = "0";
    index++;
    changeBG(evenOdd);
    showImage();
};

const scrollUp = (evenOdd) => {
    index--;
    sectionsChildren[index].style.height = "650px";
    changeBG(evenOdd);
};

const changeBG = (evenOdd) => {
    bgDesign.style.opacity = "0";

    setTimeout(() => {
        console.log(evenOdd);
        switch (evenOdd) {
            case 0:
                bgDesign.style.background = "var(--2nd-BG)";
                break;
            case 1:
                bgDesign.style.background = "var(--1st-BG)";
                break;
        }
        bgDesign.style.opacity = "1";
    }, 400);
};

const showImage = () => {
    const image = sections.querySelector('img');
    
    if(num != index) {
        image[index].style.opacity = '1';
        num++;
    }
}

let index = 0;
let num = 0;

window.addEventListener("wheel", (e) => {
    let deltaY = e.deltaY;
    let evenOdd = index % 2;

    if (deltaY == 125 && index != 6) {
        scrollDown(evenOdd);
    } else if (deltaY == -125 && index != 0) {
        scrollUp(evenOdd);
    }
});



//BUG NOTE

//FIX THE IMAGE OPACITY BY FIXING THE SHOWIMAGE FUNCTION .. GET THE IMG ELEMENT FIRST TO MOVE FORWARD