import './SeasonDisplay.css';
import React from 'react';
const getSeason = (lat) => {
    console.log(lat);
    const month = new Date().getMonth();
    if( month>3 && month<9){
         return lat>0 ? 'summer' :'winter';
} else {
    console.log(lat);
    return lat>0 ? 'summer':'winter';
    }
}
const seasonsInfo = {
    'winter': {
        text: 'its very chilly here!',
        iconName: 'snowflake'
    },
    'summer': {
        text: 'its very hot here!',
        iconName: 'sun'
    },
};
const SeasonDisplay = (lat)=>{
    const season = getSeason(lat);
    const {text,iconName} = seasonsInfo[season];
        return(
            <div className={`season-display ${season}`} >
            <i className={`icon-left massive ${iconName} icon`}> </i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
            </div>
        );
}
        

export default SeasonDisplay;