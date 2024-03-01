import { getPercents } from "../../utils/getPercents";


describe("tests for getPercents function", () => {
    it("Проверка вычисления процентов в стандартном случае, по нулю и по отрицательному значению", () => {
        expect(getPercents(20, 40)).toBe(`20 процентов от 40 составляют 8`);
        expect(getPercents(0, 20)).toBe(`Нулевой процент всегда равен нулю.`);
        expect(getPercents(-30, 100)).toBe("Процент не может быть меньше нуля.");
    });
});