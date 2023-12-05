const buttonsVessel = document.querySelector('#buttons_vessel'),
    photoBtn = buttonsVessel.querySelector('#photo_btn'),
    photoInput = buttonsVessel.querySelector('#photo_input');

photoBtn.addEventListener('click', () => {
    photoInput.click();
});