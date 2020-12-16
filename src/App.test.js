import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import matchMedia from './__mocks__/matchMedia.mock'; // for mocking matchMedia
import App from './App';
import Actions from './constants/actions';
import { BASE_URL } from './constants/API';
import { getWeather } from './store/actions/Weather';
import WEATHER_DATA, { WEATHER_DATA_RES } from './__mocks__/weatherData.mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('App', () => {

  beforeEach(() => {
    store.clearActions();
  });

  it('should render loading screen', () => {
    const storeLoading = mockStore({
      weather: {
        loading: true,
      }
    });
    const { getByText } = render(
      <Provider store={storeLoading}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should dispatch FETCH_WEATHER_SUCCESS after a successfull API request for getWeather', () => {
    mock.onGet(BASE_URL).reply(200, { list: WEATHER_DATA });
    store.dispatch(getWeather()).then(() => {
      let expectedActions = [
        { type: Actions.FETCH_WEATHER_REQUEST },
        {
          type: Actions.FETCH_WEATHER_SUCCESS,
          payload: WEATHER_DATA_RES
        }
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
