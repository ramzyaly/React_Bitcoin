import React, { Component } from 'react';
import axios from 'axios';

class Bitcoin extends Component{
    constructor(){
        super();
        this.state={ 
        audbeli:'',
        audjual:'',   
        eurbeli:'',        
        eurjual:'',    
        pounbeli:'',        
        pounjual:'',    
        yenbeli:'',        
        yenjual:'',  
        usdbeli:'',
        usdjual:'',
    }
    }
    
componentDidMount(){
    var url="https://blockchain.info/ticker"
    axios.get(url)
    .then((ambilData) => {     
      this.setState({
        audbeli: ambilData.data.AUD.buy.toFixed(2),
        audjual: ambilData.data.AUD.sell.toFixed(2),   
        eurbeli: ambilData.data.EUR.buy.toFixed(2),        
        eurjual: ambilData.data.EUR.sell.toFixed(2),    
        pounbeli: ambilData.data.GBP.buy.toFixed(2),        
        pounjual: ambilData.data.GBP.sell.toFixed(2),    
        yenbeli: ambilData.data.JPY.buy.toFixed(2),        
        yenjual: ambilData.data.JPY.sell.toFixed(2),  
        usdbeli: ambilData.data.USD.buy.toFixed(2),
        usdjual: ambilData.data.USD.sell.toFixed(2),                  
      })
    })
}
render(){
    return(
        <div>
            
            <center>
                <h1>Harga Bitcoin hari ini</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mata Uang</th>
                            <th>Harga Beli Bitcoin</th>
                            <th>Harga Jual Bitcoin</th>
                        </tr>
                    </thead>
                <tbody>
                  <tr>
                    <td>Dollar Australia</td>
                    <td>{this.state.audbeli}</td>
                    <td>{this.state.audjual}</td>                      
                  </tr>
                  <tr>
                    <td>Euro Eropa</td>
                    <td>{this.state.eurbeli}</td>
                    <td>{this.state.eurjual}</td>
                  </tr>
                  <tr>
                    <td>Poundsterling Inggris</td>
                    <td>{this.state.pounbeli}</td>
                    <td>{this.state.pounjual}</td>                      
                  </tr>
                  <tr>
                    <td>Yen Jepang</td>
                    <td>{this.state.yenbeli}</td>
                    <td>{this.state.yenjual}</td>                       
                  </tr>
                  <tr>
                    <td>Dollar Amerika</td>
                    <td>{this.state.usdbeli}</td>
                    <td>{this.state.usdjual}</td>                      
                  </tr>
                </tbody>
              </table>
            </center>
        </div>
    )
}
}
export default Bitcoin;