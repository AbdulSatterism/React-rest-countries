import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, region, flags } = props.country;
    // console.log(props.country)
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>{region}</h4>
            <p><small>area :{area}</small></p>
        </div>
    );
};

export default Country;