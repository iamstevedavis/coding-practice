/*
 * Describe how you could use a single array to implement three stacks.
 * Hints: #2, #72, #38, #58
 */

class StackNode {
  constructor(data) {
    this.data = data || null;
    this.next = null;
  }
}

class StackException {
  constructor(message) {
    this.message = message;
    this.name = 'StackException';
  }
}

class MyStack {
  constructor() {
    this.top = null;
  }

  pop() {
    if (this.top == null) {
      throw new StackException('Empty Stack!');
    }

    var item = this.top.data;
    this.top = this.top.next;
    return item;
  }

  push(item) {
    let t = new StackNode(item);
    t.next = this.top;
    this.top = t;
  }

  peek() {
    if (this.top == null) {
      throw new StackException('Empty Stack!');
    }
    return this.top.data;
  }
}

loseCode = function(str){
  let hash = 0;
  let i = 0;
  for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash += char;
  }
  return hash;
}



//let theStack = new MyStack();
var theArr = new Object;
var otherArr = new Object;
var j = 0;
for (j = 0; j < 100; j++) {
  let hash = loseCode(Math.round(Math.random() * 10).toString());
  if (!theArr[hash]) {
    otherArr[hash] = { count: 1 };
    let theStack = new MyStack();
    theStack.push(j.toString());
    theArr[hash] = theStack;
  } else {
    otherArr[hash].count = otherArr[hash].count + 1;
    theArr[hash].push(j.toString());
  }
}

/*var j = 0;
for (j = 0; j < 5; j++) {
  let hash = loseCode(j.toString());
  debugger;
  if (!theArr[hash]) {
    let theStack = new MyStack();
    theStack.push(j.toString());
    debugger;
    theArr[hash] = theStack;
    debugger;
  } else {
    console.log('here');
    theArr[hash].push(j.toString());
  }
}*/

console.log(otherArr);

/*console.log(theArr['49'])

for (var n = 0; n < 10; n++) {
  console.log();
}

//theArr[loseCode('hello')] = 'worked';
//console.log(theArr[loseCode('hello')]);

//console.log(loseCode('hello'));


/*

theStack.push({
  Message: 'Hello!'
});
try {
  console.log(theStack.pop())
} catch (e) {
  console.log(e.message, e.name);
}

*/
