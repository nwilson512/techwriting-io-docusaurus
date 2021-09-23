import React, { Component } from "react"
import JSONData from "../data/resumeconfig.json"

const experience = JSONData.experience_section;

class RenderExperience extends Component {
    render() {
        return(
            <div>
                <h2>
                    {experience.experience_section_name}
                </h2>
                {
                    experience.subsection.map((subsection) => {
                        return(
                            <div>
                                <h3>
                                    {subsection.subsection_name}
                                </h3>
                                <h4>
                                    {subsection.job_title}
                                </h4>
                                <p>
                                    {subsection.tenure}
                                </p>
                                { 
                                    subsection.focus_area.map((focusArea) => {
                                        return(
                                            <div>
                                            <p>
                                                {focusArea.focus_area_name}
                                            </p>
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
                        );
                    })
                }
            </div>
        );
    }
}
export default RenderExperience;