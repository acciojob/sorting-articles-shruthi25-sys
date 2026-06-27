const articles = ["a", "an", "the"];

function stripArticle(str) {
    const words = str.trim().split(" ");

    if (words.length && articles.includes(words[0].toLowerCase())) {
        words.shift();
    }

    return words.join(" ");
}

function displaySortedList(arr, elementId) {
    const sorted = [...arr].sort((a, b) =>
        stripArticle(a).localeCompare(stripArticle(b))
    );

    const ul = document.getElementById(elementId);
    ul.innerHTML = "";

    sorted.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Example
const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
];

displaySortedList(bands, "band");
