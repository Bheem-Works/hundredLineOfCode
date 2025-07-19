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
        const filteredWords = text[0].split(' ').
        filter(word => word.includes(filterValue) && filterValue !== '');
         const highLightedText = filteredWords.
         map(word => `<span class="highlight">${word}</span>`).join(' ');
        filterWords.innerHTML = highLightedText;
        console.log("highLightWords",highLightedText);
    });
}

// Call the function to attach the event listener
filterSearch();


function Clouser(acessName){
    this.acessName = acessName;
    this.property_one = {
        user_name : "miso",
        user_number : 9810567505,
    user_function : function (isYes){
            if(isYes == 'yes'){
                return {
                    owner_name : 'vim',
                    owner_age : 20,
                    owner_home : "california",
                    owner_wife : 4,
                    owner_mood : 'happy'
                }
            } else {
                return "Owner Reject your purposal";
            }
        }
        }
}

const wantAnswer = new Clouser("miso");
console.log(wantAnswer.acessName);
console.log(wantAnswer.property_one.user_function("yes"));