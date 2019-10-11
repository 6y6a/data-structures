const Node = require('./Node')

class LinkedList {
    constructor() {
        this.firstElement = null
        this.lastElement = null
        this.size = 0
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    // Add element to the beginning of linked list, O(1)
    addFirst(element) {
        this.firstElement = new Node(element, this.firstElement)
        if (this.isEmpty()) this.lastElement = this.firstElement
        this.size++
    }

    addItem(item) {
        const newItem = new Node(item);

        if (this.isEmpty()) {
            this.firstElement = this.lastElement = newItem
        } else {
            this.lastElement.setNext(newItem)
            this.lastElement = newItem
        }

        this.size++
    }

    removeItem(item) {
        let currentItem = this.firstElement
        let previousItem
        const isEqualToFirstItem = currentItem.getData() === item

        if (isEqualToFirstItem) {
            this.firstElement = currentItem.getNext()
        } else {
            while(currentItem.getData() !== item && this.lastElement !== currentItem) {
                previousItem = currentItem
                currentItem = currentItem.getNext()
            }

            if (currentItem === this.lastElement) this.lastElement = previousItem

            previousItem.setNext(currentItem.getNext())
        }

        this.size--
    }


    toString() {
        let currentElement = this.firstElement
        let resultString = ''
        let index = 1

        while(currentElement) {
            resultString += currentElement.toString()
            if (this.size !== index) resultString += ', '
            currentElement = currentElement.getNext()
            index++
        }

        return resultString
    }
}

module.exports = LinkedList

