import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import {SECTIONS} from '../../../constants';

import Header from '../Header';
import Section from '../Section';

import Grid from '@material-ui/core/Grid';

const styles = () => ({
  barRoot: {
    marginBottom: 16
  },
  root: {
    flexGrow: 1,
  },
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

class Dashboard extends Component {

  constructor() {
    super();
    // set our sections in state
    this.state = {
      city: '',
      name: '',
      applied: [],
      interviewing: [],
      hired: []
    }
  }

  async componentDidMount() {
    // get users and put them all into 'applied' section
    const data = await fetch('https://randomuser.me/api/?nat=gb&results=5', {method: 'get'});
    const users = await data.json();
    this.setState({applied: users.results})
  }

  handleFilter = (value) => {
    this.setState({...value});
  }

  handleClick = (element, section, direction) => {
    // find item index in state section
    const index = this.state[section].findIndex(item => item.login.uuid === element.login.uuid);

    // find out new section name
    const oldSectionIndex = SECTIONS.indexOf(section);
    const newSectionName = direction === 'forward' ? SECTIONS[oldSectionIndex + 1] : SECTIONS[oldSectionIndex - 1]

    // Change place of item in state
    const oldSectionList = [...this.state[section]];
    oldSectionList.splice(index, 1);
    const newSectionList = [...this.state[newSectionName]];
    newSectionList.push(element);
    this.setState({[section]: oldSectionList, [newSectionName]: newSectionList})
  }


  render() {
    const {classes} = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <div className={classes.barRoot}>
            <Header handleFilter={this.handleFilter}/>
          </div>
          <Grid container justify="center" spacing={16}>
            {SECTIONS.map(value => (
              <Section
                key={value}
                sectionName={value}
                nameFilter={this.state.name}
                cityFilter={this.state.city}
                items={this.state[value]}
                handleClick={this.handleClick}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Dashboard)