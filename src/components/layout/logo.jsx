import React from 'react';
import { Card, makeStyles, Tooltip, Typography } from '@material-ui/core';
var image1 = require('../../images/FB.png');
var image2 = require('../../images/AMZN.svg');
var image3 = require('../../images/GOOGL.png');

const useStyle = makeStyles({
    img: {
        height: 200,
        width: '200px'
    },
    abc:{
        display:'inline-block',
        marginTop:'12px',
        marginRight:'45px',
        padding:'10px'
    }
})

const Logo = () => {

    const classes = useStyle();
    return (
        <div  >
            <Card className={classes.abc}>
                <Tooltip>
                    <img className={classes.img} src={image1.default} alt="logo" />
                </Tooltip>
            </Card>
            <Card className={classes.abc}>
                <Tooltip>
                    <img className={classes.img} src={image2.default} alt="logo" />
                </Tooltip>
            </Card>
            <Card className={classes.abc}> 
                <Tooltip>
                    <img className={classes.img} src={image3.default} alt="logo" />
                </Tooltip>
            </Card>

        </div>

    )
}

export default Logo;