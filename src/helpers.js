// choice function - function to randomly choose color
// array of colors - array of available colors

function choice(array) {
    const indx = Math.floor(Math.random() * array.length);
    return array[indx];
};

const colors = [
    '000000',
    '0000ff',
    'ff0000',
    '00ff00',
    '808080',
    'ffff00',
    '800000',
    '808000',
    '008000',
    '000080',
    'ff7f50',
    'fa8072',
    'ffd700',
    'ffa500',
    '008080',
    '00ffff',
    '7fffd4',
    '4b0082',
    '9370db',
    '800080',
    'ee82ee',
    'ff69b4',
    'd2b48c',
    '778899'
];

export { choice, colors}

