import colors from 'colors';

export const log = (color: string, text: string) => {
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
