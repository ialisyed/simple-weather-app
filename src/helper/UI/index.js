import React from 'react';
import Arrow from './../../components/slicker-arrow/index';
import moment from 'moment';
import GENERAL from '../../constants/General';

/**
 * Slider settings
 */
export const SLIDER_SETTINGS = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

/**
 * Model chart data
 */
const getChartDataModel = () => ({
    labels: [],
    datasets: [{
        label: '',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: []
    }]
});

/**
 * Parse weather data as per Bar Charts required data
 * @param {Array} values 
 */
export function makeBarChartData(values = []) {
    const data = getChartDataModel();
    values.forEach(value => {
        data.labels.push(moment(value.dt_txt).format(GENERAL.DATE_FORMATS.hh_mm_ss_a));
        data.datasets[0].data.push(value.main.temp)
    })
    return data;
}