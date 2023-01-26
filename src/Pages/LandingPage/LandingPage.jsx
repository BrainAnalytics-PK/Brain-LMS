import React from 'react';
import DataAnalysic from '../../Modules/Module1/DataAnalysic';
import Software from '../../Modules/Module2/Software';
import Nav from '../../Modules/Nav/Nav';
import DreamJob from '../../Modules/Module3/DreemJob';

const LandingPage = () => {
    return (
        <>
            <Nav />
            <DataAnalysic/>
            <Software/>
            <DreamJob/>
        </>
    )
}

export default LandingPage