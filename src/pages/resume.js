import React from "react"
import ResumeEducation from "../components/ResumeEducation"
import ResumeSkills from "../components/ResumeSkills"
import ResumeExperience from "../components/ResumeExperience"

export default function render() {
    return(
        <>
            <ResumeExperience />
            <ResumeEducation />
            <ResumeSkills />
        </>
    )
}