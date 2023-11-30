const sections = document.querySelector('.sections'),
    sectionsChildren = sections.children,
    bgDesign = document.querySelector('.BG_design');;

const scrollDown = (evenOdd) => {
    sectionsChildren[index].style.height = '0';
    index++;
    changeBG(evenOdd);
}

const scrollUp = (evenOdd) => {
    index--;
    sectionsChildren[index].style.height = '650px';
    changeBG(evenOdd);
}

const changeBG = (evenOdd) => {
    setTimeout(() => {
        console.log(evenOdd);
        switch (evenOdd) {
            case 0:
                bgDesign.style.background = 'var(--2nd-BG)';
                break;
            case 1:
                bgDesign.style.background = 'var(--1st-BG)';
                break;
        }
    }, 1000);
}

// const showImage = () => {

// }


let index = 0;

window.addEventListener('wheel', (e) => {
    let deltaY = e.deltaY;
    let evenOdd = index % 2;

    if (deltaY == 125 && index != 6) {
        scrollDown(evenOdd);
    }
    else if (deltaY == -125 && index != 0) {
        scrollUp(evenOdd);
    }
});