const ListItem = require('./Node')

class LinkedList {
    constructor() {
        this.firstItem = null
        this.lastItem = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    addItem(item) {
        const newItem = new ListItem(item);

        if (this.isEmpty()) {
            this.firstItem = this.lastItem = newItem
        } else {
            this.lastItem.setNext(newItem)
            this.lastItem = newItem
        }

        this.size++
    }

    removeItem(item) {
        let currentItem = this.firstItem
        let previousItem
        const isEqualToFirstItem = currentItem.getData() === item

        if (isEqualToFirstItem) {
            this.firstItem = currentItem.getNext()
        } else {
            while(currentItem.getData() !== item && this.lastItem !== currentItem) {
                previousItem = currentItem
                currentItem = currentItem.getNext()
            }

            if (currentItem === this.lastItem) this.lastItem = previousItem

            previousItem.setNext(currentItem.getNext())
        }

        this.size--
    }


    showList() {
        let currentItem = this.firstItem

        while (currentItem) {
            console.log(currentItem)
            console.log(currentItem === this.lastItem)
            currentItem = currentItem.getNext()
        }
    }
}

module.exports = LinkedList

