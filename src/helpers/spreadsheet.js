// import React, {Component} from 'react';
// import ReactGoogleSheets from 'react-google-sheets';
 
 
// class DataComponent extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       sheetLoaded: false,
//     }
//   }
//   render() {
//     return (
//       <ReactGoogleSheets
//         clientId='olimp-256715'
//         apiKey="AIzaSyDXKG0LFWyMXNERW42kI69F0yfDI_tVej8"
//         spreadsheetId="140uIkrEoV9SC-ZSQChr-Xin5E_hLcWUVMv-vVA1TqNw"
//         afterLoading={() => this.setState({sheetLoaded: true})}
//       >
//         {this.state.sheetLoaded ? 
//           <div>
//             {/* Access Data */}
//             {console.log('Your sheet data : ', this.props.getSheetsData("Olimp_Power_Gym"))}
//             {/* Update Data */}
//             <button onClick={() => {
//               this.props.updateCell(
//                 'Olimp_Power_Gym', // sheetName
//                 'A', // column
//                 1, // row
//                 '', // value
//                 null, // successCallback
//                 (error) => {
//                   console.log('error', error)
//                 } // errorCallback
//               );
//             }}>update cell!</button>
//           </div>
//           :
//           'loading...'
//         }
//       </ReactGoogleSheets>
//     )
//   }
// }
 
// export default ReactGoogleSheets.connect(DataComponent);