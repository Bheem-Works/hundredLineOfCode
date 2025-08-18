// Link list by using the class; 

class StackNode{
    constructor(val){
        this.val = val; 
        this.next = null; 
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.size = 0; 
    }

    push(val){
        if(this.size === 0){
            this.top = new StackNode(val);
            console.log('if running');
        }else{
            const pushedNode = new StackNode(val);
            pushedNode.next = this.top;
            this.top = pushedNode;
            console.log(this.top,'value should be the more then the one');
        }
        this.size++; 
    }
    
    pop(){
        if(this.size == 0) return null; 
        const poppedNode = this.top; 
        this.top = this.top.next;
        this.size--;
        return poppedNode.val;
    }

    getTop(){
        return this.top.val;
    }
}

const linkList = new Stack();
linkList.push('a');
linkList.push('b');
console.log(linkList.size,'size');
linkList.pop();
console.log(linkList.size,'size');
