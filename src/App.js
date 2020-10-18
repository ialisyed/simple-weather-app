import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/customStyles.css";

import { getWeather } from './store/actions/Weather';

import Weather from './screens/weather';
import Loading from './screens/loading';

function App(props) {
  const { getWeather } = props;

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  let routes = (
    <Route exact path='/' component={props.loading ? Loading : Weather} />
  );

  return (
    <div className="App" >
      {routes}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getWeather
  }, dispatch)
}

const mapStateToProps = state => {
  const { loading } = state.weather
  return {
    loading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
