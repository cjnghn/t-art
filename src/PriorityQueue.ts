type Comparator<T> = (a: T, b: T) => number;

export class PriorityQueue<T> {
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

  public peek(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.heap[0];
  }

  public enqueue(element: T): void {
    this.heap.push(element);
    this.heapifyUp();
  }

  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const poppedValue = this.heap[0];
    const lastElement = this.heap.pop()!;
    if (this.size() > 0) {
      this.heap[0] = lastElement;
      this.heapifyDown();
    }
    return poppedValue;
  }

  public clear(): void {
    this.heap = [];
  }

  private heapifyUp(): void {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = this.parent(index);
      if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private heapifyDown(): void {
    let index = 0;
    while (true) {
      const leftChildIndex = this.leftChild(index);
      const rightChildIndex = this.rightChild(index);
      let smallestIndex = index;

      if (
        leftChildIndex < this.size() &&
        this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size() &&
        this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex === index) break;

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return 2 * index + 1;
  }

  private rightChild(index: number): number {
    return 2 * index + 2;
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
