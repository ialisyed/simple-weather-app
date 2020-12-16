import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/customStyles.css";

import { getWeather } from './store/actions/Weather';

import Weather from './screens/weather';
import Loading from './screens/loading';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.weather.loading);

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  let routes = (
    <Route exact path='/' component={loading ? Loading : Weather} />
  );

  return (
    <div className="App" >
      {routes}
    </div>
  );
}

export default withRouter(App);
