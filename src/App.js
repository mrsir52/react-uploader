import React, { Component } from "react";
import CSVReader from 'react-csv-reader'
import Cookies from './Cookies'
import "./App.css";

export default class Uploader extends Component {
    state = {
      file: null,
      info: []
    };
  
    handleFiles = files => {
      console.log(files)
    }
    fileSelected = data =>  {
      this.setState({ file: data });
    }
  
    handleSubmit = e => {
      e.preventDefault();
      const data = JSON.stringify({file: this.state.file})
      fetch("http://localhost:4000/offense", {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json"
        },
      })
        //this will refresh the window once you hit submit
        .then(() => window.location.reload(true));
    };

    componentDidMount() {
      return fetch("http://localhost:4000/offense")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ info: data });
      });
    }
    

    render() {
      console.log('state', this.state)
      const fbList = this.state.info.map(
        ({ name, gp, rush, pass, rec, _id }) => {
          return (
            <div className="col-sm-4" key={_id}>
              <section className="card-deck ">
                <section className="card mb-4">
                  <h5 className="card-header text-center">{name}</h5>
                  <div className="card-body text-center">
                    <h4>Games Played</h4>
                    <h5>{gp}</h5>
                    <h4>Rush Yards</h4>
                    <h5>{rush}</h5>
                    <h4>Pass Yards</h4>
                    <h5>{pass}</h5>
                    <h4>Receiving Yards</h4>
                    <h5>{rec}</h5>
                    {/* <p className="cart-text ">{description}</p> */}
                    
                    <section className="d-flex justify-content-center">
                     
                    </section>
                  </div>
                </section>
              </section>
              
            </div>
          );
        }
      )
      return (
        <div>
          <section className="card mt-5">
          <CSVReader 
          cssClass="csv-reader-input"
          label="Select CSV File to upload"
          onFileLoaded={this.fileSelected}
          onError={this.handleDarkSideForce}
          inputId="ObiWan"
          inputStyle={{color: 'red'}}
        />
                    
        </section>
         
        <button className="m-3" onClick={this.handleSubmit} >submit</button>
      
        <section className="container">
            <div className="row">{fbList}</div>
          </section>
      <section>
        <Cookies />
      </section>

        </div>



      );
    }
  }