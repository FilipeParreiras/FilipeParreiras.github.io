function scrolTo(name) {
    console.log(name)
    window.scrolTo(0, document.querySelector(name).scrollIntoView({behaviour: 'smooth'}));
}