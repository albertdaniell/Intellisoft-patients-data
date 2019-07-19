import React, {Component} from 'react'
import '../App.css'

export default class Patients extends Component {

    constructor(props) {
        super(props)
        this.state = {
            patientData: [
                {
                    name: 'James Does',
                    address: '445 Mount Eden Road',
                    phone: '07181992771'

                }, {
                    name: 'Jane Makena',
                    address: '32 Wilson Street',
                    phone: '07182772811'

                }, {
                    name: 'Raph Pundo',
                    address: '21 Greens Road RD 2',
                    phone: '0718282762'

                }, {
                    name: 'Mike Owuor',
                    address: '21 Greens Road RD 2',
                    phone: '07181062511'

                }, {}
            ]
        }
    }
    render() {

        return (
            <div className="container">
                <h3>All Patients</h3>
                <hr/>

                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this
                            .state
                            .patientData
                            .map((patient) => {
                                return (
                                    <tr>
                                        <td>{patient.name}</td>
                                        <td>{patient.address}</td>
                                        <td>{patient.phone}</td>
                                    </tr>

                                )
                            })
}

                    </tbody>
                </table>
            </div>
        )
    }
}