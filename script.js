const hero = document.querySelector('.hero');
const fit = document.querySelector('.fit');

function resize() {
    fit.style.fontSize = '100px';
    const textWidth = fit.getBoundingClientRect().width;
    const heroStyles = getComputedStyle(hero);
    const available = hero.clientWidth
        - parseFloat(heroStyles.paddingLeft)
        - parseFloat(heroStyles.paddingRight);
    fit.style.fontSize = `${100 * available / textWidth}px`;
}

document.fonts.ready.then(resize);
new ResizeObserver(resize).observe(hero);