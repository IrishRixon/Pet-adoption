const sections = document.querySelector(".sections"),
  sectionsChildren = sections.children,
  bgDesign = document.querySelector(".BG_design");

//A FUNCTION WHEN THE USER SCROLL DOWN
const scrollDown = (evenOdd) => {
  sectionsChildren[index].style.height = "0"; //SET THE HEIGHT OF A SECTION SO THAT IT LOOK LIKE DISAPPEARING

  /* HIDE THE IMAGE OF CURRENT SECTION FIRST AND THEN CHANGE THE BACKGROUND OF PAW PRINTS. 
    AFTERWARD, THE NEXT IMAGE WILL SHOW */
  hideImage();
  index++;
  changeBG(evenOdd);
  showImage();
};

//A FUNCTION WHEN THE USER SCROLL UP
const scrollUp = (evenOdd) => {
  hideImage();
  index--;
  sectionsChildren[index].style.height = "650px"; //SET THE HEIGHT OF A SECTION SO THAT IT LOOK LIKE APPEARING
  changeBG(evenOdd);
  showImage();
};

/*A FUNCTION TO CHANGE THE BACKGROUND OF PAW PRINTS SO THAT 
THE MIX-BLEND-MODE IN CSS TAKE EFFECT */
const changeBG = (evenOdd) => {
  bgDesign.style.opacity = "0";

  // DETERMINE THE COLOR OF THE PAW PRINTS BACKGROUND
  switch (evenOdd) {
    case 0:
      bgDesign.style.background = "var(--2nd-BG)";
      break;
    case 1:
      bgDesign.style.background = "var(--1st-BG)";
      break;
  }
  bgDesign.style.opacity = "1";
};

//A FUNCTION TO SHOW IMAGE
const showImage = () => {
  const image = sectionsChildren[index].querySelector("img"); //FIND THE IMAGE OF CURRENT SECTION
  image.style.opacity = "1";
};

//A FUNCTION TO HIDE IMAGE
const hideImage = () => {
  const image = sectionsChildren[index].querySelector("img"); //FIND THE IMAGE OF CURRENT SECTION

  // HIDE THE IMAGE OF THE IMAGES EXCEPT THE IMAGE IN THE FIRST SECTION
  // WHICH IS THE LOGO
  if (index != 0) {
    image.style.opacity = "0";
  }
};

/*A FUNCTION TO PAUSE THE EVENT IF THE USER USE TOUCHPAD TO SCROLL 
SO THAT IT IS EASIER TO CONTROL*/
const pauseEvent = () => {
  window.removeEventListener("wheel", scrollDirection);

  let stopInterval = setInterval(() => {
    window.addEventListener("wheel", scrollDirection);
  }, 1000);

};

let index = 0;

/* A FUNCTION FOR BROWSER COMPATIBILITY, 
BECAUSE THE 'deltaY' VALUE VARIES FROM BROWSER */
const scrollDirection = (e) => {
  let deltaY = e.deltaY; // GET THE VALUE OF SCROLL
  let evenOdd = index % 2; // THIS WILL DETERMINE WHAT THE BG COLOR OF PAW PRINTS

console.log(deltaY);

  if (deltaY > 20 && index != 6) {
    scrollDown(evenOdd);
    pauseEvent();
  } else if (deltaY < -20 && index != 0) {
    scrollUp(evenOdd);
    pauseEvent();
  }
};

//EVENT LISTENER FOR MOUSE SCROLL UP AND DOWN
window.addEventListener("wheel", scrollDirection);
