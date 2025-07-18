
// writing the words. 
let filterWords = document.getElementById('filteredWords');
let inputSearch = document.getElementById('filterInput');
let showNumber = document.getElementById('wordCount');

// writting the text; 
const text = ['Hello mom, my name is miso. I love miso soup. And we are goint to find the m words.'];
// append it to the page; 
filterWords.appendChild(document.createTextNode(text[0]));

// filter the words;
function filterSearch() {
    inputSearch.addEventListener('input', (event) => {
        const filterValue = event.target.value.trim();
        const filteredWords = text[0].split(' ').filter(word => word.includes(filterValue) && filterValue !== '');
        if (filteredWords.length === 0) {
            filterWords.innerHTML = 'No words found';
        } else {
            const highLightedText = filteredWords.map(word => `<span class="highlight">${word}</span>`).join(' ');
            filterWords.innerHTML = highLightedText;
        }
        showNumber.innerHTML = filteredWords.length;
    });
}

// Call the function to attach the event listener
filterSearch();