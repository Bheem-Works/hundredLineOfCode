// writing the words. 
let filterWords = document.getElementById('filteredWords');
let  inputSearch = document.getElementById('filterInput').value;
let showNumber = document.getElementById('wordCount');

// writting the text; 
const text = ['Hello mom, my name is miso. I love miso soup. And we are goint to find the m words.'];
// append it to the page; 
filterWords.appendChild(document.createTextNode(text[0]));

// filter the words;
function filterWordsFunction() {
    const inputSearch = document.getElementById('filterInput').value.toLowerCase();
    const words = text[0].split(' ');
    console.log(words);
    const filterWords = words.filter(word => word.toLowerCase().includes(inputSearch));
    console.log("filteredWordsLength",filterWords.length);
    console.log(filterWords);
}
filterWordsFunction();
