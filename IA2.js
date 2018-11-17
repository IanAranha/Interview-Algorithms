function updateInventory(arr1, arr2){
    //Update new inventory quantities immediately.
    arr1.map(function(item1){
        return arr2.map(function(item2){
            if(item1[1] === item2[1]){
                item1[0] += item2[0]
            }
        })
    });
    
    //check to see if all items are in currentInventory.
    //push the names for each array to new ones and compare, then find the index and move that index to array 1.
    var index
    var namesCurrInv = []
    var namesNewInv = []
    
    //push all arr1 item names to new array
    arr1.map(function(item){
        namesCurrInv.push(item[1])
    })
    
    //push all arr2 item names to new array
    arr2.map(function(item){
        namesNewInv.push(item[1])
    })
    
    //for each item in arr2, search if name is in arr1.
    //if not, find the index in arr2 and push it to //arr1
    
    //start at the newInventory-names-only array
    //for each item
    namesNewInv.map(function(item){
        //if the item does not exist in the current-inventory-names-only array
        if(namesCurrInv.indexOf(item) < 0){
            //set index value to that index.
            index = namesNewInv.indexOf(item)
            //since namesnewInv items have same index as arr2, just push arr2[index to arr1]
            arr1.push(arr2[index])
        }
    })
    arr1.sort(function(a, b){return a[1] > b[1] ? 1 : -1;})
    return arr1
}   

console.log(updateInventory(
    [[21, "Bowling Ball"], 
     [2, "Dirty Sock"], 
     [1, "Hair Pin"], 
     [5, "Microphone"]], 
    [[2, "Hair Pin"], 
     [3, "Half-Eaten Apple"], 
     [67, "Bowling Ball"], 
     [7, "Toothpaste"]]))
//should return 
//[[88, "Bowling Ball"], 
//[2, "Dirty Sock"], 
//[3, "Hair Pin"], 
//[3, "Half-Eaten Apple"], 
//[5, "Microphone"], 
//[7, "Toothpaste"]].

console.log(updateInventory([
    [21, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [1, "Hair Pin"], 
    [5, "Microphone"]], 
    []))
//should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]).


console.log(updateInventory(
    [], 
    [
        [2, "Hair Pin"], 
        [3, "Half-Eaten Apple"], 
        [67, "Bowling Ball"], 
        [7, "Toothpaste"]
    ])) 
//should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].


console.log(updateInventory(
    [
        [0, "Bowling Ball"], 
        [0, "Dirty Sock"], 
        [0, "Hair Pin"], 
        [0, "Microphone"]
    ], 
    [
        [1, "Hair Pin"], 
        [1, "Half-Eaten Apple"], 
        [1, "Bowling Ball"], 
        [1, "Toothpaste"]
    ]))
//should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].