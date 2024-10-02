import React, { Component } from "react";

import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';

class ResumeAll extends Component {
  render() {
    return (
      <div className="print-wrapper">
        <div className="row">
          <div className="col col--10 col--offset-2 margin-bottom--md print-resume-title">
            <h1 className="resume-title">
              Nathaniel Wilson
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col col--2 print-title-col">
            <ul>
              <li className="print-email"><a href="https://techwriting.io">https://techwriting.io</a></li>
              <li className="print-email"><a href="https://github.com/nwilson512">github.com/nwilson512</a></li>
            </ul>
          </div>
          <div className="col row padding-horiz--none skills-list print-content-col">
            <p className="col print-description">Degreed software technical writer with a decade of experience writing for developer audiences, practicing docs-as-code, performing front end web development, and accelerating everything with generative AI.</p>
          </div>
        </div>
        <ResumeExperience />
        <ResumeEducation />
        <ResumeSkills />
      </div>
    );
  }
}

export default ResumeAll;