import React, { Component } from 'react';
import axios from 'axios';

class Rupiahbitcoin extends Component {
    
    state =
    {
      input: '',
      result: ''
    }

    componentDidMount(){
        axios.get('https://blockchain.info/tobtc?currency=USD&value=500').then((ambilData) => 
        {
          console.log(ambilData.data);
          this.setState({
              process: (ambilData.data) / (500 * 14000)
          })
        })
    };
    count()
    {
      var numb = this.refs.angka.value;
      var convert = numb * this.state.process;
      var round = convert.toFixed(6)
      this.setState({
          input: numb,
          result: round
      })
    }

    render() {
    return (
        <div>
            <center style={{marginTop:150}}>
                <h1>Konversi Rupiah ke Bitcoin</h1>
                <h3>Kurs 1 USD = IDR 14000</h3>
                <input ref="angka" type="number" onInput={()=>{this.count();}} style={{width:500,height:20}}/>
                <br/><br/>
                <p>
                Rp {this.state.input} = BTC {this.state.result}
                </p>
            </center>
        </div>
    );
  }
}
export default Rupiahbitcoin;