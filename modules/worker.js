import { Person } from "./person.js";

export class Worker extends Person {
   #rate;
   #days;
   constructor(firstName, lastName, personBirthDay, position, rate = 1000, days = 0) {
      super(firstName, lastName, personBirthDay);
      this.position = position;
      this.#rate = rate;
      this.#days = days;
   }
   get rate() {
      return this.#rate;
   }

   set rate(unit) {
      if (typeof unit === 'number' && !isNaN(unit) && unit >= 1000) {
         this.#rate = unit;
      } else {
         this.#rate = 1000;
         console.error('Недопустимое значение для ставки. Установлено значение по умолчанию 1000.')
      }
   }

   addDays(workedDays) {
      let now = new Date();
      let currentMonthDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      let totalDays = this.#days + workedDays;
      try {
         if (typeof workedDays === 'number' && !isNaN(workedDays) && workedDays >= 0 && totalDays <= currentMonthDays) {
            this.#days += workedDays;
         } else {
            throw new Error('Неверное количество дней. Сумма отработанных дней не должна превышать количество дней в текущем месяце')
         }
      } catch (e) {
         console.error(e.message);
      }
   }

   getSalary() {
      let [birthMonth, birthDay] = this.birthday.split('-').map(Number);

      let monthSalary = this.#days * this.rate;
      let now = new Date();
      let currentMonth = now.getMonth() + 1;
      let currentDate = now.getDate();
      if (currentMonth === birthMonth && currentDate === birthDay) {
         return (monthSalary * 1.1).toFixed(2);
      }
      return monthSalary.toFixed(2);
   }

   static whoWorkedMore(...workers) {

      if (workers.length === 0) {
         console.log('Нет работников для анализа');
         return;
      }
      let maxWorkedDays = 0;
      let maxWorkedWorkers = [];

      workers.forEach(worker => {
         let workedDays = worker.#days;
         if (workedDays > maxWorkedDays) {
            maxWorkedDays = workedDays;
            maxWorkedWorkers = [worker];
         } else if (workedDays === maxWorkedDays) {
            maxWorkedWorkers.push(worker);
         }
      });
      if (maxWorkedWorkers.length === workers.length) {
         console.log("Все работники отработали одинаковое количество дней за текущий месяц.");
         return;
      } else {
         maxWorkedWorkers.forEach(worker => {
            console.log(`Больше всех отработанных дней за текущий месяц у ${worker.getFullName()}`)
         });
      }

   }

   static whoIsYounger(...workers) {

      if (workers.length === 0) {
         console.log("Нет работников для анализа.");
         return null;
      }
      let youngestWorkers = [];
      let minAge = parseInt(workers[0].getAge());
      workers.forEach(worker => {
         let age = parseInt(worker.getAge());
         if (age < minAge) {
            minAge = age;
            youngestWorkers = [worker];
         } else if (age === minAge) {
            youngestWorkers.push(worker);
         }
      })

      youngestWorkers.forEach(worker => {
         console.log(`Самый молодой работник: ${worker.getFullName()} его возраст ${worker.getAge()}`)
      })

   }
}