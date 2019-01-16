import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles = () => ({
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

class SearchItem extends Component {

  handleChange = name => event => {
    this.props.onChange({
      [name]: event.target.value,
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon/>
        </div>
        <InputBase
          placeholder={`Filter by ${this.props.name}…`}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={this.handleChange(this.props.name)}
        />
      </div>
    )
  }
}

export default withStyles(styles)(SearchItem)