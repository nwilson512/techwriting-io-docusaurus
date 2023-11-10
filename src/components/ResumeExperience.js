import React, { Component } from "react"
import JSONData from "../data/resumeconfig.json"

const experience = JSONData.experience_section;

class RenderExperience extends Component {
    render() {
        return(
            // wraps entire experience section
            <div class="row">
                <div class="col col--2 print-title-col">
                    <h2 class="resumeH2">
                        {experience.experience_section_name}
                    </h2>
                </div>
                {/* wrap experience section minus heading */}
                <div class="col print-content-col">
                {
                    experience.subsection.map((subsection) => {
                        return(
                            // wrap each company
                            <div class="protect-break">
                                <h2>
                                    {subsection.subsection_name}
                                </h2>
                                {/* wrap each job */}
                                <div class="entry">
                                    
                                        {subsection.job.map((list) => {
                                                return(
                                                    
                                                    <div>
                                                        {list.job_titles.map((foo) => {
                                                            return(
                                                            <div className="job-title">
                                                            <h3>
                                                                {foo.job_title}
                                                            </h3>
                                                            <p class="resume-experience-tenure">
                                                                {foo.tenure}
                                                            </p>
                                                            </div>
                                                        )})}
                                                    <div>
                                                    { 
                                                        list.focus_area.map((focusArea) => {
                                                            return(
                                                                // wrap each experience subsection
                                                                <div>
                                                                    <h4>
                                                                        {focusArea.focus_area_name}
                                                                    </h4>
                                                                    <ul>
                                                                        {
                                                                            focusArea.focus_area_list.map((list) => {
                                                                                return(
                                                                                    <li>
                                                                                    {list}
                                                                                    </li>
                                                                                );
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            );    
                                                        }) 
                                                    }
                                                    </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}
export default RenderExperience;