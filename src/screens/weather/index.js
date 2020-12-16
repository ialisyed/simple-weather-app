import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import { Container } from '@material-ui/core';
import moment from 'moment';

import WeatherCard from '../../components/weather-card/index';
import WeatherUnitControl from '../../components/weather-units-control/index';
import BarChart from '../../components/bar-chart/index';
import { SLIDER_SETTINGS, makeBarChartData } from '../../helper/UI/index';
import GENERAL from '../../constants/General';
import LOCALIZATION from '../../locale/en';

function Weather() {
  const data = useSelector(state => state.weather.data);

  // controlling current temperature unit. Celcius by default
  const [currentUnit, setCurrentUnit] = useState(GENERAL.DATA_KEYS_MAP.CELSIUS);
  
  const currentData = data[currentUnit];

  // controlling currently selected card. First card by default
  const [selectedCardKey, setSelectedCardKey] = useState(Object.keys(currentData)[0]);

  /**
   * Handle temperature unit radio button change
   * @param {HTMLRADIOEVENT} event 
   */
  const handleRadioChange = (event) => setCurrentUnit(event.target.value)

  /**
   * Render daily weather cards
   */
  const renderCards = () => Object.keys(currentData).map((key, index) => (
    <WeatherCard
      key={currentData[key].values[0].dt}
      isSelected={key === selectedCardKey}
      onClick={() => setSelectedCardKey(key)}
      icon={currentData[key].values[0].weather[0].icon}
      temprature={currentData[key].tempAvg}
      date={moment(key).format(GENERAL.DATE_FORMATS.LL)}
      unit={currentUnit}
    />
  ));

  return (
    <Container maxWidth="md">
      <WeatherUnitControl
        value={currentUnit}
        defaultValue={currentUnit}
        onChange={handleRadioChange}
      />
      <Slider {...SLIDER_SETTINGS}>
        {renderCards()}
      </Slider>
      <BarChart
        data={makeBarChartData(currentData[selectedCardKey].values)}
        yAxisLabel={LOCALIZATION.TEMPERATURE}
        xAxisLabel={LOCALIZATION.TIME}
        yAxisTicksCallBack={function (value, index, values) {
          // append current temperature unit to y-axis lable 
          const unit = currentUnit === GENERAL.DATA_KEYS_MAP.CELSIUS
            ? LOCALIZATION.DEGREE_CELCIUS
            : LOCALIZATION.DEGREE_FAHRENHEIT;
          return value + unit;
        }}
      />
    </Container>
  );
}

export default Weather;