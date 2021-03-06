/*
 * Write an algorithm remove a given node from a linked list.
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


    if (!n || (n.data == null && n.next == null)) {
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
      console.log(n.data);
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

  /*
   * This works by virtue of that fact that when
   * lead pointer reaches the end, the trailing pointer
   * is k elements behind, or in the k to last place.
   */
  findKtoLast(k) {
    let trailingPointer = this.first;
    let leadPointer = this.first;

    for (let j = 0; j < k - 1; ++j) {
      leadPointer = leadPointer.next;
    }

    while (leadPointer.next != null) {
      trailingPointer = trailingPointer.next;
      leadPointer = leadPointer.next;
    }

    return trailingPointer;
  }

  removeNode(p1) {
    let p1Next = p1.next;
    let runner = this.first;

    while(runner.next != null) {
      runner = runner.next;
      if(runner == p1) {
        break;
      }
    }

    while(p1Next != null) {
      runner = p1Next;
      p1Next = p1Next.next;
    }
  }
}

let myList = new LinkedList();
for(let i = 1; i < 11; i++) {
  let myNode = new LinkedListNode(i.toString());
  myList.appendToTail(myNode);
}

let nodeToRemove = myList.findKtoLast(6);
console.log(nodeToRemove.data);

myList.removeNode(nodeToRemove);

myList.printList();
