// var img = [
//     '@18771.gif',
//     '@19873.gif',
//     '@89357.gif'
// ];

// var i = Math.floor(Math.random() * img.length);
// var x = img[i];


// var link = "_ignator/_@view/_Utilities/" + x;
// document.getElementById('img_t').setAttribute('src', link);


// var img = [
//     '@18771.gif',
//     '@19873.gif',
//     '@89357.gif'
// ];

var img = [
    'https://cdn.jsdelivr.net/gh/async-igtm/ems@1529f2cf8fcad11061ede14b130abe7ed8c6f7ee/_@40view/_Utilities/@18771.gif',
    'https://cdn.jsdelivr.net/gh/async-igtm/ems@1529f2cf8fcad11061ede14b130abe7ed8c6f7ee/_@view/_Utilities/@19873.gif',
    'https://cdn.jsdelivr.net/gh/async-igtm/ems@1529f2cf8fcad11061ede14b130abe7ed8c6f7ee/_@view/_Utilities/@89357.gif'
];


var i = Math.floor(Math.random() * img.length);
var x = img[i];

var link = x;
// var link = "_ignator/_@view/_Utilities/" + x;
document.getElementById('img_t').setAttribute('src', link);


