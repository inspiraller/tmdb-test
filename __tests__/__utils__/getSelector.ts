import { TFuncStr } from 'src/types';

const getSelector: TFuncStr = dataTestId => `[data-testid="${dataTestId}"]`;

export default getSelector;
