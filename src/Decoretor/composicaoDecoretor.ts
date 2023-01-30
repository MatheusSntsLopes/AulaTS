interface Constructor{
  new (...args: any[]): any
}

@outroDecoretor('Teste')
@decoretor
export class Pessoa{
  constructor(public nome: string, public sobrenome: string){}
}

function decoretor(target: Constructor){
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

function outroDecoretor(param1: string){
 return function (target: Constructor){
  console.log('Outro decoretor ' + param1);
  return target;
}
}
