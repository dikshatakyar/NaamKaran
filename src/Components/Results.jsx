import React from 'react'
import Namecard from './Namecard';

const Results = ({SuggestedNames}) => {

    const allnames=SuggestedNames.map((s1)=>{
      
        return <Namecard key={s1} s1={s1} />;
    });


    return (
        <div className='results-container'>
        {allnames}
        </div>
    );
};

export default Results;