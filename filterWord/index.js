// writing the words. 
const filterWords = document.getElementById('filteredWords');
const inputSearch = document.getElementById('filterInput').value;
const showNumber = document.getElementById('wordCount');

// writting the text; 
const text = ['Hello mom, my name is miso. I love miso soup. And we are goint to find the m words.'];
// append it to the page; 
filterWords.appendChild(document.createTextNode(text[0]));
// filter the words;
