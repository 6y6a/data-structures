class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }

    setData(data) {
        this.data = data
    }

    getData() {
        return this.data
    }

    setNext(element) {
        this.next = element
    }

    getNext() {
        return this.next
    }

    toString() {
        return this.data.toString()
    }
}

module.exports = Node
