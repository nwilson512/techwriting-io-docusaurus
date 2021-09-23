import React, { Component } from "react"
import JSONData from "../data/resumeconfig.json"

const education = JSONData.education_section;

class RenderEducation extends Component {
    render() {
        return(
            <div>
                <h2>
                    {education.education_section_name}
                    </h2>
                {
                    education.subsection.map((subsection) => {
                        return(
                            <div>
                                <h3>
                                    {subsection.subsection_name}
                                    </h3>
                                <h4>
                                    {subsection.degree_name}
                                    </h4>
                                <p>
                                    {subsection.graduation_date}
                                    </p>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default RenderEducation;