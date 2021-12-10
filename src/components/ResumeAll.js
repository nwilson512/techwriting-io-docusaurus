import React, { Component } from "react"

import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeSkills from './ResumeSkills';


class ResumeAll extends Component {
  render() {
    return (
      <div class="print-wrapper">
        <div class="row">
        <div class="col col--10 col--offset-2 margin-bottom--md">
        <h1 class="resume-title">
        Nathaniel Wilson
        </h1>
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