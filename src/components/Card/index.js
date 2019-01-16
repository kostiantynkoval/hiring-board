import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import {SECTIONS} from '../../../constants';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

const styles = () => ({
  card: {
    width: '100%',
    marginTop: 8,
  },
  title: {
    textTransform: 'capitalize'
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  arrowButton: {
    width: 30,
    height: 30,
    position: 'relative'
  },
  arrow: {
    width: 20,
    height: 20,
    top: 5,
    position: 'absolute'
  }
});

class UserCard extends Component {

  handleClick = (element, section, direction) => {
    this.props.handleClick(element, section, direction);
  }

  render () {
    const {classes, item, sectionName} = this.props;
    return (
      <Card key={item.login.uuid} className={classes.card}>
        <CardHeader
          className={classes.title}
          avatar={
            <Avatar
              className={classes.avatar}
              src={item.picture.thumbnail}
            />
          }
          title={`${item.name.first} ${item.name.last}`}
          subheader={item.location.city}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          {
            SECTIONS.indexOf(sectionName) > 0 ? (
              <IconButton
                className={classes.arrowButton}
                onClick={() => this.handleClick(item, sectionName, 'back')}
              >
                <KeyboardArrowLeft className={classes.arrow}/>
              </IconButton>
            ) : <span/>
          }
          {
            SECTIONS.indexOf(sectionName) < SECTIONS.length - 1 ? (
              <IconButton
                className={classes.arrowButton}
                onClick={() => this.handleClick(item, sectionName, 'forward')}
              >
                <KeyboardArrowRight className={classes.arrow}/>
              </IconButton>
            ) : <span/>
          }
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(UserCard);