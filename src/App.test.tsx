const sum = (x: number, y: number) => {
  return x + y;
};

describe("App Component", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });
});

