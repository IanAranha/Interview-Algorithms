var Node = function(element){
    this.element = element; 
    this.next = null; 
};


var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");

Kitten.next = Puppy;

var Dog = new Node("Dog")
var Cat = new Node('Cat')

Puppy.next =Cat;
Cat.next = Dog;

console.log(Kitten);