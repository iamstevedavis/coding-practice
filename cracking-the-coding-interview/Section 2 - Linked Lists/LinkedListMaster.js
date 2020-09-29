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

  runnerWeave() {
    let p2Slow = this.first;
    let p1Fast = this.first.next;

    while (p1Fast.next != null) {
      p2Slow = p2Slow.next;
      p1Fast = p1Fast.next.next;
    }

    p1Fast = this.first;
    p2Slow = p2Slow.next;

    while (true) {
      let origP1 = p1Fast;
      let origP2 = p2Slow;

      p1Fast = p1Fast.next;
      p2Slow = p2Slow.next;

      origP2.next = origP1.next;
      origP1.next = origP2;

      if (p2Slow.next != null) {
        p1Fast.next.next = p2Slow;
      } else {
        p1Fast.next = p2Slow;
        break;
      }
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

  isPalindrome() {
    let p2Slow = this.first;
    let p1Fast = this.first.next;
    let size = 2;
    let stack = new Array(p2Slow);

    while (p1Fast.next != null) {
      p2Slow = p2Slow.next;
      stack.push(p2Slow);
      p1Fast = p1Fast.next;

      if(p1Fast) {
        if (p1Fast.next != null) {
          size += 2;
          p1Fast = p1Fast.next;
        } else {
          size++;
          break;
        }
      }
    }

    if (size % 2 == 0) {
      p2Slow = p2Slow.next;
    }

    while (p2Slow != null) {
      let stackItem = stack.pop();

      if (p2Slow.data != stackItem.data) {
        return false;
      }
      p2Slow = p2Slow.next;
    }

    if(stack.length) {
      return false;
    }
    return true;
  }
}
