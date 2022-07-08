import { numberToString } from "./main";

describe("test", () => {
  it("test", () => {
    expect(true).toBe(true);
  });
});

describe("number型の引数を受け取り、string型に変換して返却する", () => {
  describe("受け取った引数をstring型に変換して返却する。", () => {
    const testCases = [
      {
        actual: 1,
        expected: "1",
      },
      {
        actual: 2,
        expected: "2",
      },
    ];

    testCases.forEach(({ actual, expected }) => {
      it(`${actual}を受け取って、${expected}を返却する`, () => {
        expect(numberToString(actual)).toBe(expected);
      });
    });
  });

  describe("受け取った引数が3の倍数の場合、数の変わりに「Fizz」を返却する。", () => {
    const testCases = [
      {
        input: 3,
      },
      {
        input: 6,
      },
    ];
    testCases.forEach(({ input }) => {
      it(`${input} を受け取った場合、'Fizz' を返却する`, () => {
        expect(numberToString(input)).toBe("Fizz");
      });
    });
  });

  describe("受け取った引数が5の倍数の場合、数の変わりに「Buzz」を返却する。", () => {
    it("5を受け取った場合、'Buzz' を返却する", () => {
      expect(numberToString(5)).toBe("Buzz");
    });
  });

  describe("受け取った引数が3と5の両方の倍数の場合、数の変わりに「FizzBuzz」を返却する。", () => {
    it("15を受け取った場合、'FizzBuzz' を返却する", () => {
      expect(numberToString(15)).toBe("FizzBuzz");
    });
  });

});

describe("1~100の数をnumberToString関数に渡して、その結果を文字列として返却する。", () => {
  describe("1と1を受け取った時に '1' を返却する", () => {
    
  });

});
