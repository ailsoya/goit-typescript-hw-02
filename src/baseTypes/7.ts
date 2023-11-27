/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

let Day: Days = Days.Wednesday

function isWeekend(Day: number): boolean {
  if(Day >= 0 && Day<=4) {
    return false
  } else {
    return true
  }
}