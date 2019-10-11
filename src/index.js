const LinkedList = require('./LinkedList')


const a = 1, b = 2, c = 3, d = 4;

const list = new LinkedList();

list.addFirst(a)
list.addFirst(b)
list.addFirst(c)
list.addFirst(d)

console.log(list.toString())

