import { v4 } from 'uuid';

type TFuncStr = (str: string) => string; 

const replaceVariables: TFuncStr = str => {
  // const strTemp = str.replace(/\$\{random\}/g, Math.random().toFixed(4));
  const strTemp = str.replace(/\$\{random\}/g, v4());
  // cy.task('log', `strTemp "${strTemp}"`);
  return strTemp;
};

export default replaceVariables;
