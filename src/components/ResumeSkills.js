import React, { Component } from "react"
import JSONData from "../data/resumeconfig.json"

const skills = JSONData.skills_section;

class RenderSkills extends Component {
    render() {
        return(
            <div>
                <h2>
                    {skills.skills_section_name}
                </h2>
                {
                    skills.subsection.map((subsection) => {
                        return(
                            <div>
                                <h3>
                                    {subsection.subsection_name}
                                    </h3>
                                { 
                                    subsection.subsection_list.map((list) => {
                                        return(
                                            <ul>
                                                {list}
                                            </ul>
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
export default RenderSkills;