export class MyArray {
  constructor() {
    this.length = 0;
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length++;
    }

    return this.length;
  }

  shift() {
    if (this.length === 0) return;

    const removed = this[0];

    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    // this[0] = this[1]
    // this[1] = this[2]
    // this[2] = this[3]
    // this[3] = this[4]

    delete this[this.length - 1];
    this.length--;

    return removed;
  }

  unshift(...args) {
    //["wolf", "fish"]
    let i = this.length - 1;
    while (i >= 0) {
      this[args.length + i] = this[i];

      i--;
    }
    // let's say:
    // current array: ["rabbit", "dog", "cow"]
    // args: ["wolf", "fish"]

    // this[2 + 2] = this[2]
    // this[2 + 1] = this[1]
    // this[2 + 0] = this[0]
    // Final array: [..., ..., "rabbit", "dog", "cow"]

    i = 0;
    for (i; i < args.length; i++) {
      this[i] = args[i];
    }
    // this[0] = "wolf"
    // this[1] = "fish"
    // Final array: ["wolf", "fish", "rabbit", "dog", "cow"]

    this.length += args.length;
    return this.length;
  }

  // cb - Callback
  map(cb) {
    const newArray = new MyArray();

    for (let i = 0; i < this.length; i++) {
      newArray.push(cb(this[i], i));
    }

    return newArray;
  }

  filter(cb) {
    const newArray = new MyArray();

    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i)) {
        newArray.push(this[i]);
      }
    }

    return newArray;
  }

  indexOf(el) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === el) return i;
    }

    return -1;
  }

  lastIndexOf(el) {
    for (let i = this.length - 1; i >= 0; i--) {
      if (this[i] === el) return i;
    }

    return -1;
  }

  reverse() {
    // let's say
    // current array: ["a", "b", "c", "d"]
    // expected result: ["d", "c", "b", "a"]

    let left = 0;
    let right = this.length - 1;

    while (left < right) {
      const temp = this[left];
      this[left] = this[right];
      this[right] = temp;

      left++;
      right--;
    }
    // Modern way to swap array elements:
    // [this[0], this[3]] = [this[3], this[0]]
    // [this[1], [this[2]]] = [this[2], this[2]]

    return this;
  }

  reduce(cb, initialValue) {
    const isInitProvided = initialValue !== undefined;

    let prev = isInitProvided ? initialValue : this[0];
    let i = isInitProvided ? 0 : 1;

    for (i; i < this.length; i++) {
      prev = cb(prev, this[i], i);
    }

    return prev;
  }

  forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  }

  join(separator) {
    separator = separator === undefined ? "," : separator;
    let res = "";

    for (let i = 0; i < this.length - 1; i++) {
      res = res + this[i] + separator;
    }

    res = res + this[this.length - 1];
    return res;
  }
}
