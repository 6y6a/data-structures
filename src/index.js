const LinkedList = require('./LinkedList')


const a = 1, b = 2, c = 3, d = 4;

const list = new LinkedList();

list.addItem(a)
list.addItem(b)
list.addItem(c)
list.addItem(a)
list.addItem(b)
list.addItem(c)

list.showList();


list.removeItem(d)

console.log(list.size)

