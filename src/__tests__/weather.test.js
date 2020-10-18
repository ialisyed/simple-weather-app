import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import matchMedia from '../__mocks__/matchMedia.mock'; // for mocking matchMedia
import Weather from '../screens/weather';


const mockStore = configureMockStore();
const store = mockStore({});

describe('MyComponent', () => {
    it('should render correctly', () => {
        const component = shallow(
            <Provider store={store}>
                <Weather />
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});