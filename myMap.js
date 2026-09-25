Array.prototype.myMap = function (callback) {

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    const newArray = [];

    for (let i = 0; i < this.length; i++) {

        if (this.hasOwnProperty(i)) {
            newArray[i] = callback(this[i], i, this);
        }
    }

    return newArray;
};

const arr = [1, 2, 3];

const customObjects = arr.myMap((num, index) => ({ value: num, index: index }));
console.log(customObjects);

const doubled = arr.myMap((num) => num * 2);
console.log(doubled);