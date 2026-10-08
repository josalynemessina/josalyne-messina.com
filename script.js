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
/* ---------- cabinet ---------- */
// edit this array: one entry per folder. alternates left/right automatically.
// body can hold any html: images, links, sketches, process notes.
const folders = [
    { id: "008", name: "process", body: "<p>what gets me from start to finish.</p>" },
    { id: "007", name: "resume & experience", body: "<p>yes, i have that too!</p>" },
    { id: "006", name: "personal projects", body: "<p>things that just don't fit in any other folder.</p>" },
    { id: "005", name: "web design", body: "<p>except it's mostly vibecoding & figma.</p>" },
    { id: "004", name: "branding", body: "<p>my bread & butter.</p>" },
    { id: "003", name: "socials", body: "<p>everything i do on the side.</p>" },
    { id: "002", name: "campaigns", body: "<p>getting the message out there.</p>" },
    { id: "001", name: "case studies", body: "<p>let's dive into why things do (or don't) work.</p>" }
];
 
const cabinet = document.getElementById("cabinet");
 
// tell the css how many folders there are so it can split the screen evenly
cabinet.style.setProperty("--n", folders.length);
 
folders.forEach((f, i) => {
    const el = document.createElement("div");
    el.className = "folder " + (i % 2 === 0 ? "left" : "right");
    el.innerHTML = `
        <button class="tab">
            <span>${f.id}</span><span>${f.name}</span>
        </button>
        <div class="body">
            <div class="clip">
                <div class="content"><h2>${f.id} / ${f.name}</h2>${f.body}</div>
            </div>
        </div>`;
    cabinet.appendChild(el);
});