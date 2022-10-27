class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
class LinkedList {
  constructor(node = null) {
    this.node = node;
  }
  append(value) {
    let currentNode = this.node;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value);
    return currentNode.nextNode;
  }
  prepend(value) {
    let currentNode = new Node(value);
    currentNode.nextNode = this.node;
    this.node = currentNode;
    return this.node;
  }
  size() {
    let count = 0;
    let node = this.node;
    while (node) {
      node = node.nextNode;
      count += 1;
    }
    return count;
  }
  head() {
    return this.node;
  }
  tail() {
    let node = this.node;
    if (node == null) {
      return undefined;
    } else {
      while (node.nextNode) {
        node = node.nextNode;
      }
      return node;
    }
  }
  at(index) {
    let i = 0;
    let node = this.node;
    while (node) {
      if (i == index) {
        return node;
      }
      i += 1;
      node = node.nextNode;
    }
    return undefined;
  }
  pop() {
    let node = this.node;
    if (node == null) {
      return true;
    } else if (node.nextNode == null) {
      this.node = null;
      return true;
    } else {
      while (node.nextNode.nextNode) {
        node = node.nextNode;
      }
      node.nextNode = null;
      return true;
    }
  }
  contains(value) {
    let node = this.node;
    while (node) {
      if (node.value == value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }
  find(value) {
    let count = 0;
    let node = this.node;
    while (node) {
      if (node.value == value) {
        return count;
      }
      node = node.nextNode;
      count += 1;
    }
    return null;
  }
  toString() {
    let node = this.node;
    let string = "";
    while (node) {
      string += "( " + node.value + " ) -> ";
      node = node.nextNode;
    }
    string += node;
    return string;
  }
  insertAfter(value, index) {
    let newNode = new Node(value);
    let node = this.node;
    let i = 0;
    while (node) {
      if (i == index) {
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
        return true;
      }
      node = node.nextNode;
      i += 1;
    }
    return false;
  }
  insertBefore(value, index) {
    let newNode = new Node(value);
    let node = this.node;
    let prev = node;
    let i = 0;
    if (index == 0) {
      this.prepend(value);
      return true;
    } else {
      while (node) {
        if (index == i) {
          newNode.nextNode = node;
          prev.nextNode = newNode;
          return true;
        }
        prev = node;
        node = node.nextNode;
        i += 1;
      }
    }
    return false;
  }
  removeAt(index) {
    let node = this.node;
    let prev = null;
    let i = 0;
    while (node) {
      if (index == i) {
        if (prev == null) {
          this.node = node.nextNode;
          node.nextNode = null;
          return true;
        }
        prev.nextNode = node.nextNode;
        return true;
      }
      i += 1;
      prev = node;
      node = node.nextNode;
    }
    return false;
  }
}
