import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
const Header = ({headerText}) => {
    return(
        <div>
            <h1>{headerText}</h1>
            <h4>A {<ReactTypingEffect text={['computer scientist', 'graduate student', 'engineer', 'bad blogger', 'entrepreneur']}/>}from Minnesota</h4>
        </div>
    )
}

export default Header;