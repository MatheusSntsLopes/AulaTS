/* eslint-disable @typescript-eslint/no-namespace  */

namespace MeuNameSpace{
  export const nameSpace = 'Teste';

  export class PessoaNameSpace {
    constructor(public name: string){}
  }

  export const pessoa1 = new PessoaNameSpace('Lhucas');
  console.log(pessoa1);

 export namespace OutroNameSpace{
    export const outro = 'outro name space';
  }
}

const namespace = new MeuNameSpace.PessoaNameSpace('Jompas');
console.log(namespace);
console.log(MeuNameSpace.OutroNameSpace.outro);
console.log(MeuNameSpace.pessoa1)
