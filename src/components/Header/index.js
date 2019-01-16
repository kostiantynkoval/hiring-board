import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';

import SearchItem from '../SearchItem';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = () => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: 4,
    marginRight: 16,
    marginLeft: 0,
  },
  searchIcon: {
    width: 20,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 24,
  }
})

const Header = ({classes, handleFilter}) => (
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow} />
          <SearchItem name="city" onChange={handleFilter}/>
          <SearchItem name="name" onChange={handleFilter}/>
        </Toolbar>
      </AppBar>
    )

export default withStyles(styles)(Header);