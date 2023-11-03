import colors from 'colors';

type Colors = 'magenta' | 'green' | 'blue' | 'white';

export const log = (text: string, color: Colors = 'white') => {
  switch (color) {
    case 'magenta':
      console.log(colors.magenta(text));
      break;
    case 'green':
      console.log(colors.green(text));
      break;
    case 'blue':
      console.log(colors.blue(text));
      break;
    default:
      console.log(colors.white(text));
      break;
  }
};
