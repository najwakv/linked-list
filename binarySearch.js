//Return the index of the target element in a array of elements
function getTargetIndex(array, target){
    let leftIndex = 0
    let rightIndex = array.length - 1
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if( target === array[middleIndex]){
            return middleIndex
        }
        if( target < array[middleIndex]){
            rightIndex = middleIndex - 1
        }
        if( target > array[middleIndex]){
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
console.log(getTargetIndex([-5, 2, 4, 6, 10 ], 6));

//Big-O = O(n)