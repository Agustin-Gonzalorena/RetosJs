function countHours(year, holidays) {
  let count = 0;
  holidays.forEach((h) => {
    const dia = new Date(`${h}/${year}`);
    const d = dia.getDay();
    if (d != 0 && d != 6) count++;
  });
  return count * 2;
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];

console.log(countHours(year, holidays));

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

// 2 días -> 4 horas extra en el año
