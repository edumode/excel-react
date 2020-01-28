import React, { Component } from 'react'
import { HotTable } from '@handsontable/react';

import 'handsontable/dist/handsontable.full.css';

class HandsOnTable extends Component{
    constructor(props){
        super(props)

        this.data = [
            ["", "Ford", "Volvo", "Toyota", "Honda"],
            ["2016", 10, 11, 12, 13],
            ["2017", 20, 11, 14, 13],
            ["2018", 30, 15, 12, 13]
          ];
    }

    render(){
        return(
            <div>
                <h1>HandsOnTable</h1>

                <HotTable data={this.data} colHeaders={true} rowHeaders={true} width="1500" height="300" />
            </div>
        )
    }
    
}


export default HandsOnTable