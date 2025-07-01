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
    this.keyMap.push([key, value]);
  }
}

const hashTable = new HashTable();
hashTable.set('hello', 'bye');
hashTable.set('seven', 'eleven');
console.log(hashTable.keyMap);