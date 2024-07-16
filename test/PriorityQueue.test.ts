import PriorityQueue from "../src/PriorityQueue";

describe("PriorityQueue", () => {
  let pq: PriorityQueue<number>;

  beforeEach(() => {
    pq = new PriorityQueue<number>((a, b) => a - b);
  });

  test("should create an empty queue", () => {
    expect(pq.size()).toBe(0);
    expect(pq.isEmpty()).toBe(true);
  });
});
