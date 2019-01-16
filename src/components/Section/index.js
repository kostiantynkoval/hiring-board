import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';

import Card from '../Card';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  paper: {
    display: 'flex',
    minHeight: 40,
    width: '30vw',
    paddingTop: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

class Section extends Component {

  render() {
    const {classes, items, sectionName, nameFilter, cityFilter, handleClick} = this.props;
    const cityReg = new RegExp(cityFilter, 'i');
    const nameReg = new RegExp(nameFilter, 'i');
    return (
      <Grid item>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h3">
            {sectionName}
          </Typography>
          {
            items.map(item => {
              if((nameReg.test(item.name.first) || nameReg.test(item.name.last)) && cityReg.test(item.location.city)) {
                return (
                  <Card sectionName={sectionName} item={item} handleClick={handleClick}/>
                )
              } else {
                return null;
              }
            })
          }
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Section)