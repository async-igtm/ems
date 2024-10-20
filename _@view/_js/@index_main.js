var img = [
    '@18771.gif',
    '@19873.gif',
    '@89357.gif'
];

var i = Math.floor(Math.random() * img.length);
var x = img[i];


var link = "_ignator/_@view/_Utilities/" + x;
document.getElementById('img_t').setAttribute('src', link);

