const MaxHeap = require('./maxHeap');

const maxHeap = new MaxHeap();

// console.log(maxHeap.displayHeap());

maxHeap.insert(5);
// console.log(maxHeap.displayHeap());
maxHeap.insert(4);
// console.log(maxHeap.displayHeap());
maxHeap.insert(8);
// console.log(maxHeap.displayHeap());
maxHeap.insert(6);
// console.log(maxHeap.displayHeap());
maxHeap.insert(1);
// console.log(maxHeap.displayHeap());
maxHeap.insert(14);
// console.log(maxHeap.displayHeap());
maxHeap.insert(2);
// console.log(maxHeap.displayHeap());
maxHeap.insert(7);
// console.log(maxHeap.displayHeap());

// console.log('\n\n---------------------\n\n');
// maxHeap.remove();
// maxHeap.remove();
// maxHeap.remove();
// maxHeap.remove();
// maxHeap.remove();
// maxHeap.remove();
// maxHeap.remove();
// maxHeap.remove();
console.log(maxHeap.getMax());
console.log(maxHeap.displayHeap());

// console.log(maxHeap.displayHeap());
// console.log(maxHeap.getmax());