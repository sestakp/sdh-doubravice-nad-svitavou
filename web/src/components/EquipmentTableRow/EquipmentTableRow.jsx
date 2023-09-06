import { Grid } from "@mui/material"
import React from 'react';
import { useMediaQuery } from '@material-ui/core';

import { useTheme } from '@material-ui/core';

export default function EquipmentTableRow(props) {
    const theme = useTheme();
    const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container style={{borderBottom: isMediumOrSmaller ? "1px solid white" : "inherit"}}>
            <Grid item md={6} style={{width: "100%", textAlign: isMediumOrSmaller ? "center" : "end", paddingRight: isMediumOrSmaller ? "0" : "10px"}}>
                <p>{props.first}</p>
            </Grid>
            <Grid item md={6} style={{width: "100%", paddingLeft: isMediumOrSmaller ? "0" : "10px", textAlign: isMediumOrSmaller ? "center" : "inherit"}}> 
                <p>{props.second}</p>
            </Grid>
        </Grid>
    )
}