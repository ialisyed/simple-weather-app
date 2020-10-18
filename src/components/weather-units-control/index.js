import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import LOCALIZATION from './../../locale/en';
import GENERAL from '../../constants/General';

/**
 * Celcius and Fahrenheit radio controls to control Temperature uni
 * @param {any} props 
 */
function WeatherUnitControl(props) {
    const {value, defaultValue, onChange} = props
    return (
        <FormControl className="mt-3 mb-3" component="fieldset">
            <FormLabel component="legend">{LOCALIZATION.TEMPERATURE_UNIT}</FormLabel>
            <RadioGroup
                row
                aria-label="temprature-unit"
                name="temprature-unit"
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
            >
                <FormControlLabel
                    value={GENERAL.DATA_KEYS_MAP.CELSIUS}
                    control={<Radio color="primary" />}
                    label={LOCALIZATION.CELCIUS}
                    labelPlacement="end"
                />
                <FormControlLabel
                    value={GENERAL.DATA_KEYS_MAP.FAHRENHEIT}
                    control={<Radio color="primary" />}
                    label={LOCALIZATION.FAHRENHEIT}
                    labelPlacement="end"
                />
            </RadioGroup>
        </FormControl>
    );
}

WeatherUnitControl.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
}

export default WeatherUnitControl;

