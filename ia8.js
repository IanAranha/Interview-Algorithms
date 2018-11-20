function LinkedList() {
    var length = 0; 
    var head = null; 

    var Node = function(element){
        this.element = element; 
        this.next = null; 
    }; 
    
    this.head = function(){
        return head;
    };

    this.size = function(){
        return length;
    };

    this.add = function(element){
        //create a new node first with element as the data.
        var node = new Node(element)
        //create a pointer
        var currentNode
        
        //If the head is empty, just add the header to the new node
        if(head === null){
            head = node;
        } else {
            //If the head is not empty, point the pointer to the head to start.
            currentNode = head;
            //iterate from head to the end where node.next == null. If node.next == null, stop
            while(currentNode.next){
                currentNode = currentNode.next
            }
            //point the last node pointer to the new node
            currentNode.next = node;
        }
        //increase the length
        length++
    };

    this.remove = function(element){
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        
        length --;
    };

    this.isEmpty = function(){
    if(this.size === 0){
      return true
    }
    return false
  }

    this.indexOf = function(element){
    var count = 0
    var currentNode = head
    if(currentNode.element === element){
      return count
    } else {
      while(currentNode.element != element){
        currentNode = currentNode.next
        count++
      }
      return count  
    }
  }

    this.elementAt = function(index){
    var count = 0
    var currentNode = head
    if(index > list.size()-1){
        return "Cannot read null"
    }
    if( count === index){
      return head
    } else {
      while(count != index){
        currentNode = currentNode.next
        count++
      }
      return currentNode.element
    }
  }
    
    this.removeAt = function(index){
        var count = 0
        var currentNode = head
        var previousNode
        if(index < 0){
          return null
        }
        if(index >= length){
          return null
        }
        if(count === index){
            previousNode = currentNode
            head = currentNode.next
            length--
            return previousNode.element
        } else {
            while(count != index){
                previousNode = currentNode
                currentNode = currentNode.next
                count++
            }
        }
        var current_element = currentNode.element
        previousNode.next = currentNode.next
        return (current_element)
    }
    
    this.addAt = function(index){
        var counter = 0
        var currentNode = head
        var previousNode
        
        if(index < 0){
            console.log("Impossible to add")
        }
        if(index === 0){
            
        }
    }
}




var list = new LinkedList()
//console.log(list)
console.log(list.size())                    // <----0
list.add('Apple')
list.add('Banana')
list.add('Cucumber')
list.add('Deli Meats')
list.add('Eggs')
list.add('Fish')
console.log(list.size())                    // <----6
console.log(list.elementAt(0))              // <----Apple
console.log(list.elementAt(3))              // <----Deli Meat
list.remove("Deli Meats")
console.log(list.elementAt(3))              // <----Eggs
console.log(list.size())                    // <----5
console.log(list.elementAt(4))            // <----Fish
console.log(list.removeAt(3))

