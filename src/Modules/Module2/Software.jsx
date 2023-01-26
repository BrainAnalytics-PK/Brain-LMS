import React from "react";
import './software.css'
import { Grid } from "@material-ui/core";
import Excel from '../../Assets/Front-Page/Excel.png';
import PowerBi from '../../Assets/Front-Page/Power-bi.png';
import Tableau from '../../Assets/Front-Page/Tableau.png';
import MySql from '../../Assets/Front-Page/Mysql.png';
import Python from '../../Assets/Front-Page/Python.png'

const Software = () => {
    return( 
        <>
        <div className="software-container">
            <div className="software-img">
                <img src={Excel} alt="MS EXCEL " />
                <img src={PowerBi} alt="Powrbi Logo" />
                <img src={Tableau} alt="Tableau logo" />
                <img src={MySql} alt="My Sql logo" />
                <img src={Python} alt="Python logo" />
            </div>
        </div>
        </>
    )
}
export default Software;