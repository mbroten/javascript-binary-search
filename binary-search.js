var binarySearch = function(sortedArray, value, low, high){
    if (high < low){
        return -1;
    }
    
    var mid = Math.floor((low + high) / 2);
    var midValue = sortedArray[mid];
    
    if (midValue > value){
        return binarySearch(sortedArray, value, low, mid - 1);
    }
    
    if (midValue < value){
        return binarySearch(sortedArray, value, mid + 1, high);
    }
    
    return mid;
};

