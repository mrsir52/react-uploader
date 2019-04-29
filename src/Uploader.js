import React, { Component } from "react";
import CSVReader from 'react-csv-reader'
import "./App.css";

export default class Uploader extends Component {
    state = {
      selectedFile: null
    };
  
  
    fileSelected = data =>  {
      this.setState({ selectedFile: data });
    }
  
    handleSubmit = e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("myImage", this.state.selectedFile);
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
        //this will refresh the window once you hit submit
        .then(() => window.location.reload(true));
    };
  
    // onChange(e) => {
    //   //console.log(e.target.files[0])
    //   this.setState({ selectedFile: e.target.files[0] });
    // }
    render() {
      console.log('state', this.state)
      return (
        <div>
          <h2>File Uploader</h2>
          
          <CSVReader
          cssClass="csv-reader-input"
          label="Select CSV with secret Death Star statistics"
          onFileLoaded={this.fileSelected}
          onError={this.handleDarkSideForce}
          inputId="ObiWan"
          inputStyle={{color: 'red'}}
        />
        </div>
      );
    }
  }