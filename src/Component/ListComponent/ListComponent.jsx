import React, { Component } from 'react';
import mockJson from '../../mock/list.json';


export default class ListComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: mockJson
        };
    }



    searchHandle = (e) => {
        const { data } = this.state
        console.log("searchhhhhhhh`")
        console.log(e.target.value)
        let value = e.target.value
        this.filterData(value)
    }

    filterData = (value) => {
        const excludeColumns = [];
        const { data } = this.state
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") this.setState({
            data: mockJson
        });
        else {
            const filteredData = data.filter(item => {
                return Object.keys(item).some(key =>
                    excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            this.setState({
                data: filteredData
            })
        }
    }

    render() {
        const { data } = this.state

        return (
            <div className="listComp">
                <div style={{ marginLeft: '10%', marginRight: '10%', marginTop: '5%' }}>
                    <h3 style={{ textAlign: 'center' }}> List table</h3>

                    <div class="searchbox" style={{ textAlign: 'right' }}>
                        <input type="text" id="mySearch" onChange={this.searchHandle} placeholder="Search.." />
                    </div>
                    <table id="myTable" class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Roll No</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.id}</td>
                                            <td>{item.age}</td>
                                            <td>{item.gender}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}