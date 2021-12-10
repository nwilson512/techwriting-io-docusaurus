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

class PrintPdf extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default PrintPdf;