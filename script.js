
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
            //console.log(node.next)
            //node.next = null
            if (node.next !== null) {
                node.next
            }
            else if(node.next === null){
                    //console.log("i got here")
                    node.next = new Node()
                    node.next.value = value
                    return node.next
                }
                
            }

    prepend(value){
        if(this.head === null){
            this.head = new Node(value)
            this.head.value = value;
            return this.head
        } else {
            let node = this.head
            this.head = new Node(value)
            this.head.value = value
            this.head.next = node

            return this.head
        }
    }

    size(){
        let count = 1;
        let node = this.head;

       // console.log(node.next)

        while(node.next !== null){
            count++
            node = node.next
        }

        return count            
    }

    getHead(){
        return this.head
    }

    getTail(){
        let node = this.head
        
        while(node.next !== null){
            //console.log("I got here")
            node = node.next
        } return node.value
    }

    atIndex(index){
        let arr = []

        let node = this.head;
        arr.push(node)

        while(node.next !==null){
            
            node = node.next
            arr.push(node)
        }
        return arr[index]
    }

    pop(){
        
        let node = this.head

        let current = this.head
        let previous = null
        
        while(current.next !== null){
            //node = node.next

            previous = current
        
            current = current.next
             
        } if(current.next === null){
            console.log(previous)
            current.next = previous
             
        }
        
    }
}



let myList = new LinkedList()
console.log(myList)
console.log(myList.append(5))
console.log(myList.append(10))
console.log(myList.prepend(2))
console.log(myList)
console.log(myList.size())
console.log(myList.getHead())
console.log(myList.getTail())


console.log(myList.atIndex(0))

console.log(myList.pop())

console.log(myList)