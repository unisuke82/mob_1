import {numberToString} from "./main";

describe("test", () => {
  it("test", () => {
    expect(true).toBe(true);
  });
});

describe("受け取った引数をstring型に変換して返却する。", () => {
  it("1を受け取って'1'を返却する", () => {
      expect(numberToString(1)).toBe('1');
  });
  
  it("2を受け取って'2'を返却する", () => {
    expect(numberToString(2)).toBe('2');
  });
  
  const testCases = [
    {
      actual: 1,
      expected: "1",
    },{
      actual: 2,
      expected: "2",
    }
  ];

  testCases.forEach(({actual, expected})=>{
    it(`${actual}を受け取って、${expected}を返却する`,()=>{
      expect(numberToString(actual)).toBe(expected);
    });
  })
});