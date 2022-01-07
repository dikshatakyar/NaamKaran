import React from 'react';

//true?do this:do that (ternary )
const Header = ({HeaderExpanded}) => {
    return (
        <div className='head-container'>
        <img className= {`head-image ${
            HeaderExpanded ? 
            'head-img-expanded' : 'head-img-contracted'
        }`}
         src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="header-img"/>
        <div className={`head-text ${HeaderExpanded ? 'head-text-expanded' : 'head-text-contracted' }`}
        >Naamकरण</div>
        </div>
    ); 
}

export default Header;