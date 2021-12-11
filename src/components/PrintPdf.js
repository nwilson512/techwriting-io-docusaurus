import React from 'react';
import ReactToPrint from 'react-to-print';

// import ResumeEducation from './ResumeEducation';
// import ResumeExperience from './ResumeExperience';
// import ResumeSkills from './ResumeSkills';

import ComponentToPrint from './ResumeAll';

/* The way this currrently works is as follows:

All of the resume components are collected into a single component called `ResumeAll`
This component is the only component called on the `resume.js` page
It looks like there's another way I could do this. If I want to call components separately, and apply different styles, 
I can hide the components from this using the steps from the FAQ under the following section: `How do you make ComponentToPrint show only while printing`
I'm not sure if there's any value in doing so. 

I think I can also use the @media directive in css to define custom styling for when this is printed, meaning that I can control the style that way. 
I should write this into a feature spec.
*/ 

// Get the current date and append it to the resume name automatically
var today = new Date();

const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

var date = monthArray[today.getMonth()]+' '+today.getFullYear();

// Detect chrome, I only plan to support printing on Chrome

var sBrowser, sUsrAg = navigator.userAgent;
var showButton = false;

// conditionally returns the content + print button if user is running Chrome, otherwise it just returns the content
class PrintPdf extends React.PureComponent {
  render() {
    if (sUsrAg.indexOf("Chrome") > -1) {
      showButton = true;
    }
    if (showButton){
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
          documentTitle={"Nathaniel Wilson " + date}
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