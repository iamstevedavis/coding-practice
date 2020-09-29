class LinkedListNode {
  constructor(data) {
    this.data = data || null;
    this.next = null;
  }
}

class LinkedListException {
  constructor(message) {
    this.message = message;
    this.name = 'LinkedListException';
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

class HashMapException {
  constructor(message) {
    this.message = message;
    this.name = 'HashMapException';
  }
}

class HashMap {
  constructor(hashMap) {
    this.hashMap = hashMap || {};
  }

  getHashMap() {
    return this.hashMap;
  }

  insertListIntoMap(keyString, linkedList) {
    let hashCode = this.hash(keyString);
    let bucket = hashCode;

    if (!this.hashMap[bucket]) {
      this.hashMap[bucket] = linkedList;
    } else {
      throw new HashMapException('Bucket has existing linked list.');
    }
  }

  insertNodeIntoMap(keyString, data) {
    let hashCode = this.hash(keyString);
    let bucket = hashCode;

    if (!this.hashMap[bucket]) {
      this.hashMap[bucket] = new LinkedList();
      this.hashMap[bucket].appendToTail(new LinkedListNode({
        key: keyString,
        bucket: bucket,
        hashCode: hashCode,
        data: data
      }));
    } else {
      this.hashMap[bucket].appendToTail(new LinkedListNode({
        key: keyString,
        bucket: bucket,
        hashCode: hashCode,
        data: data
      }));
    }
  }

  printMap() {
    Object.keys(this.hashMap).forEach(function _print(item) {
      console.log(item);
    });
  }

  getBucket(key) {
    return this.hashMap[this.hash(key)] || [];
  }

  printBucket(key) {
    let bucket = this.hashMap[this.hash(key)];
    if (bucket) {
      bucket.printList();
    } else {
      console.log('[]');
    }
  }

  hash(str) {
    var hashValue = 0;
    if (str.length == 0) return hashValue;
    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hashValue = ((hashValue<<5)-hashValue)+char;
      hashValue = hashValue & hashValue; // Convert to 32bit integer
    }
    return hashValue;
  }
}

let stringArray = ['hello', 'world', 'w', 'e', 'go', 't', 'some big', 'stuff', 'e', 'w'];
let hashMap = new HashMap();

stringArray.forEach(function _storeStrings(string) {
  hashMap.insertNodeIntoMap(string, string);
});

