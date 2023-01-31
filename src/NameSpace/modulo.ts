import _ from 'lodash';

_.mul = function(array: number[]): number{
  return array.reduce((total, atual) => total * atual,1);
}
export default _;
