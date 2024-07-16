type Comparator<T> = (a: T, b: T) => number;

export default class PriorityQueue<T> {
  private heap: T[];
  private compare: Comparator<T>;

  constructor(compare: Comparator<T>) {
    this.heap = [];
    this.compare = compare;
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }
}
