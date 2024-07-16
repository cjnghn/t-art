import { PriorityQueue } from "../src";

describe("PriorityQueue", () => {
  let pq: PriorityQueue<number>;

  beforeEach(() => {
    pq = new PriorityQueue<number>((a, b) => a - b);
  });

  test("should create an empty queue", () => {
    expect(pq.size()).toBe(0);
    expect(pq.isEmpty()).toBe(true);
  });

  test("should enqueue elements correctly", () => {
    pq.enqueue(3);
    pq.enqueue(1);
    pq.enqueue(2);
    expect(pq.size()).toBe(3);
    expect(pq.isEmpty()).toBe(false);
  });

  test("should dequeue elements in priority order", () => {
    pq.enqueue(3);
    pq.enqueue(1);
    pq.enqueue(2);
    expect(pq.dequeue()).toBe(1);
    expect(pq.dequeue()).toBe(2);
    expect(pq.dequeue()).toBe(3);
    expect(pq.isEmpty()).toBe(true);
  });

  test("should peek at the top element without removing it", () => {
    pq.enqueue(3);
    pq.enqueue(1);
    pq.enqueue(2);
    expect(pq.peek()).toBe(1);
    expect(pq.size()).toBe(3);
  });

  test("should throw error when dequeueing from empty queue", () => {
    expect(() => pq.dequeue()).toThrow("Queue is empty");
  });

  test("should throw error when peeking at empty queue", () => {
    expect(() => pq.peek()).toThrow("Queue is empty");
  });

  test("should handle custom priority function", () => {
    const stringPQ = new PriorityQueue<string>((a, b) => b.length - a.length);
    stringPQ.enqueue("a");
    stringPQ.enqueue("ccc");
    stringPQ.enqueue("bb");
    expect(stringPQ.dequeue()).toBe("ccc");
    expect(stringPQ.dequeue()).toBe("bb");
    expect(stringPQ.dequeue()).toBe("a");
  });

  test("should clear the queue", () => {
    pq.enqueue(1);
    pq.enqueue(2);
    pq.clear();
    expect(pq.isEmpty()).toBe(true);
    expect(pq.size()).toBe(0);
  });
});
