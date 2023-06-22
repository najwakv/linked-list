//CREATE-LINKED-LIST
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  //INSERTING AT THE BEGINING - Big-O = O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //INSERTING AT THE BEGINING - Big-O = O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  //INSERTING AT A SPECIFIC INDEX
  insert(value, index) {
    if (index < 0 || index > index.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //REMOVAL OF NODE FROM GIVEN INDEX
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index == 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  //REMOVAL OF NODE FROM GIVEN VALUE
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (value === this.head.value) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
      }
    }
    this.size--;
    return value;
  }

  //FIND A  NODE GIVEN ITS VALUUE
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let current = this.head;
    while (current) {
        if(current.value === value) {
            return i;
        }
        current = current.next;
        i++;
    }
    return -1;
  }

  //REVERSE A LINKED-LIST
  reverse(){
    let prev = null;
    let current = this.head;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let current = this.head;
      let listValue = "";
      while (current) {
        listValue += `${current.value} `;
        current = current.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();
console.log("list empty : ", list.isEmpty());
console.log("list size : ", list.getSize());
// list.print();
// list.insert(1, 0);
list.append(10);
// list.print();
list.append(20);
list.append(30);
list.insert(2, 2);
list.print();
// console.log(list.removeFrom(0));
// console.log(list.removeFrom(1));
console.log(list.search(50));
// list.print();
