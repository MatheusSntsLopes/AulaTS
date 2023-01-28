type ColorObj = typeof colorObj;
type ColorKeys = keyof ColorObj;

const colorObj = {
  red: 'vermelho',
  black: 'preto',
  white: 'branco',
}

function translateColor(color: ColorKeys, colors: ColorObj){
  return colors[color];
}

console.log(translateColor('red', colorObj));


