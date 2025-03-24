function findMostFrequentItem(arr) {
    let frequency = {};

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        frequency[item] = (frequency[item] || 0) + 1;
    }

    let mostFrequentItem = null;
    let maxFrequency = 0;
    
    for (let item in frequency) {
        if (frequency[item] > maxFrequency) {
            mostFrequentItem = item;
            maxFrequency = frequency[item];
        }
    }
    console.log(`${mostFrequentItem} (${maxFrequency} times)`);
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

findMostFrequentItem(arr1);