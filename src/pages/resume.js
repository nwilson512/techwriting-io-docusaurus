import React from "react"
import ResumeRender from "../components/ResumeRender"
import ResumeEducation from "../components/ResumeEducation"
import ResumeSkills from "../components/ResumeSkills"
import ResumeExperience from "../components/ResumeExperience"

export default function render() {
    return(
        <>
            <ResumeEducation />
            <ResumeSkills />
            <ResumeExperience />
        </>
    )
}