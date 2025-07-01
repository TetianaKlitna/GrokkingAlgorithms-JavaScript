class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const WEIRD_PRIME = 31;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const ch = key[i];
      const value = ch.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const ind = this._hash(key);

    if (!this.keyMap[ind]) {
      this.keyMap[ind] = [];
    }
    this.keyMap[ind].push([key, value]);
  }

  get(key) {
    const ind = this._hash(key);
    if (!this.keyMap[ind]) {
      return undefined;
    }

    const arr = this.keyMap[ind];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === key) {
        return arr[i][1];
      }
    }
    return undefined;
  }

  keys() {
    const res = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) {
        continue;
      }
      const temp = this.keyMap[i];
      for (let j = 0; j < temp.length; j++) {
        res.add(temp[j][0]);
      }
    }
    return Array.from(res);
  }

  values() {
    const res = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) {
        continue;
      }
      const temp = this.keyMap[i];
      for (let j = 0; j < temp.length; j++) {
        res.add(temp[j][1]);
      }
    }
    return Array.from(res);
  }
}

const hashTable = new HashTable();
hashTable.set('hello', 'bye');
hashTable.set('seven', 'eleven');
console.log(hashTable.get('seven'));
console.log(hashTable.values());
