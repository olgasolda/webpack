import * as $ from 'jquery';

import Post from "./post";
import json from './data.json';
import logo from './webpack.png';
import csv from './data.csv';

import '@/css/style.css';

const post = new Post('Webpack Post Title', logo);

// console.log('Post to string:', post.toString());
$('pre').addClass('code').html(post.toString());
console.log('JSON', json);
console.log('CSV', csv);