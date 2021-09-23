import React, { Component } from "react"
import JSONData from "../data/resumeconfig.json"

const experience = JSONData.experience_section;

class RenderExperience extends Component {
    render() {
        return(
            // wraps entire experience section
            <div>
                <h2>
                    {experience.experience_section_name}
                </h2>
                {/* wrap experience section minus heading */}
                <div>
                {
                    experience.subsection.map((subsection) => {
                        return(
                            // wrap each company
                            <div>
                                <h3>
                                    {subsection.subsection_name}
                                </h3>
                                {/* wrap each job */}
                                <div>
                                    <h4>
                                        {subsection.job_title}
                                    </h4>
                                    <p>
                                        {subsection.tenure}
                                    </p>
                                    { 
                                        subsection.focus_area.map((focusArea) => {
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
    }
}
export default RenderExperience;