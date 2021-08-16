// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
      //implement bubble sort
      for (let i = 0; i<arr.length; i++){
            for(let j = 0; j < (arr.length - i - 1); j++){
                  if(arr[j] > arr[j+1]){
                        const lessVal = arr[j+1];
                        arr[j+1] = arr[j];
                        arr[j] = lessVal;
                  }
            }
      }
      //return the sorted array
      return arr;
}

function selectionSort(arr) {
      for(let i = 0; i < arr.length; i++){
            let indexOfmin = i;

            for(let j = i+1; j < arr.length; j++){
                  if(arr[j] < arr[indexOfmin]){
                        indexOfmin = j;
                  }
            }

            if(indexOfmin !== i){
                  let lessVal = arr[indexOfmin];
                  arr[indexOfmin] = arr[i];
                  arr[i] = lessVal;
            }
      }
      return arr;
}

function mergeSort(arr) {
      if(arr.length === 1){
            return arr;
      }

      const center = Math.floor(arr.length/2);
      const left = arr.slice(0, center); //not including index 2, center
      const right = arr.slice(center);

      return merge (mergeSort(left), mergeSort(right));
}

function merge(left, right) {
      const results = [];
      while (left.length && right.length ){

                  if(left[0] < right[0]){
                        results.push(left.shift());
                        
                  }else{
                        results.push(right.shift());
            }
      }
      return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
