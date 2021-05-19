type getSelectorProps = (strElem: string) => {
  strSelector: string;
  strPseudoKey: string;
  strPseudoValue: string;
};

const getSelectorProps: getSelectorProps = (strElem) => {
  const indColon = strElem.indexOf(':');
  const indEndSel = indColon !== -1 ? indColon : strElem.length;
  // cy.task('log', `##### indEndSel= "${indEndSel}"`);

  const strSelector = strElem.substring(0, indEndSel);
  // cy.task('log', `##### strSelector = "${strSelector}"`);

  const strPseudoKey = indColon !== -1 ? strElem.substring(indColon + 1, strElem.indexOf('(')) : '';
  // cy.task('log', `##### strPseudoKey = "${strPseudoKey}"`);
  const strPseudoValue = strPseudoKey
    ? strElem.substring(strElem.indexOf('("') + 2, strElem.indexOf('")'))
    : '';
  // cy.task('log', `##### strPseudoValue = "${strPseudoValue}"`);
  return {
    strSelector,
    strPseudoKey,
    strPseudoValue
  };
};
export default getSelectorProps;
