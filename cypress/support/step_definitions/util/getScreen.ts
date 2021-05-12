export const intHeight = 1000; // also set in cypress.json

const objScreen = {
  Desktop: { intWidth: 1428 },
  Tablet: { intWidth: 822 },
  Mobile: { intWidth: 320 },
  NotDesktop: { intWidth: 1427 }
};
interface PropsResult {
  intWidth: number;
}

type TgetScreen = (screen: keyof typeof objScreen) => number;
const getScreen: TgetScreen = screen => objScreen[screen].intWidth;

export default getScreen;
