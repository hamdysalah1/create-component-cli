import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

export const comComponent = (name, propTypes, styledComponent) => {
    const comName = capitalizeFirstLetter(name);
return `import React from 'react';
${propTypes === "yes" ? "import PropTypes from 'prop-types';" : ""}
${styledComponent === "yes" ? `import { Content } from './styles/${name}Style';` : ""}

const ${comName} = ({ children }) => (
    <div>
        <h1> Hello I&apos;m COM Component </h1>
        {children}
    </div>
);

${comName}.Inner = ({ content }) => ${styledComponent === "yes" ? "<Content>{content}</Content>" : "<div> {content} </div>"}
${
propTypes === "yes" ?
`
${comName}.propTypes = {
    children: PropTypes.element.isRequired,
};
${comName}.Inner.propTypes = {
    content: PropTypes.string.isRequired
};
` : ""
}

export default ${comName}`;
}