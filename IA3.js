function getAllPerm(str){
    
    function getAllPermutations(str) {
    var results = [];
        
    if (str.length === 1){
        results.push(str);
        return results;
    }
    
    for (var i = 0; i < str.length; i++){
        var firstChar = str[i];
        var charsLeft = str.substring(0, i) + str.substring(i + 1);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++){
            results.push(firstChar + innerPermutations[j]);
            }
        for (var x = 0; x < results.length; x++){
            }
        }
    return results
    }
    
    var counter = 0
    var regex=/(.)\1+/g
    
    var countrepeats =  function(results){
        for(var i = 0; i<results.length; i++){
            if(results[i].match(regex)){
                counter+=1
            }
        }
        return counter
    }
    
    
    console.log(countrepeats(getAllPermutations(str)))
}

console.log(getAllPerm("a"))








