import './css/style.css';

import Post from "./post";
import json from './data.json';
import logo from './webpack.png';


const post = new Post('Webpack Post Title', logo);

console.log('Post to string:', post.toString());
console.log('JSON', json);