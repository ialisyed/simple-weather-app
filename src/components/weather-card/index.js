import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import GENERAL from '../../constants/General';
import { ICON_REPLACER } from './../../constants/General/index';
import LOCALIZATION from './../../locale/en';

/**
 * Renders Celcius symbol
 */
function Celcius() {
    return <>
        &#8451;
    </>
}

/**
 * Renders Fahrenheit symbol
 */
function Fahrenheit() {
    return <>
        &#8457;
    </>
}

const SELECTED_CARD_COLOR = '#e8f4f8';

/**
 * Temperature Card for each day
 * @param {any} props 
 */
function WeatherCard(props) {
    const { isSelected, onClick, icon, temprature, unit, date } = props;
    return (
        <Card style={{ backgroundColor: isSelected ? SELECTED_CARD_COLOR : 'unset' }}>
            <CardActionArea onClick={onClick}>
                <CardMedia image={GENERAL.ICON_URL.replace(ICON_REPLACER, icon)} className='media' />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {LOCALIZATION.TEMP_LABEL}
                    </Typography>
                    <Typography variant="h3" color="textSecondary" component="p">
                        {temprature.toFixed(2)} {unit === GENERAL.DATA_KEYS_MAP.CELSIUS ? <Celcius /> : <Fahrenheit />}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {LOCALIZATION.DATE_LABEL}
                    </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                        {date}
                    </Typography>
                </CardContent>
            </CardActionArea >
        </Card >
    )
};

WeatherCard.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.string,
    temprature: PropTypes.number,
    unit: PropTypes.string,
    date: PropTypes.string,
    isSelected: PropTypes.bool,
}

export default WeatherCard;