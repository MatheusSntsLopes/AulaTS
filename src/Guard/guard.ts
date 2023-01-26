export function add(a: unknown, b: unknown): string | number{
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(3,2));
console.log(add('a', 'b'));

type Pessoa = {
  tipo : 'pessoa'; nome: string;
}

type Animal = {
  tipo : 'animal'; especie:string;
}

type PessoaOuAnimal = Pessoa | Animal;

export class Funcionario implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string){}
}

function mostrar(obj: PessoaOuAnimal): void {
  if('nome' in obj) console.log(obj.nome);
  if(obj instanceof Funcionario) console.log(obj.nome);

  switch (obj.tipo){
    case 'pessoa':
    console.log(obj.nome);
    return;

    case 'animal':
      console.log(obj.especie);
      return;
  }

}


mostrar(new Funcionario('Lhucas'));
mostrar({tipo: 'animal', especie: 'lupus'});
