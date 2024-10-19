const categories = Array.from(jCategory);

document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    
    // Filter categories based on search input
    const filterData = categories.filter((item) =>
        item.title.toLowerCase().includes(searchData)
    );
    
    // Display the filtered items
    displayItems(filterData);
});

const displayItems = (items) => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = ""; // Clear previous results

    // Check if there are no matching items
    if (items.length === 0) {
        rootElement.innerHTML = "<p>No results found.</p>";
        return;
    }

    // Display each item in the filtered list
    items.forEach((item) => {
        const { index, image, title, rate, av } = item;
        const jList = document.createElement("div");
        jList.className = "jList";
        jList.innerHTML = `
            <img src="${image}" alt="">
            <h3>${title}</h3>
            <p>${rate}</p>
            <span id="key">${av}</span>`;
        
        rootElement.appendChild(jList);
        
        // Redirect to job details on click
        jList.addEventListener('click', () => {
            window.location.href = `jobs_details.html?id=${index}`;
        });
    });
};

// Initial display of all categories
displayItems(categories);







/*         With Debouncing

const categories = Array.from(jCategory);

const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

document.getElementById("searchBar").addEventListener("keyup", debounce((e) => {
    const searchData = e.target.value.toLowerCase();
    const fillterData = categories.filter((item) =>
        item.title.toLowerCase().includes(searchData)
    );
    displayItems(fillterData);
}, 300));

const displayItems = (items) => {
    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

    if (items.length === 0) {
        rootElement.innerHTML = "<p>No results found.</p>";
        return;
    }

    items.forEach((item) => {
        const { index, image, title, rate, av } = item;
        const jList = document.createElement("div");
        jList.className = "jList";
        jList.innerHTML = `<img src="${image}" alt="">
            <h3>${title}</h3>
            <p>${rate}</p>
            <span id="key">${av}</span>`;
        
        rootElement.appendChild(jList);
        jList.addEventListener('click', () => {
            window.location.href = `jobs_details.html?id=${index}`;
        });
    });
};

displayItems(categories);

*/

