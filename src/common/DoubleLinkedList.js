class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default class DoubleLinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    let newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    let newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  removeHead() {
    if (!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return val;
  }

  removeTail() {
    if (!this.tail) return null;
    let val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return val;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }

  indexOf(value) {
    let currentNode = this.head;
    let indexes = [];
    let currentIndex = 0;
    while (currentNode) {
      if (currentNode.value === value) indexes.push(currentIndex);
      currentNode = currentNode.next;
      currentIndex++;
    }
    return indexes.length > 0 ? indexes : null;
  }

  reverse() {
    if (this.length < 2) return;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode) {
      let true_next = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = true_next;

      this.head = currentNode;
      currentNode = true_next;
    }
    this.tail = newTail;
  }
}
