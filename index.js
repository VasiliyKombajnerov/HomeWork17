import { Worker } from "./modules/worker.js";
//#1

let worker1 = new Worker('Bob', 'Dilan', '09-22-1999', 'developer');
let worker2 = new Worker('Ann', 'Smith', '10-05-1999', 'designer');
let worker3 = new Worker('Mary', 'Hodg', '09-05-1999', 'developer');
let worker4 = new Worker('Alex', 'Brown', '01-25-1987', 'developer');
let worker5 = new Worker('Olga', 'Zhuravliova', '02-12-1977', 'developer');
//#2
worker1.rate = 1200;
worker3.rate = 1500;
worker5.rate = 1450;

console.log(worker1.rate);
console.log(worker3.rate);
console.log(worker5.rate);
//#3
worker1.addDays(2);
worker2.addDays(13);
worker3.addDays(50);
worker4.addDays(22);
worker5.addDays(30);

//#4
let workers = [];
let workerData = [
   { firstName: 'Bob', lastName: 'Dilan', birthDate: '09-22-1999', position: 'developer' },
   { firstName: 'Ann', lastName: 'Smith', birthDate: '10-05-1999', position: 'designer' },
   { firstName: 'Mary', lastName: 'Hodg', birthDate: '09-05-1999', position: 'developer' },
   { firstName: 'Alex', lastName: 'Brown', birthDate: '01-25-1987', position: 'developer' },
   { firstName: 'Olga', lastName: 'Zhuravliova', birthDate: '02-12-1977', position: 'developer' }
];
workerData.forEach(data => {
   let worker = new Worker(data.firstName, data.lastName, data.birthDate, data.position);
   workers.push(worker);
})

workers.forEach((worker, index) => {
   if (index === 0) {
      worker.addDays(2);
   } else if (index === 1) {
      worker.addDays(13);
   } else if (index === 2) {
      worker.addDays(5);
   } else if (index === 3) {
      worker.addDays(22);
   } else if (index === 4) {
      worker.addDays(30);
   }

   console.log(`${worker.getFullName()} - ${worker.getSalary()} рублей`);
});

//#5
let mostworked = Worker.whoWorkedMore(...workers);

//#6
let mostYoungerWorker = Worker.whoIsYounger(...workers);

