Array.prototype.myOwnFilter = function (callback) {

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function")
    }

    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            let value = callback(this[i], i, this)
            console.log(this)
            if (value) newArray.push(this[i])
        }
    }
    return newArray
}

const sampleArray = [1, 2, 3, 4];

const result = sampleArray.myOwnFilter((value, index) => {
    return value > 2;
})

console.log(result);