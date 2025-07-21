class AddList {
  constructor() {
    this.store = [];
    this.length = 0;
  }

  add(newValue) {
    this.store.push(value);
  }

  remove(number) {
    this.store = this.store.filter((value, index) => {
      return index !== number;
    });
  }
}
/* 
so don't we have the all the thing's what the to do list actually need? 
we can ad and delte 
read also. ? 
update also. okay but we have to acess that value again 
lik this ..
arra = [1,2,3,4,5]
arra[0] = 10; 
like this..>> ? 
yes
so we have to put the index vaue for write that. 
yes index and new value
can we check that create and the delet is working or not by using the console.log? or the terminal. 
can you acess that? 

yes you can check with console for testing
you did Create and Delete
but you still need Update and Read
*/
const Push = new AddList();
console.log(Push.add("new"));
console.log([...push.store]);
console.log(Push.add("new one"));
console.log([...push.store]);
console.log(Push.remove(0));
console.log([...push.store]);


// --- why terminal say that value is not defined?? 

// be right back 
// okay i will go for dinner then. . 
// will this works?? 
// yes
// push .store for update them? or restore them again? 
console.log("another one\n\n ----");

// I want to delete the value like this through the index numbers;
let items = [1, 2, 3, 4];
let itemIdx = items[1];
function filterItems(items, idx) {
  const filterItem = items.filter((itm) => itm === idx);
  return filterItem;
}

console.log(filterItems(items, itemIdx));


// see this. 
// if live share is acessed write something's over here. 
console.log("here is the thing's that i have write it down here. haha");