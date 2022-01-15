import React from 'react';
import ReactToPrint from 'react-to-print';
import ComponentToPrint from './ResumeAll';

class PrintPdf extends React.PureComponent {

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
}

export default PrintPdf;