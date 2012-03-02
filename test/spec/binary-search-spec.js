describe('Binary Search', function(){
    var oddLengthArray = [1,2,3,4,5];
    var oddLengthArray2 = [2,8,13,15,24,84,91];
    var oddLengthArray3 = [-27,-10,-1,0,7,35,56];
    
    var evenLengthArray = [1,2,3,4,5,6];
    var evenLengthArray2 = [7,9,25,46,59,98,104,309];
    var evenLengthArray3 = [-40,-24,-19,-17,0,4];

    it('can find a value at the beginnning of an odd length array', function(){
        var i = binarySearch(oddLengthArray, 1, 0, oddLengthArray.length-1);
        expect(i).toBe(0);
        
        i = binarySearch(oddLengthArray2, 2, 0, oddLengthArray2.length-1);
        expect(i).toBe(0);
        
        i = binarySearch(oddLengthArray3, -27, 0, oddLengthArray3.length-1);
        expect(i).toBe(0);
    });
    
    it('can find a value at the middle of an odd length array', function(){
        var i = binarySearch(oddLengthArray, 3, 0, oddLengthArray.length-1);
        expect(i).toBe(2);
        
        i = binarySearch(oddLengthArray2, 15, 0, oddLengthArray2.length-1);
        expect(i).toBe(3);
        
        i = binarySearch(oddLengthArray3, 0, 0, oddLengthArray3.length-1);
        expect(i).toBe(3);
    });
    
    it('can find a value at the end of an odd length array', function(){
        var i = binarySearch(oddLengthArray, 5, 0, oddLengthArray.length-1);
        expect(i).toBe(4);
        
        i = binarySearch(oddLengthArray2, 91, 0, oddLengthArray2.length-1);
        expect(i).toBe(6);
        
        i = binarySearch(oddLengthArray3, 56, 0, oddLengthArray3.length-1);
        expect(i).toBe(6);
    });
    
    it('can find a value at the beginning of an even length array', function(){
        var i = binarySearch(evenLengthArray, 1, 0, evenLengthArray.length-1);
        expect(i).toBe(0);
        
        i = binarySearch(evenLengthArray2, 7, 0, evenLengthArray2.length-1);
        expect(i).toBe(0);
        
        i = binarySearch(evenLengthArray3, -40, 0, evenLengthArray3.length-1);
        expect(i).toBe(0);
    });
    
    it('can find a value at the middle of an even length array', function(){
        var i = binarySearch(evenLengthArray, 3, 0, evenLengthArray.length-1);
        expect(i).toBe(2);
        
        i = binarySearch(evenLengthArray, 4, 0, evenLengthArray.length-1);
        expect(i).toBe(3);
        
        i = binarySearch(evenLengthArray2, 46, 0, evenLengthArray2.length-1);
        expect(i).toBe(3);
        
        i = binarySearch(evenLengthArray2, 59, 0, evenLengthArray2.length-1);
        expect(i).toBe(4);
        
        i = binarySearch(evenLengthArray3, -19, 0, evenLengthArray3.length-1);
        expect(i).toBe(2);
        
        i = binarySearch(evenLengthArray3, -17, 0, evenLengthArray3.length-1);
        expect(i).toBe(3);
    });
    
    it('can find a value at the end of an even length array', function(){
        var i = binarySearch(evenLengthArray, 6, 0, evenLengthArray.length-1);
        expect(i).toBe(5);
        
        i = binarySearch(evenLengthArray2, 309, 0, evenLengthArray2.length-1);
        expect(i).toBe(7);
        
        i = binarySearch(evenLengthArray3, 4, 0, evenLengthArray3.length-1);
        expect(i).toBe(5);
    });
    
    it('can find a value anywhere in an array', function(){
        var i, j, array, arrayLength, result;
        var arrays = [oddLengthArray, oddLengthArray2, oddLengthArray3,
            evenLengthArray, evenLengthArray2, evenLengthArray3];
        var arraysLength = arrays.length;
         
        for (i=0; i<arraysLength; i+=1){
            array = arrays[i];
            arrayLength = array.length;
            
            for (j=0; j<arrayLength; j+=1){
                result = binarySearch(array, array[j], 0, arrayLength-1);
                expect(result).toBe(j);
            }
        }
    });
    
    it('returns -1 when the target value is not in the specified array', function(){
        var i = binarySearch(oddLengthArray, -1, 0, oddLengthArray.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(oddLengthArray, 6, 0, oddLengthArray.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(oddLengthArray2, 0, 0, oddLengthArray2.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(oddLengthArray2, 16, 0, oddLengthArray2.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(oddLengthArray2, 92, 0, oddLengthArray2.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(oddLengthArray3, -100, 0, oddLengthArray3.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(oddLengthArray3, 1, 0, oddLengthArray3.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(oddLengthArray3, 1000, 0, oddLengthArray3.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(evenLengthArray, -1, 0, evenLengthArray.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(evenLengthArray, 7, 0, evenLengthArray.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(evenLengthArray2, 0, 0, evenLengthArray2.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(evenLengthArray2, 57, 0, evenLengthArray2.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(evenLengthArray2, 400, 0, evenLengthArray2.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(evenLengthArray3, -100, 0, evenLengthArray3.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(evenLengthArray3, 1, 0, evenLengthArray3.length-1);
        expect(i).toBe(-1)
        
        i = binarySearch(evenLengthArray3, 7, 0, evenLengthArray3.length-1);
        expect(i).toBe(-1)
    });
});
