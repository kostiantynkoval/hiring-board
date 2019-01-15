import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const sections = ['Applied', 'Interviewing', 'Hired'];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    height: 140,
    width: '30vw',
    paddingTop: 8,
    justifyContent: 'center'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      applied: [],
      interviewing: [],
      hired: []
    }
  }



  async componentDidMount() {
    const data = await fetch('https://randomuser.me/api/?nat=gb&results=5', {method: 'get'});
    const users = await data.json();
    const appliedUsers = users.results.map(user => {
      user.status = 'applied';
      return user;
    });
    this.setState({hired: appliedUsers})

  }



  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={Number(16)}>
            {sections.map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                  <Typography variant="h5" component="h3">
                    {value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Dashboard)