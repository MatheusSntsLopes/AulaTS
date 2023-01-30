@decoretor
export class Pessoa{
  constructor(public nome: string, public sobrenome: string){}
}

function decoretor<T extends new (...args: any[]) => any> (target: T): T{
  return class extends target{
  nome: string;
  sobrenome: string;
  constructor(...args: any[]){
    super(...args);
    this.nome = this.modificador(args[0]);
    this.sobrenome = this.modificador(args[1]);
  }

  modificador(valor: string): string{
  return valor.split('').reverse().join('');
  }
}
}

const pessoa1= new Pessoa('Jompas', 'Souza');
console.log(pessoa1);
