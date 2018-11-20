var called = 0; 
var hash = function(string) {
called++;
var hash = 0;
for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
return hash;
};
var HashTable = function() {
this.collection = {};
// change code below this line
this.add = function(k, v){
    var hashKey = hash(k);
    if (this.collection.hasOwnProperty(hashKey)){
        this.collection[hashKey].push({[k]: v});
    } else {
        this.collection[hashKey] = [];
        this.collection[hashKey].push({[k]: v});
    }
    console.log(this.collection);
};


this.lookup = function(k) { 
    var hashed = hash(k);
	if (this.collection.hasOwnProperty(hashed)) {
        var bucket = this.collection[hashed];
		var find = function(index) {
			if (bucket[index].hasOwnProperty(k)) {
				return bucket[index][k];
			} else if (index != 0) {
				return find(index - 1);
			} else {
				return null;
			};
		};
		return find(bucket.length - 1);
	} else {
		return null;
	};
};
    
this.remove = function(k){
    var hashed = hash(k);
    if (this.collection.hasOwnProperty(hashed)){
        if (this.collection[hashed].length === 1){
            delete this.collection[hashed];
        } else {
            this.collection[hashed] = this.collection[hashed].filter(function(item){
                return !item.hasOwnProperty(key);
            });
        }
    } else {
        return null;
    }
};

 };

var hasher = new HashTable()
hasher.add('Biology', 80)
hasher.add('Chemistry', 75)
hasher.add('Statistics', 98)
hasher.add('Biology', 33)
console.log(hasher.lookup('Biology'))