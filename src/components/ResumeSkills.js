import React, { Component } from "react"
import JSONData from "../data/resumeconfig.json"

const skills = JSONData.skills_section;

class RenderSkills extends Component {
    render() {
        return(
            // wraps whole skills section
            <div>
                <h2>
                    {skills.skills_section_name}
                </h2>
                {/* wraps all skills listings */}
                <div>
                    {
                        skills.subsection.map((subsection) => {
                            return(
                                // wraps single skill type
                                <div>
                                    <h3>
                                        {subsection.subsection_name}
                                    </h3>
                                    {/* wraps skills list */}
                                    <div>
                                        <ul>
                                            { 
                                                subsection.subsection_list.map((list) => {
                                                    return(
                                                        <li>
                                                            {list}
                                                        </li>
                                                    );    
                                                }) 
                                            }
                                        </ul>
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
export default RenderSkills;