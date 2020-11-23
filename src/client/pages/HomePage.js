import React, { Component } from "react";
import { connect } from "react-redux";
import { getParamObj } from "./../../helpers/helpers";
import { fetchSpaceXLaunch, fetchSpaceXLaunchClient } from "./../actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
    this.state = {
      limit: 10,
      launch_success: null,
      land_success: null,
      launch_year: null,
    };
  }

  componentDidMount() {
    let limit = 10;
    let launch_success = null;
    let land_success = null;
    let launch_year = null;
    let result = getParamObj(this.props.location.search);
    let param = "?";
    if (!!result.limit) {
      limit = result.limit;
      param += "limit=" + limit;
    }
    if (!!result.launch_success) {
      launch_success = result.launch_success;
      param += "launch_success=" + launch_success;
    }
    if (!!result.land_success) {
      land_success = result.land_success;
      param += "land_success=" + land_success;
    }
    if (!!result.launch_year) {
      launch_year = result.launch_year;
      param += "launch_year=" + launch_year;
    }

    this.setState({ limit, launch_success, launch_year, result });

    this.props.fetchSpaceXLaunchClient(param);
  }

  changePage() {
    this.props.history.push("?s=7");
  }
  render() {
    const { limit, launch_success, launch_year, result } = this.state;
    const { launch_list } = this.props;
    return (
      <div className="pageContent">
        <div className="pageLeft">
          <div className="filter">
            <h3>Filters</h3>
            <h4>Launch Year</h4>
            <div className="filterRow">
              <div>
                {/* <Link to="/?a=8"> */}
                <button
                  className={launch_year == "2006" ? "activeFilterBtn" : ""}
                  onClick={this.changePage}
                >
                  2006
                </button>
                {/* </Link> */}
              </div>
              <div>
                <button>2007</button>
              </div>
              <div>
                <button>2008</button>
              </div>
              <div>
                <button>2009</button>
              </div>
              <div>
                <button>2010</button>
              </div>
            </div>
            <h4>Successful Launch</h4>
            <div className="filterRow">
              <div>
                <button>True</button>
              </div>
              <div>
                <button>False</button>
              </div>
            </div>
            <h4>Successful Landing</h4>
            <div className="filterRow">
              <div>
                <button>True</button>
              </div>
              <div>
                <button>False</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pageRight">
          <div className="itemGrid">
            {launch_list.map((mission, index) => (
              <div key={index} className="col">
                <div className="item">
                  <div className="imageWrap">
                    <img src={mission.links.mission_patch_small} />
                  </div>
                  <h3>
                    {mission.mission_name} #{mission.flight_number}
                  </h3>
                  <div className="data">
                    <label>Mission Ids : </label>
                    <ul>
                      {mission.mission_id.map((id, index) => (
                        <li key={id}>{id}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="data">
                    <label>Launch Year : </label> {mission.launch_year}
                  </div>
                  <div className="data">
                    <label>Successful Launch : </label>{" "}
                    {mission.launch_success ? "True" : "False"}
                  </div>

                  <div className="data">
                    <label>Successful Landing : </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ spaceXLaunch }) => ({
  launch_list: spaceXLaunch.launch_list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSpaceXLaunch: (param) => dispatch(fetchSpaceXLaunch(param)),
  fetchSpaceXLaunchClient: (param) => dispatch(fetchSpaceXLaunchClient(param)),
});
export default {
  component: connect(mapStateToProps, mapDispatchToProps)(HomePage),
  loadData: ({ dispatch }) => dispatch(fetchSpaceXLaunch()),
};
