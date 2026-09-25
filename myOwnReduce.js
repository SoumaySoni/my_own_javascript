Array.prototype.myOwnReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    let accumulator = initialValue !== undefined ? initialValue : this[0];

    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {

            accumulator = callback(accumulator, this[i], i, this);

        }
    }

    return accumulator;
};

const arr = [1, 2, 3, 4];

const sum = arr.myOwnReduce((acc, curr) => acc + curr, 0);
console.log(sum);

const product = arr.myOwnReduce((acc, curr) => acc * curr, 1);
console.log(product);
