
class Node {
    constructor(){
        this.value = null;
        this.next = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = null;
    }

    append(value){
        if(this.head === null){
            this.head = new Node(value)
            this.head.value = value
            return this.head
        } 
            //console.log("i got here")
            let node = this.head;
            console.log(node.next)
            //node.next = null
            if (node.next !== null) {
                node.next
            }
            else if(node.next === null){
                    console.log("i got here")
                    node.next = new Node()
                    node.next.value = value
                    return node.next
                }
                
            }
            
            
}
    


let myList = new LinkedList()
console.log(myList)
console.log(myList.append(5))

console.log(myList.append(10))

console.log(myList)

