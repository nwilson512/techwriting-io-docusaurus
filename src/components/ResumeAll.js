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
        <div class="row">
          <div class="col col--2 print-title-col">
            <ul>
          <li class="print-email"><a href="https://techwriting.io">https://techwriting.io</a></li>
          <li class="print-email"><a href="https://github.com/nwilson512">github.com/nwilson512</a></li>
          </ul>
          </div>
          <div class="col row padding-horiz--none skills-list print-content-col">
            <p class="col print-description">Degreed lead software technical writer with nearly a decade of experience writing for developer audiences, focusing on cloud and Kubernetes, specializing in docs-as-code approaches, and supporting those efforts with front end web development skills.</p>
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