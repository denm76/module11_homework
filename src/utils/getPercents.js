export function getPercents(percents, number) {
    let result;
    if (percents < 0) {
        return "Процент не может быть меньше нуля.";
    } else if (percents > 0) {
        result = number * percents / 100;
        return `${percents} процентов от ${number} составляют ${result}`;
    } else {
        return "Нулевой процент всегда равен нулю.";
    }
}