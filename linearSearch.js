//Return the index of the target element in a array of elements
function getTargetIndex(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}
console.log(getTargetIndex([-5, 2, 10, 4, 6], 10));
console.log(getTargetIndex([-5, 2, 10, 4, 6], 14));

//Big-O = O(n)