import OurHashTable from '../src/hash-table.js';

describe('OurHashTable', () => {

  let hashTable = new OurHashTable();

  afterEach(() => {
    hashTable = new OurHashTable();
  });

  test('should instantiate a hash with a size 10000 array', () => {
    expect(hashTable.array.length).toEqual(10000);
  });

  test('hash function should return consistent results for the same input', () => {
    const hash1 = hashTable.hash("Alaric");
    const hash2 = hashTable.hash("Alaric");
    expect(hash1).toEqual(hash2);
  });

  // test('should correctly set and then retrieve a key-value pair in the hash table', () => {
  //   hashTable.set("John", "Lead Singer");
  //   expect(hashTable.get("John")).toEqual("Lead Singer");
  // });

  // test('should correctly get a key-value pair from a hash table', () => {
  //   hashTable.set("John", "Lead Singer");
  //   hashTable.set("Jane", "Fan of The Beatles");
  //   expect(hashTable.get("John")).toEqual("Lead Singer");
  // });

  test('should return null if the bucket has no values', () => {
    expect(hashTable.get("John")).toEqual(null);
  });

  // test('should return null if the bucket does not contain the key we are looking for', () => {
  //   hashTable.set("John", "Lead Singer");
  //   hashTable.set("Jane", "Fan of The Beatles");
  //   expect(hashTable.get("Jim")).toEqual(null);
  // });

  // test('should remove a key-value pair from hash table', () => {
  //   hashTable.set("John", "Lead Singer");
  //   hashTable.set("Jane", "Fan of The Beatles");
  //   hashTable.remove("John", "Lead Singer");
  //   expect(hashTable.get("John")).toEqual(null);
  // });

  // test('should clear all key-value pairs from the hash table', () => {
  //   hashTable.set("John", "Lead Singer");
  //   hashTable.set("Jane", "Fan of The Beatles");
  //   hashTable.clear();
  //   expect(hashTable.get("John")).toEqual(null);
  //   expect(hashTable.get("Jane")).toEqual(null);
  // });

  // test('should handle collisions and still retrieve the correct values', () => {
  //   // Assuming hash function might cause these two keys to collide
  //   hashTable.set("CollideKey1", "Value1");
  //   hashTable.set("CollideKey2", "Value2");
  //   expect(hashTable.get("CollideKey1")).toEqual("Value1");
  //   expect(hashTable.get("CollideKey2")).toEqual("Value2");
  // });

    // test('hash table automatically resizes to maintain performance', () => {
    //   // Fill the table to trigger automatic resizing
    //   for (let i = 0; i < 7000; i++) {
    //     hashTable.set(`key${i}`, `value${i}`);
    //   }
    //   // Verify the table has resized by checking the load factor or capacity
    //   expect(hashTable.capacity).toBeGreaterThan(10000);
    //   // Verify that entries can still be retrieved after resizing
    //   expect(hashTable.get("key6999")).toEqual("value6999");
    // });
});