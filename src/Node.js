class Node {
    constructor(data) {
        this.data = data
        this.next = null
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
}

module.exports = Node
