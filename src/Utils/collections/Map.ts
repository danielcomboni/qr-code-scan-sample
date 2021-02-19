import IList from "./List";
import List from "./List";

export interface IKeyValueMap<K, V> {
  put(key: K, value: V): void;

  putAll(map: Map<K, V>): void;

  remove(key: K): void;

  clear(): void;

  get(key: K): V | undefined;

  size(): number;

  isEmpty(): boolean;

  containsKey(key: K): boolean;

  replace(oldKey: K, newValue: V): V | undefined;

  getValues(): IList<V>;

  getKeys(): IList<K>;

  getKeyValuePair(): Map<K, V>;

  keyValueMapToArray(): any[];
}

export default class KeyValueMap<K, V> implements IKeyValueMap<K, V> {
  private pair: Map<K, V>;

  constructor() {
    this.pair = new Map<K, V>();
  }

  put(key: K, value: V): void {
    this.pair.set(key, value);
  }

  putAll(map: Map<K, V>): void {
    map.forEach((v, k) => {
      this.put(k, v);
    });
  }

  remove(k: K): void {
    this.pair.delete(k);
  }

  clear(): void {
    this.pair.clear();
  }

  get(k: K): V | undefined {
    return this.pair.get(k);
  }

  size(): number {
    return this.pair.size;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  containsKey(k: K): boolean {
    return this.pair.has(k);
  }

  replace(oldK: K, newV: V): V | undefined {
    if (this.containsKey(oldK)) {
      this.remove(oldK);
      this.put(oldK, newV);
    }

    return this.get(oldK);
  }

  getValues(): IList<V> {
    const array = Array.from(this.pair.values());
    let list = new List<V>();
    list.arrayToList([...array]);
    return list;
  }

  getKeys(): IList<K> {
    const array = Array.from(this.pair.keys());
    let list = new List<K>();
    list.arrayToList([...array]);
    return list;
  }

  getKeyValuePair(): Map<K, V> {
    let newMap = new Map<K, V>();
    this.pair.forEach((v, k) => newMap);
    return newMap;
  }

  keyValueMapToArray(): any[] {
    return Array.from(this.pair, ([key, value]) => ({ key, value }));
  }
}
