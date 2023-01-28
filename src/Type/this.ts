export class Calculadora{
  constructor(public number: number){}

  add(number: number): this{
   this.number += number;
   return this;
  }

  sub(number: number): this{
    this.number -= number;
    return this;
  }

  mult(number: number): this{
    this.number *= number;
    return this;
  }

  div(number: number): this{
    this.number /= number;
    return this;
  }
}

export class SubCalc extends Calculadora{
  pow(number: number): this{
    this.number **= number;
    return this;
  }
}

const calculadora = new SubCalc(1);
calculadora.add(3).div(2).mult(3).sub(2).pow(2);
console.log(calculadora);


// Design Pattern Builder
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this{
    this.method = method;
    return this;
  }

  setUrl(url: string): this{
    this.url = url;
    return this;
  }
  send(): void {
    console.log(`Sending ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setMethod('get').setUrl('http://google.com').send();
