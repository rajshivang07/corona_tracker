import React, { Component } from 'react';
import {Card, CardContent , Typography, Grid, Collapse, CardMedia} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }));
  
  
const Cards= ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    const classes = useStyles();
    const [confirmedExpanded, setConfirmedExpanded] = React.useState(false);
    const [recoveryExpanded, setRecoveryExpanded] = React.useState(false);
    const [deathExpanded, setDeathtExpanded] = React.useState(false);
      const handleExpandClick = (clickedCard) => {
        switch(clickedCard) {
            case 'active':
                setConfirmedExpanded(!confirmedExpanded);
                break;
            case 'recovery':
                setRecoveryExpanded(!recoveryExpanded);
                break;
            case 'death':
                setDeathtExpanded(!deathExpanded);
                break;
        }
      };
    if(!confirmed){
        return 'Loading..';
    }

    
    var deathPercentage= ((deaths.value/confirmed.value)*100).toFixed(2);
    var recoveryPercentage= ((recovered.value/confirmed.value)*100).toFixed(2);
    var activeCases= confirmed.value- deaths.value- recovered.value;
    return(
        
        <div className={styles.container}>
            
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.confirmed)}>                
                
                <CardContent>
                    <Typography className={styles.confirmedTextColor} gutterBottom>
                    Confirmed
                    </Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary" variant="body2" component="p">
                    Last Update : {new Date(lastUpdate).getDate()+ "-" +(new Date(lastUpdate).getMonth()+ 1) + "-" +new Date(lastUpdate).getFullYear()+ ", "+new Date(lastUpdate).toTimeString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Number of confirmed cases of COVID-19.
                    </Typography>
                    
                </CardContent>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: confirmedExpanded,
                    })}
                    onClick={() => handleExpandClick('active')}
                    aria-expanded={confirmedExpanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
                <Collapse in={confirmedExpanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography className={styles.confirmedTextColor} gutterBottom>
                    Active Cases
                    </Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={activeCases} duration={0.75} separator="," />                   
                    </Typography>
                    </CardContent>
                </Collapse>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography className={styles.recoveredTextColor} gutterBottom>
                    Recovered
                    </Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary" variant="body2" component="p">
                    Last Update : {new Date(lastUpdate).getDate()+ "-" +(new Date(lastUpdate).getMonth()+ 1) + "-" +new Date(lastUpdate).getFullYear()+ ", "+new Date(lastUpdate).toTimeString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Number of recoveries from COVID-19.
                    </Typography>
                </CardContent>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: recoveryExpanded,
                    })}
                    onClick={() => handleExpandClick('recovery')}
                    aria-expanded={recoveryExpanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
                <Collapse in={recoveryExpanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography className={styles.recoveredTextColor} gutterBottom>
                    Recovery Percentage
                    </Typography>
                    <Typography variant="h5">
                    {recoveryPercentage}%
                    </Typography>
                    </CardContent>
                </Collapse>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography className={styles.deathsTextColor} gutterBottom>
                    Deaths
                    </Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary" variant="body2" component="p">
                    Last Update : {new Date(lastUpdate).getDate()+ "-" +(new Date(lastUpdate).getMonth()+ 1) + "-" +new Date(lastUpdate).getFullYear()+ ", "+new Date(lastUpdate).toTimeString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Number of deaths caused by COVID-19.
                    </Typography>
                </CardContent>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: deathExpanded,
                    })}
                    onClick={() => handleExpandClick('death')}
                    aria-expanded={deathExpanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </IconButton>
                <Collapse in={deathExpanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography className={styles.deathsTextColor} gutterBottom>
                    Death Percentage
                    </Typography>
                    <Typography variant="h5">
                    {deathPercentage}%
                    </Typography>
                    </CardContent>
                </Collapse>
                </Grid>
                
            </Grid>
        </div>
        
    );
   
        
}
export default Cards;
