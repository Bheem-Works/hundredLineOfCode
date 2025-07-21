function StopWatch(){
    // Varaibles names;
    let startTime,endTime,running,duration = 0;

    this.start = function () {
    if(running)
        throw new Error('The timer is already running');

    running = true;
    startTime = new Date();
    };

    this.stop = function () {
        if(!running)
            throw new Error('StopWatch is not started');
           running = false;  
           endTime = new Date();
        
           let second = (endTime.getTime() - startTime.getTime()) / 1000;
           duration += second;
    };

    this.reset = function () {
    startTime = null;
    endTime = null;
    running = false; 
    duration = 0; 
    }; 

    Object.defineProperty(this,'duration',{
        get : function () {
            return duration;
        }
    })
}

const sw = new StopWatch();

// class
// Sum of the numbers; By using the this methods; 
function varo(something){
    console.log(this.a,something);
    return this.a + something;
}
{
    var foo = {a:3};
    var too = varo.bind(foo);
    var zoo = too(3); 
    console.log(zoo); // 5; 
}



class Todolist {
    constructor(){
        this.store = []; 
        this.length = 0; 
    }

    add(inputValue){
        this.store[this.length] = inputValue;
    }

    remove(number){
        this.store = this.store.filter((value,index)=>{
            return index  !== number;
        })
    }

    update(index,value){
        this.store[index] = value;
    }

    read(index){
        return this.store[index];
    }
}

{
    const go = new Todolist();
    // let's test it. ... 
    console.log(go.add('youtube')); 
    console.log([...go.store]); // i used the spread operator for set it to the new arrays; 
    // let's call this.. yeeeh   
}   