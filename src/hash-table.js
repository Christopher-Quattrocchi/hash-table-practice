export default class OurHashTable {
  constructor() {
    this.capacity = 10000;
    this.array = new Array(this.capacity);
    this.count = 0;
    this.resizing = false;
  }

  hash(key) {
    let hash = 5381;
    let totalLetters = key.length;

    while (totalLetters) {
      hash = (hash * 33) ^ key.charCodeAt(--totalLetters);
    }
    return hash >>> 0;
  }

  // Set a key-value pair
  set(key, value) {
    const index = this.hash(key);
    if (this.array[index] === undefined) {
      this.array[index] = []; // Initialize a bucket if it does not exist
    }
    // Check for existing key and update
    for (let i = 0; i < this.array[index].length; i++) {
      if (this.array[index][i][0] === key) {
        this.array[index][i][1] = value;
        return;
      }
    }
    // Otherwise, add the new key-value pair
    this.array[index].push([key, value]);
    this.count += 1;

    if (!this.resizing && this.loadFactor() > 0.7) {
      console.log(`Resizing from to ${this.capacity} in set`);
      this.resize();
    }
  };

  reinsert(key, value) {
    console.log(`Resizing to ${this.capacity} in reinsert`);
    const index = this.hash(key);
    if (this.array[index] === undefined) {
      this.array[index] = [];
    }
    this.array[index].push([key, value]);
  }

  // Get a value by key
  get(key) {
    const index = this.hash(key);
    const bucket = this.array[index];
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1]; // Return the value if the key is found
        }
      }
    }
    return null; // Return null if the key is not found
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.array[index];
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1); // Correct use of splice
          this.count--;
          return; // Exit after removing the key-value pair
        }
      }
    }
  }

  clear() {
    this.array = new Array(this.capacity);
    this.count = 0;
  }

  resize() {
    console.log(`Resizing to ${this.capacity} in resize`);
    const oldArray = this.array;

    this.resizing = true;
    this.capacity *= 2;
    this.array = new Array(this.capacity);

    let tempCount = this.count;
    this.count = 0; //reset size after resetting array

    oldArray.forEach(bucket => {
      if (bucket !== undefined) {
        bucket.forEach(([key, value]) => {
          this.reinsert(key, value);
        });
      }
    });
    this.count = tempCount;
    this.resizing = false;
  };

  loadFactor() {
    let itemCount = 0;
    this.array.forEach(bucket => {
      if (bucket !== undefined) {
        itemCount += bucket.length;
      }
    });
    return itemCount / this.capacity;
  }
}

