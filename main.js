const iconMoon = document.getElementById('iconMoon')
const iconSun = document.getElementById('iconSun')

// scrool down smothly
//////////////////////////////////////////////////////
let contactButton = document.getElementById('contactButton');
let servicesButton = document.getElementById('servicesButton');
let skillsButton = document.getElementById('skillsButton');
let homeButton = document.getElementById('homeButton');

// contactButton.addEventListener('click', function(event) {
//     event.preventDefault(); // prevent the default action
//     let contactSection = document.getElementById('contact');
//     contactSection.scrollIntoView({ behavior: 'smooth' });
// });
// servicesButton.addEventListener('click', function(event) {
//     event.preventDefault(); // prevent the default action
//     let serviseSection = document.getElementById('services');
//     serviseSection.scrollIntoView({ behavior: 'smooth' });
// });
// skillsButton.addEventListener('click', function(event) {
//     event.preventDefault(); // prevent the default action
//     let skillsSection = document.getElementById('skills');
//     skillsSection.scrollIntoView({ behavior: 'smooth' });
// });
// homeButton.addEventListener('click', function(event) {
//     event.preventDefault(); // prevent the default action
//     let homeSection = document.getElementById('home');
//     homeSection.scrollIntoView({ behavior: 'smooth' });
// });
const buttons = [
    { buttonId: 'contactButton', sectionId: 'contact' },
    { buttonId: 'servicesButton', sectionId: 'services' },
    { buttonId: 'skillsButton', sectionId: 'skills' },
    { buttonId: 'homeButton', sectionId: 'home' },
];

buttons.forEach(({ buttonId, sectionId }) => {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);

    button.addEventListener('click', (event) => {
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
        // event.prevenDefault leidzia paspaudus button mygtuka neivykdity jo iskart o atlikti tj ka nori alert(labas) pirma alert ismes paskuo tik knopke suveiks
    });
});

// const sections = [
//     { buttonId: 'contactButton', sectionId: 'contact' },
//     { buttonId: 'servicesButton', sectionId: 'services' },
//     { buttonId: 'skillsButton', sectionId: 'skills' },
//     { buttonId: 'homeButton', sectionId: 'home' }
// ];

// sections.forEach(({ buttonId, sectionId }) => {
//     const button = document.getElementById(buttonId);
//     const section = document.getElementById(sectionId);

//     button.addEventListener('click', function(event) {
//         event.preventDefault();
//         section.scrollIntoView({ behavior: 'smooth' });
//     });
// });


/////////////////////////////////////////////
// change to dark or light theme

iconMoon.addEventListener('click', () => {
    let body = document.body;

    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    iconMoon.style.display = 'none';
    iconSun.style.display = 'inline';
});

iconSun.addEventListener('click', () => {
    let body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    iconMoon.style.display = 'inline';
    iconSun.style.display = 'none';
});
