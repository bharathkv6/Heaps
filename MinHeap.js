/*
class MinHeap {
    constructor() {
        this.heap = [];
    }
    getMin = () => {
        return this.heap[0];
    }
    insert = (val) => {
        this.heap.push(val);
        if (this.heap.length > 0) {
            let current = this.heap.length - 1;
            while (current > 1 && this.heap[current] < this.heap[Math.floor(current / 2)]) {
                [this.heap[current], this.heap[Math.floor(current / 2)]] = [this.heap[Math.floor(current / 2), this.heap[current]]];
                current = Math.floor(current / 2);
            }
        }
    }
    remove = () => {
        if (this.heap.length === 0) {
            return null;
        }

        let smallest = this.heap[0];
        if (this.heap.length === 1) {
            this.heap = [];
            return smallest;
        }
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.splice(this.heap.length - 1);

        let current = 0;
        let leftIndex = 2 * current;
        let rightIndex = 2 * current + 1;

        while (this.heap[leftIndex] && this.heap[rightIndex] && this.heap[leftIndex] < this.heap[current] || this.heap[rightIndex] < this.heap[current]) {
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                [this.heap[current], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[current]];
                current = leftIndex;
            } else {
                [this.heap[current], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[current]];
                current = rightIndex;
            }
            leftIndex = 2 * current;
            rightIndex = 2 * current + 1;
        }
        return smallest;
    }
    displayHeap = () => {
        console.log(this.heap);
    }
}

export default MinHeap;

*/

function MinHeap() {
    this.heap = [];
}

MinHeap.prototype.insert = function (val) {
    this.heap.push(val);
    if (this.heap.length > 1) {
        let current = this.heap.length - 1;
        while (current > 0 && this.heap[current] < this.heap[Math.floor((current - 1) / 2)]) {
            const temp = this.heap[current];
            this.heap[current] = this.heap[Math.floor((current - 1) / 2)];
            this.heap[Math.floor((current - 1) / 2)] = temp;
            current = Math.floor((current - 1) / 2);
        }
    }
}

MinHeap.prototype.getMin = function () {
    return this.heap[0] || null;
}

MinHeap.prototype.remove = function () {
    if (this.heap.length === 0) {
        return null;
    }

    let smallest = this.heap[0];
    if (this.heap.length === 1) {
        this.heap = [];
        return smallest;
    }
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.splice(this.heap.length - 1);

    let current = 0;
    let leftIndex = 2 * current + 1;
    let rightIndex = 2 * (current + 1);

    while (this.heap[leftIndex] && this.heap[rightIndex] && this.heap[leftIndex] < this.heap[current] || this.heap[rightIndex] < this.heap[current]) {
        if (this.heap[leftIndex] < this.heap[rightIndex]) {
            [this.heap[current], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[current]];
            current = leftIndex;
        } else {
            [this.heap[current], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[current]];
            current = rightIndex;
        }
        leftIndex = 2 * current + 1;
        rightIndex = 2 * (current + 1);
    }
    if (this.heap[leftIndex] && !this.heap[rightIndex]) {
        if (this.heap[leftIndex] < this.heap[current]) {
            [this.heap[current], this.heap[leftIndex]] = [this.heap[leftIndex], this.heap[current]];
        }
    }
    return smallest;
}

MinHeap.prototype.displayHeap = function () {
    console.log(this.heap);
}

module.exports = MinHeap;