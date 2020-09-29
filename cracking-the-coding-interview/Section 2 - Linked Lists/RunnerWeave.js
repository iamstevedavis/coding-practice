class LinkedListNode {
  constructor(data) {
    this.data = data || null;
    this.next = null;
  }

  setData(data) {
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
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
}

let myList = new LinkedList();

for(let j = 1; j < 5; j++) {
  let node = new LinkedListNode();
  if (j > 2) {
    node.setData('b' + j.toString());
    myList.appendToTail(node);
  } else {
    node.setData('a' + j.toString());
    myList.appendToTail(node);
  }
}

myList.printList();
myList.runnerWeave();
myList.printList();

/*
Let n = 2. We are starting with a list:

a1 -> a2 -> b1 -> b2
Let p1 be a "fast" pointer initially pointing to the successor of head.
Let p2 be a "slow" pointer initially pointing to the head.

      p1
a1 -> a2 -> b1 -> b2
p2
We move p1 by two and p2 by one until p1 reaches the end of the list (there is no next).

                  p1
a1 -> a2 -> b1 -> b2
      p2
Move p1 back to the head.

p1
a1 -> a2 -> b1 -> b2
      p2
Advance p2.

p1
a1 -> a2 -> b1 -> b2
            p2
Take element pointed by p2 and move it after p1. Advance p1 after inserted element.

            p1
a1 -> b1 -> a2 -> b2
                  p2
Take element pointed by p2 and move it after p1. Advance p1 after inserted element.

                       p1
a1 -> b1 -> a2 -> b2
                  p2
p1 is null, terminate.
*/
