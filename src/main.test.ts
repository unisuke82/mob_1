import {} from "./main";

describe("test", () => {
  it("test", () => {
    expect(true).toBe(true);
  });
});


describe("受け取った引数をstring型に変換して返却する。", () => {
  it("1を受け取って'1'を返却する", () => {
      expect(numberToString(1)).toBe('1');
  });
})