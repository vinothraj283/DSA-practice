/*
Problem : Return the indices of the elements that sum up to target in a Sorted Array

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

*/

/*Solution in JS*/
const readline = require("readline");

var twoSum = function(arr, target) {
    let st = 0, end = arr.length - 1;
    while (st < end) {
        let sum = arr[st] + arr[end];
        if (sum === target) {
            return [st + 1, end + 1]; // 1-based indices
        } else if (sum < target) {
            st++;
        } else {
            end--;
        }
    }
    return []; // or null if you prefer
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by commas (e.g. 2,7,11,15): ", arrInput => {
    rl.question("Enter target sum: ", targetInput => {
        const arr = arrInput.split(",").map(s => Number(s.trim()));
        const target = Number(targetInput);

        const result = twoSum(arr, target);
        console.log("Result (1-based indices):", result);

        rl.close();
    });
});