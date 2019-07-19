import React, {Component} from 'react'

import {Doughnut, Line, Bar} from 'react-chartjs-2';

export default class ChartDisplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: [
                    '1-1-2019', '2-1-2019', '3-3-2019', '6-5-2019', '10-8-2019'
                ],
                datasets: [
                    {
                        label: 'Visit Record',
                        data: [
                            19,
                            19,
                            23,
                            20,
                            17,
                            16
                        ],
                        backgroundColor: ['pink']
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Patient Chart for James Does</h2>

                <Line
                    data={this.state.chartData}
                    options={{
                    title: {
                        display: true,
                        text: 'Visit data for patient',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}/>
            </div>
        )
    }
}