const sections = document.querySelectorAll('section')

console.log(sections);

for (const section of sections) {
    section.style.border = "2px solid steelblue";
    section.style.marginBottom = "20px";
}