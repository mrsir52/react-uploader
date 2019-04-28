// import React, { Component } from "react";
// import logo from './logo.svg';
// import Papa from 'papaparse'
// import './App.css';

// export default class App extends Component {
// state = {
//   myImage: ""
// }

//   handleSubmit = e => {
//     e.preventDefault();

//     const formData = new FormData();
//         formData.append('myImage',this.state.file);
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         };

//     fetch("http://localhost:4000/upload", {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       //this will refresh the window once you hit submit
//       .then(() => window.location.reload(true));
//   };

//   onChange(e) {
//     this.setState({myImage:e.target.files[0]});
// }
//   render() {
//     return (
//       <div>
//            <h2>File Uploader</h2>
//       <section className="container">
//       <form action="/upload" method="post" enctype="multipart/form-data">
//   <div className="form-group">
//     <label for="fileNameInput">Upload File</label>
//     <input type="file" class="form-control" id="file" aria-describedby="fileHelp" placeholder="File Name" onChange= {this.onChange}/>
//   </div>

//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>

//       </section>
//       </div>
//     )
//   }
// }

// import React, { Component } from "react";
// import axios from 'axios'

// import { CSVReader } from "react-papaparse";

// class App extends Component {
//   state = {
//     fileInput: React.createRef()
//   };
  
//   handleSubmit = () => {
//     const url = "http://localhost:4000/upload";
//     const formData = this.state.fileInput;
//     return post(url, formData).then(response =>
//       console.warn("result", response)
//     );
//   };

//   handleReadCSV = data => {
//     console.log("handleread", data);
//   };

//   handleOnError = (err, file, inputElem, reason) => {
//     console.log(err);
//   };

//   handleImportOffer = () => {
//     this.state.fileInput.current.click();
//   };

//   render() {
//     console.log("state", this.state);
//     return (
//       <div>
//         <CSVReader
//           onFileLoaded={this.handleReadCSV}
//           inputRef={this.state.fileInput}
//           style={{ display: "none" }}
//           onError={this.handleOnError}
//           configOptions={{
//             header: true,
//             step: function(row) {
//               /* Stream */
//               console.log("Row:", row.data);
//             }
//           }}
//         />
//         <button onClick={this.handleImportOffer}>Import</button>
//         <button onClick={this.handleSubmit}>Submit</button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
//import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";
//import "./styles.css";



export default class App extends Component {
  state = {
    csv: []
  }
  
  // handleForce = async data => {
  //   console.log(data);
  //   let formData = new FormData();
  //   formData.append(data, this.csv);
  //   let options = {
  //     method: 'POST',
  //     body: formData
  //   }
  //   await fetch(`http://localhost:4000/upload`, options)
  //       .then(resp => resp.json())
  //       .then(result => {
  // alert(result.message)
  // })
  
  // };

  handleChange = (event) => {
    this.setState({
      csv: event.target.files[0]
    })
  }
  render() {
    console.log("state", this.state)
    return (
      
          <div className="container">
    {/* <CSVReader
      cssClass="react-csv-input"
      label="Select CSV with secret Death Star statistics"
      onFileLoaded={this.handleForce}
    /> */}
    <input
   type="file"
   ref={(input) => { this.filesInput = input }}
   name="file"
   icon='file text outline'
   iconPosition='left'
   label='Upload CSV'
   labelPosition='right'
   placeholder='UploadCSV...'
   onChange={this.handleChange}
 />
    <p>and then open the console</p>
  </div>
      
    )
  }
}
