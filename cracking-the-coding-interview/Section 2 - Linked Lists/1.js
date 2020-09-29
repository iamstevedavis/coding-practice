/*
 * Write code to remove duplicates from an unsorted linked list.
 */

class LinkedListNode {
  constructor(data) {
    this.data = data || null;
    this.next = null;
  }
}

class LinkedListException {
  constructor(message) {
    this.message = message;
    this.name = 'QueueException';
  }
}

class LinkedList {
  constructor() {
    this.first = null;
  }

  getHead() {
    return this.first;
  }

  prependToHead(data) {
    let head = data;
    let n = this.first;


    if (!n  || (n.data == null && n.next == null)) {
      this.first = head;
    } else {
      head.next = this.first;
      this.first = head;
    }
  }

  appendToTail(data) {
    let end = data;
    let n = this.first;


    if (n.data == null && n.next == null) {
      this.first = end;
    } else {
      while(n.next != null) {
        n = n.next;
      }
      n.next = end;
    }
  }

  printList() {
    let n = this.first;

    while(true) {
      console.log(n);
      if (n.next === null) {
        break;
      } else {
        n = n.next;
      }
    }
  }

  findDeleteDuplicate() {
    let n = this.first;
    let i = this.first;
    let prevNode = null;

    while(n.next != null) {
      while(i.next != null) {
        prevNode = i;
        i = i.next;
        if(i.data == n.data) {
          prevNode.next = i.next;
        }
      }
      n = n.next;
      i = n;
    }
  }
}
