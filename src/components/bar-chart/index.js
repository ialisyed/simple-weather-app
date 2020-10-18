import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

/**
 * Simple bar chart to display hourly weather data
 * @param {any} props 
 */
function BarChart(props) {
    const { data, xAxisLabel, yAxisLabel, yAxisTicksCallBack } = props;
    return (
        <div className="mt-4">
            <Bar
                data={data}
                height={350}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: yAxisTicksCallBack,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: yAxisLabel
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: xAxisLabel
                            }
                        }]
                    }
                }}
            />
        </div>
    );
}

BarChart.propTypes = {
    data: PropTypes.any,
    xAxisLabel: PropTypes.string,
    yAxisLabel: PropTypes.string,
    yAxisTicksCallBack: PropTypes.func,
};

BarChart.defaultProps = {
    yAxisTicksCallBack: function (value, index, values) {
        return value;
    },
};

export default BarChart;