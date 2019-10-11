const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let output='';
    let buf;
    for(i=0;i<expr.length;i++)
    {
        buf = expr.substr(i,10);
        if(buf==='**********')
        {
            output+=' ';
        }
        else
        {
            while(buf.includes('1') || buf.includes('0'))
            {
                buf = buf.replace('00','');
                buf = buf.replace('10','.');
                buf = buf.replace('11','-');
            }
            output+=MORSE_TABLE[buf];
        }
        i+=9;
    }
    return output;
}


module.exports = {
    decode
}