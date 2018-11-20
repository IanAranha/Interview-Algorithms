function Set() {
    // the var collection will hold our set
    this.collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (this.collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return this.collection;
    };
    // change code below this line
    this.add = function(item){
        if(!this.has(item)){
            this.collection.push(item)
            return true
        } 
        return false
    }
    
    this.remove = function(item){
        if(this.collection.indexOf(item) < 0){
            return false
        } else {
            this.collection.splice(this.collection.indexOf(item),1)
            return true
        }
    }
    
    this.size = function(){
        return this.collection.length
    }
    
   this.union = function(Set){
        var newColl = []
        console.log(Set.collection)
        for(var i = 0; i<this.collection.length;i++){
               newColl.push(this.collection[i])
               }
        for(var i = 0; i<Set.collection.length;i++){
            if(this.collection.indexOf(Set.collection[i]) < 0){
               newColl.push(Set.collection[i])
            }
        }
        return newColl
   }
}

var setA = new Set()
setA.add(10)
setA.add(20)
setA.add(30)
setA.add(20)
setA.add(50)
//console.log(setA.collection)
setA.remove(20)
//console.log(setA.size())
console.log(setA.collection)
    
var setB = new Set()
setB.add(10)
setB.add("a")
setB.add("V")
setB.add("g")
setB.add(50)
console.log(setB.collection)
//console.log(setB.size())
console.log()
console.log(setA.union(setB))
