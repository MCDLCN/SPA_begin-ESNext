//5-1 Import

import {hello, showError,default as nyanCat} from './functions.js';
import * as math from './math.js';

hello();
showError("aaaaaaaaaaaaaa");
//nyanCat();

// 5-2 Export
const [a, b] = [7, 9];

console.log(math.sum(a,b))
console.log(math.sub(a,b))
console.log(math.multiply(a,b))
console.log(math.divide(a,b))
console.log(math.pow(a,b))
