import React, { Component } from "react"
import JSONData from "../data/resumeconfig.json"

const education = JSONData.education_section;

class RenderEducation extends Component {
    render() {
        return(
            // wraps all education
            <div class="row margin-top--lg">
                <div class="col col--2">
                    <h2 class="resumeH2">
                        {education.education_section_name}
                    </h2>
                </div>
                {/* wraps all education listings */}
                <div class="col">
                    {
                        education.subsection.map((subsection) => {
                            return(
                                // wraps whole university listing
                                <div>
                                    <h2>
                                        {subsection.subsection_name}
                                        </h2>
                                    {/* wrap these for styling */}
                                    <div class="entry">
                                        <h3>
                                            {subsection.degree_name}
                                        </h3>
                                        <p>
                                            {subsection.graduation_date}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default RenderEducation;