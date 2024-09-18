
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
        
        let current = this.head
        let previous = null

        //console.log(current)
        if (current === null) return null

        if (current.next === null ){
            return null
        }

        while (current.next !== null){

            previous = current;
            current = current.next
            
        } if ( current.next === null) {
            
            //delete previous.next KINDA works
            console.log(previous, "previous")
            console.log(current, "current")

            previous.next = null

            console.log(previous)
            
            return current
        }
        
    }

    contains(value){

        let node = this.head;
        
        if(node == null) { return null }
        // this accounts for the head node
        if(node.value === value) { return true}
        
        while(node.next !== null){
            node = node.next
            
        }   if(node.value === value){
            
                return true
        } else {
            return false
        }
    }

    find(value){
        let arr = [];
        let node = this.head;

        if(node === null) { return null}

        //acct for first node
        if (node.value === value){
            return value
        } else {
            "not found"
        }

        while(node.next !== null){

            node = node.next
            arr.push(node)

        } if(node.value === value){
            return value
        } else {
            return " not found "
        }
    }

    toString(){

        let printDiv = document.createElement("div")
        printDiv.setAttribute("id", "printDiv")
        
        document.body.appendChild(printDiv)

        console.log(printDiv)

        return "print"
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


console.log(myList.atIndex(5))

console.log("above is the completed indexAT")

console.log(myList.pop())

console.log(myList)

console.log(myList.contains(5))

console.log(myList.find(2))

console.log(myList.toString())

