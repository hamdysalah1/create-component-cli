import React from 'react';
import { Content } from './styles/cardStyle.js';
import PropTypes from 'prop-types';

const Card = ({ children }) => (
    <div>
        <h1> Hello I&apos;m COM Component </h1>
        {children}
    </div>
);

Card.Inner = ({ content }) => <Content>{content}</Content>

Card.propTypes = {
    children: PropTypes.element.isRequired,
};
Card.Inner.propTypes = {
    content: PropTypes.string.isRequired
};


export default Card