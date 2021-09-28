import React, { Component } from "react"
import JSONData from "../data/resumeconfig.json"

const skills = JSONData.skills_section;

class RenderSkills extends Component {
    render() {
        return(
            // wraps whole skills section
            <div class="row  margin-top--lg">
                <div class="col col--2">
                    <h2 class="resumeH2">
                        {skills.skills_section_name}
                    </h2>
                </div>
                {/* wraps all skills listings */}
                <div class="col row padding-horiz--none margin-top--xs">
                    {
                        skills.subsection.map((subsection) => {
                            return(
                                // wraps single skill type
                                <div class="col col--6">
                                    <h3>
                                        {subsection.subsection_name}
                                    </h3>
                                    {/* wraps skills list */}
                                    <div class="entry">
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