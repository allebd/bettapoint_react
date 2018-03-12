import React from "react";
import PropTypes from "prop-types";
// import {
//   InfoOutline,
//   Games,
//   VideogameAsset
// } from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  ProfileCard,
  ItemGrid,
  Button
} from "components";

import practiceicon from "assets/img/faces/gamecontroller.png";
import soccerball from "assets/img/faces/soccerball.png";

import dashboardStyle from "variables/styles/dashboardStyle";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={0} sm={2} md={2}>
          </ItemGrid>                    
          <ItemGrid xs={12} sm={5} md={4}>
            <ProfileCard
              avatar={practiceicon}
              title="Practice Game"
              footer={
                <Button color="success" round>
                  Enter
                </Button>
              }
            />
          </ItemGrid> 
          <ItemGrid xs={12} sm={5} md={4}>
            <ProfileCard
              avatar={soccerball}
              title="Live Game"
              footer={
                <Button color="danger" round>
                  Enter
                </Button>
              }
            />
          </ItemGrid>         
        </Grid>        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
