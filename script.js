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
    { id: "009", name: "consultations", body: "<p>one-on-one brand chats. bring a mess, leave with a plan.</p>" },
    { id: "008", name: "animation", body: "<p>motion tests, logo reveals, tiny loops.</p>" },
    { id: "007", name: "stickers", body: "<p>sticker sheets and packs. the fun stuff.</p>" },
    { id: "006", name: "print design", body: "<p>posters, packaging, zines.</p>" },
    { id: "005", name: "content design", body: "<p>templates and systems for posting consistently.</p>" },
    { id: "004", name: "instagram design", body: "<p>carousels, covers, and grids that hold together.</p>" },
    { id: "003", name: "redesign", body: "<p>unsolicited rebrands of brands i love.</p>" },
    { id: "002", name: "branding", body: "<p>i develop a complete visual identity system: color palette, patterns, icons, templates for social and print.</p><p>i pick font pairs, explain their purpose, and package it all into a brandbook if needed.</p>" }
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