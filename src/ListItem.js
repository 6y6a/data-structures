class ListItem {
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

    setNext(listItem) {
        this.next = listItem
    }

    getNext() {
        return this.next
    }
}

module.exports = ListItem