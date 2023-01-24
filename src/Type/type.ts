type TypePerson = {
  name: string;
  secondName: string;
  completeName: () => string;
};

export class Person implements TypePerson{
 constructor(public name: string, public secondName: string){}
  completeName(): string{
    return  this.name + ' ' + this.secondName;
  }
}

const person = new Person('Mateus', 'Monaco');
console.log(person);
