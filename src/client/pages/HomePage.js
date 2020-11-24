import React, { Component } from "react";
import { connect } from "react-redux";

import { getParamObj } from "./../../helpers/helpers";
import { fetchSpaceXLaunch, fetchSpaceXLaunchClient } from "./../actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.changeYearFilter = this.changeYearFilter.bind(this);
    this.state = {
      limit: 100,
      launch_success: null,
      land_success: null,
      launch_year: null,
      search: null,
      successful_launch: null,
      successful_landing: null,
    };
  }

  componentDidMount() {
    if (this.props.location.search != "") {
      this.loadDataFromParam(false);
    }
  }

  componentDidUpdate() {
    if (this.props.location.search !== this.state.search) {
      this.loadDataFromParam();
    }
  }

  loadDataFromParam(loader = true) {
    let limit = 10;
    let launch_success = null;
    let land_success = null;
    let launch_year = null;
    let result = getParamObj(this.props.location.search);
    let param = "";
    if (!!result.limit) {
      limit = result.limit;
      param += "&limit=" + limit;
    }
    if (!!result.launch_success) {
      launch_success = result.launch_success;
      param += "&launch_success=" + launch_success;
    }
    if (!!result.land_success) {
      land_success = result.land_success;
      param += "&land_success=" + land_success;
    }
    if (!!result.launch_year) {
      launch_year = result.launch_year;
      param += "&launch_year=" + launch_year;
    }

    if (param.length > 0) {
      param = "?" + param.slice(1);
    }

    this.props.fetchSpaceXLaunchClient(param, loader).finally(() => {
      this.setState({
        limit,
        launch_success,
        launch_year,
        land_success,
        search: this.props.location.search,
      });
    });
  }

  changeYearFilter(year) {
    const {
      limit,
      launch_success,
      land_success,
      launch_year,
      result,
    } = this.state;
    let param = "";
    if (!!limit) {
      param += "&limit=" + limit;
    }
    if (!!launch_success) {
      param += "&launch_success=" + launch_success;
    }
    if (!!land_success) {
      param += "&land_success=" + land_success;
    }
    if (!!year) {
      param += "&launch_year=" + year;
    }

    if (param.length > 0) {
      param = "?" + param.slice(1);
    }
    this.props.history.replace(param);
  }

  changeLaunchFilter(launch) {
    const {
      limit,
      launch_success,
      land_success,
      launch_year,
      result,
    } = this.state;
    let param = "";
    if (!!limit) {
      param += "&limit=" + limit;
    }
    if (!!launch) {
      param += "&launch_success=" + launch;
    }
    if (!!land_success) {
      param += "&land_success=" + land_success;
    }
    if (!!launch_year) {
      param += "&launch_year=" + launch_year;
    }

    if (param.length > 0) {
      param = "?" + param.slice(1);
    }
    this.props.history.replace(param);
  }

  changeLandFilter(land) {
    const {
      limit,
      launch_success,
      land_success,
      launch_year,
      result,
    } = this.state;
    let param = "";
    if (!!limit) {
      param += "&limit=" + limit;
    }
    if (!!launch_success) {
      param += "&launch_success=" + launch_success;
    }
    if (!!land) {
      param += "&land_success=" + land;
    }
    if (!!launch_year) {
      param += "&launch_year=" + launch_year;
    }

    if (param.length > 0) {
      param = "?" + param.slice(1);
    }
    this.props.history.replace(param);
  }

  render() {
    const {
      limit,
      launch_success,
      land_success,
      launch_year,
      result,
    } = this.state;
    const { launch_list } = this.props;
    return (
      <div className="pageContent">
        <div className="pageLeft">
          <div className="filter">
            <h3>Filters</h3>
            <h4>Launch Year</h4>
            <div className="filterRow">
              {Array.from({ length: new Date().getFullYear() - 2006 + 1 }).map(
                (itm, index) => (
                  <div key={index}>
                    <button
                      aria-label={2006 + index}
                      className={
                        launch_year == 2006 + index ? "activeFilterBtn" : ""
                      }
                      onClick={() => this.changeYearFilter(2006 + index)}
                    >
                      {2006 + index}
                    </button>
                  </div>
                )
              )}
            </div>
            <h4>Successful Launch</h4>
            <div className="filterRow">
              <div>
                <button
                  aria-label="True"
                  onClick={() => this.changeLaunchFilter("true")}
                  className={launch_success == "true" ? "activeFilterBtn" : ""}
                >
                  True
                </button>
              </div>
              <div>
                <button
                  aria-label="False"
                  onClick={() => this.changeLaunchFilter("false")}
                  className={launch_success == "false" ? "activeFilterBtn" : ""}
                >
                  False
                </button>
              </div>
            </div>
            <h4>Successful Landing</h4>
            <div className="filterRow">
              <div>
                <button
                  aria-label="True"
                  onClick={() => this.changeLandFilter("true")}
                  className={land_success == "true" ? "activeFilterBtn" : ""}
                >
                  True
                </button>
              </div>
              <div>
                <button
                  aria-label="False"
                  onClick={() => this.changeLandFilter("false")}
                  className={land_success == "false" ? "activeFilterBtn" : ""}
                >
                  False
                </button>
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
                    <img
                      alt={mission.mission_name}
                      src={mission.links.mission_patch_small}
                    />
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
  fetchSpaceXLaunchClient: (param, loader) =>
    dispatch(fetchSpaceXLaunchClient(param, loader)),
});
export default {
  component: connect(mapStateToProps, mapDispatchToProps)(HomePage),
  loadData: ({ dispatch }) => dispatch(fetchSpaceXLaunch()),
};
