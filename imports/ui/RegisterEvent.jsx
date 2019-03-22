import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

class RegisterEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      lat: "",
      long: "",
      description: "",
      rsvp: [],
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newEvent = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      lat: this.state.lat,
      long: this.state.long,
      description: this.state.description,
      rsvp: this.state.rsvp
    };

  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-lg-10 col-xl-9 mx-auto"
            style={{ padding: "100px" }}
          >
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex col-6" />
              <div className="card-body">
                <h5 className="card-title">Add Event</h5>
                <p className="grey-text text-darken-1">
                  Back to <Link to="/browseevents">Browse Events</Link>
                </p>

                <form
                  className="form-signin"
                  noValidate
                  onSubmit={this.onSubmit}
                >
                  <div className="form-label-group">
                    <label htmlFor="name">Name</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("", {
                        invalid: errors.name
                      })}
                    />
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="date">Date</label>
                    <input
                      onChange={this.onChange}
                      value={this.state.date}
                      error={errors.date}
                      id="date"
                      type="date"
                      className={classnames("", {
                        invalid: errors.date
                      })}
                    />
                    <span className="red-text">{errors.date}</span>
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="time">Time</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.time}
                      error={errors.time}
                      id="time"
                      type="breed"
                      time={classnames("", {
                        invalid: errors.time
                      })}
                    />
                    <span className="red-text">{errors.time}</span>
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="lat">Latitude</label>

                    <input
                      onChange={this.onChange}
                      value={this.state.lat}
                      error={errors.lat}
                      id="lat"
                      type="lat"
                      className={classnames("", {
                        invalid: errors.lat
                      })}
                    />
                    <span className="red-text">{errors.lat}</span>
                    <div className="form-label-group">
                      <label htmlFor="long">Longitude</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.long}
                        error={errors.long}
                        id="long"
                        type="long"
                        className={classnames("", {
                          invalid: errors.long
                        })}
                      />
                      <span className="red-text">{errors.long}</span>
                       </div>
                      <div className="form-label-group">
                      <label htmlFor="long">Description</label>
                      <input
                        maxLength="100"
                        onChange={this.onChange}
                        value={this.state.description}
                        error={errors.description}
                        id="description"
                        type="description"
                        className={classnames("", {
                          invalid: errors.description
                        })}
                      />
                      <span className="red-text">{errors.description}</span>
                       </div>
                      <div className="form-label-group">
                        <button
                          style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                          }}
                          type="submit"
                          className="btn btn-lg btn-primary btn-block text-uppercase"
                        >
                          Submit
                        </button>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterEvent.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(RegisterEvent);