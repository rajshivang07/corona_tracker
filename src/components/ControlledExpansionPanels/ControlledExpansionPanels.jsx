import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './ControlledExpansionPanels.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.container}>
      <ExpansionPanel item xs={12} md={3} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>COVID-19 Symptoms</Typography>
          <Typography className={classes.secondaryHeading}>Check the symptoms here</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          People with COVID-19 have had a wide range of symptoms reported - ranging from mild symptoms to severe illness. These symptoms may appear 2-14 days after exposure to the virus:

          <Typography color="textSecondary">+ Fever </Typography>
          <Typography color="textSecondary">+ Cough </Typography>
          <Typography color="textSecondary">+ Shortness of breath or difficulty breathing </Typography>
          <Typography color="textSecondary">+ Chills </Typography>
          <Typography color="textSecondary">+ Repeated shaking with chills </Typography>
          <Typography color="textSecondary">+ Muscle pain </Typography>
          <Typography color="textSecondary">+ Headache </Typography>
          <Typography color="textSecondary">+ Sore throat </Typography>
          <Typography color="textSecondary">+ New loss of taste or smell </Typography>
                     
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}