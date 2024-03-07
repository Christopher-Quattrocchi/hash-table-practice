export default class HashTable {
  constructor() {
    this.array = [];
  }

  // Hash function: Maps a key to an array index
  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
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
}
