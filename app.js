var listofIntegers=['1','2','3','4','5','6','7','8','9','10']
for(var i=1;i<=listofIntegers.length;i++){
    if(listofIntegers[i]%3===0){
        console.log(`${listofIntegers[i]},Three`);
    }
    else if(listofIntegers[i]%5===0){
        console.log(`${listofIntegers[i]},Five`);
    }
    else if(listofIntegers[i]%3===0 && listofIntegers[i]%5===0){
        console.log(`${listofIntegers[i]},ThreeFive`);
    }
    else{
        console.log('List is not divisible');
    }
}



