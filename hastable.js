class hashTable {
  constructor(size) {
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.table[address]) {
      this.table[address] = [[key, value]];
    } else {
      this.table[address].push([key, value]);
    }
  }

  get(key) {
    let address = this._hash(key);
    if (!this.table[address]) {
      return undefined;
    } else {
      let bucket = this.table[address];
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }
  }
}

const table = new hashTable(2);
table.set("apples", 123);
table.set("grapes", 23);
table.set("pear", 1);
table.set("orange", 24);
let an = table.get("grapes");
console.log(table);
