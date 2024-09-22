export class Person {
   #personBirthDay;
   constructor(firstName, lastName, personBirthDay) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.#personBirthDay = personBirthDay;
   }
   get birthday() {
      return this.#personBirthDay;
   };
   getFullName() {
      return `${this.firstName} ${this.lastName}`;
   };

   #getAgeString(age){

      let yearString = 'лет';
      if (age % 10 === 1 && age % 100 !== 11) {
         yearString = 'год';
     } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
         yearString = 'года';
     }
     return yearString;
   }
   getAge() {
      let now = new Date();
      const birthDate = new Date(this.birthday);
      let age = now.getFullYear() - birthDate.getFullYear();
      if (now.getMonth() < birthDate.getMonth() ||
         (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
         age--;
      }
      return `${age} ${this.#getAgeString(age)}`
   }
}

