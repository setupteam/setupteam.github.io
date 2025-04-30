type CharType =
  | 'letter'
  | 'digit'
  | 'point'
  | 'comma'
  | 'hyphen'
  | 'hash'
  | 'percent'
  | 'space'
  | 'bracket'
  | 'unknown';

type BufferType = 'text' | 'color' | 'number' | null;

const END_SYMBOLS: CharType[] = ['space', 'bracket', 'comma'];

function getCharType(char: string): CharType {
    if (char === '.') {
      return 'point';
    }
    if (char === '-') {
      return 'hyphen';
    }
    if (char === ',') {
      return 'comma';
    }
    if (char === '%') {
      return 'percent';
    }
    if (char === '#') {
      return 'hash';
    }
    if (char === ' ') {
      return 'space';
    }
    if (char === '(' || char === ')') {
      return 'bracket';
    }
  
    const code = char.charCodeAt(0);
  
    if (48 <= code && code <= 57) {
      return 'digit';
    }
    if ((65 <= code && code <= 90) || (97 <= code && code <= 122)) {
      return 'letter';
    }
    return 'unknown';
}

function getBufferType(type: CharType, currentBuffer: BufferType): BufferType {
    const colorSymbols: CharType[] = ['hash'];
    if (colorSymbols.includes(type) || currentBuffer === 'color') {
      return 'color';
    }
  
    const textSymbols: CharType[] = ['letter', 'percent'];
    if (textSymbols.includes(type)) {
      return 'text';
    }
  
    const numberSymbols: CharType[] = ['digit', 'point', 'hyphen'];
    if (numberSymbols.includes(type)) {
      return 'number';
    }
  
    return null;
}

export function cssValueLexer(value:string): (string | number)[] {
    const tokens: (string | number)[] = [];
    let buffer = '';
    let bufferType: BufferType | null = null ;

    const addToken = () => tokens.push(bufferType === 'number' ? parseFloat(buffer): buffer);

    for(const char of value){
        const charType = getCharType(char);
        const newBufferType = getBufferType(charType, bufferType);

        if(END_SYMBOLS.includes(charType) && buffer){
            addToken();
            buffer = '';
            bufferType = null;
        }else if(newBufferType !== null){
            if(newBufferType !== bufferType && bufferType !== null){
                addToken();
                buffer = char;
                bufferType = null;
            }else if(newBufferType === bufferType || bufferType === null){
                buffer += char;
                bufferType = newBufferType;
            }
        }
    }

    if(buffer){
        addToken();
    }

    return tokens;
}