const arrNum = [1,2,3,4,5,6,7,8,9];

const arrNumbersAreDropping = [9,8,7,6,5,4,3,2,1];

const unorderedNumbers = [1,3,2,5,4,7,5]

const arrStr = ["assd", "jcv","asgjv", "fghd"];

const twoDimensional = [[1,2,3],[1,2,3]]

const Mission1 = (arr) =>{
   return arr.filter(num => num%2 == 0)
}

console.log(Mission1(arrNum))

const Mission2 = (arr) => {
    return arr.filter(str => str.length === 4)
}

console.log(Mission2(arrStr))

const Mission3 = (arr) => {
    return arr.flat()
}

console.log(Mission3(twoDimensional))



const Mission4 = (arr) => {
    let theArrayIsInDescendingorder = true;

    let theArrayIsInAscendingOrder = true;

    for(i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1] ){
            theArrayIsInAscendingOrder = false;
        }
        if(arr[i] > arr[i-1] ){
            theArrayIsInDescendingorder = false;
        }
    }
    if(theArrayIsInAscendingOrder){
        return 1 
    }
    else if(theArrayIsInDescendingorder){
        return 2
    }
    else{
        return 0
    }
}
console.log(Mission4(arrNum))
console.log(Mission4(arrNumbersAreDropping))
console.log(Mission4(unorderedNumbers))


module.exports ={
    Mission1,
    Mission2,
    Mission3,
    Mission4 
}

