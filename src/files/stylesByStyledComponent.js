export const stylesByStyledComponent = () => {
const importLine = "import css from 'styled-components/macro';";
const styleLine = "export const Content = css.div`color: red`;";
return`${importLine}

${styleLine}
`;
}