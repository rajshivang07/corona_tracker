import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './SimpleExpansionPanel.module.css';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.heading}>Have a look at the developer here</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Shivang Raj

          <Typography color="textSecondary"> +91 9677853943 </Typography>
          <Typography color="textSecondary"> rajshivang07@gmail.com </Typography>
          <Typography>
            
            <Link href="https://github.com/rajshivang07" color="blue">
                Click here to access my GitHub page
            </Link>
            
            </Typography>      
             
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}