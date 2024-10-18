const bars = document.querySelectorAll('[id^="bar"]'); // Select all menu icons
const menus = document.querySelectorAll('[id^="menu"]'); // Select all menus

bars.forEach((bar, index) => {
    const menu = menus[index]; // Get the corresponding menu by index

    if (bar) {
        bar.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});
