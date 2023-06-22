function recursiveBinary( array, target){
    return search(array, target, 0, array.length - 1);
}
function search(array, target, leftIndex, rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2 );
    while(leftIndex <= rightIndex){
        if(target === array[middleIndex]){
            return middleIndex
        }
        if(target < array[middleIndex]){
            return search(array, target, leftIndex, middleIndex -1)
        }
        if(target > array[middleIndex]){
            return search(array, target, middleIndex + 1, rightIndex)
        }
    }
    return -1;
}
console.log(recursiveBinary([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinary([-5, 2, 4, 6, 10], 1));