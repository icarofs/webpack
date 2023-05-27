import sum from './calc.js'
import Heading from './components/heading.js';

console.log('Webpack 5')

sum(1, 2);
sum (3, 5);

// Loaders
const heading = new Heading();

heading.create("Este título é dinâmico")