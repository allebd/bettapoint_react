import React from "react";
import classNames from "classnames";
import { Manager, Target, Popper } from "react-popper";
import {
  withStyles,
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from "material-ui";
import { PowerSettingsNew, Person, Notifications, Dashboard, VideogameAsset, BubbleChart, LibraryBooks, ShowChart, History} from "material-ui-icons";

import headerLinksStyle from "variables/styles/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>        
        <IconButton
          color="inherit"
          aria-label="Dashboard"
          className={classes.buttonLink}
        >
          <Dashboard className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Dashboard</p>
          </Hidden>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="VideogameAsset"
          className={classes.buttonLink}
        >
          <VideogameAsset className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Practice Game</p>
          </Hidden>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="BubbleChart"
          className={classes.buttonLink}
        >
          <BubbleChart className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Matches for the Week</p>
          </Hidden>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="LibraryBooks"
          className={classes.buttonLink}
        >
          <LibraryBooks className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Leaderboard</p>
          </Hidden>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="ShowChart"
          className={classes.buttonLink}
        >
          <ShowChart className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Activity</p>
          </Hidden>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="History"
          className={classes.buttonLink}
        >
          <History className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>History</p>
          </Hidden>
        </IconButton>
        <Manager style={{ display: "inline-block" }}>
          <Target>
            <IconButton
              color="inherit"
              aria-label="Notifications"
              aria-owns={open ? "menu-list" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classes.buttonLink}
            >
              <Notifications className={classes.links} />
              <span className={classes.notifications}>3</span>
              <Hidden mdUp>
                <p onClick={this.handleClick} className={classes.linkText}>
                  Notification
                </p>
              </Hidden>
            </IconButton>
          </Target>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={
              classNames({ [classes.popperClose]: !open }) +
              " " +
              classes.pooperResponsive
            }
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow
                in={open}
                id="menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      You just won 6 games
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      You lost 7 games
                    </MenuItem>
                    <MenuItem
                      onClick={this.handleClose}
                      className={classes.dropdownItem}
                    >
                      You drew 2 games
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
        <IconButton
          color="inherit"
          aria-label="Person"
          className={classes.buttonLink}
        >
          <Person className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="PowerSettingsNew"
          className={classes.buttonLink}
        >
          <PowerSettingsNew className={classes.links} />
          <Hidden mdUp>
            <p className={classes.linkText}>Log Out</p>
          </Hidden>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
