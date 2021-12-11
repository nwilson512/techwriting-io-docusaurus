import React from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ResumeAll';

class PrintPdf extends React.PureComponent {
  
  // Conditionally returns the content + print button if user is running Chrome, otherwise it just returns the content
  CheckBrowser() {
    var sUsrAg = navigator.userAgent;
    var showButton = false;
  
    if (sUsrAg.indexOf("Chrome") > -1) {
      showButton = true;
    }
    return(
      showButton
    );
  }

  // Gets the current date and append it to the resume name automatically
  GetDate() {
    var today = new Date();

    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    var date = monthArray[today.getMonth()]+' '+today.getFullYear();

    return(
      date
    );
  }

  render() {
    
    if (this.CheckBrowser()){
    return (
      <div>
        <div class="print-button-wrapper">
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button
            className="button button--secondary button--lg margin--sm"
            >
            Print this resume
            </button>;
          }}
          content={() => this.componentRef}
          documentTitle={"Nathaniel Wilson " + this.GetDate()}
        />
        </div>
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
        }
    return (<ComponentToPrint ref={el => (this.componentRef = el)} />)
  }
}

export default PrintPdf;