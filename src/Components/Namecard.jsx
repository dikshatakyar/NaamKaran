import React from 'react'

const NameCheapurl =
    'https://www.namecheap.com/domains/registration/results/?domain=';

const Namecard = ({s1}) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link"
            href={`${NameCheapurl}${s1}`}
        >
        <div className='result-name-card'>
            <p className='result-name'>{s1}</p>
        </div> 
        </a>
    );
};

export default Namecard
