import React from "react"
import ResumeEducation from "../components/ResumeEducation"
import ResumeSkills from "../components/ResumeSkills"
import ResumeExperience from "../components/ResumeExperience"
import Layout from '@theme/Layout';

export default function render() {
    return(
        <>
            <Layout>
                <main class="container container--fluid margin-vert--lg">
                    <div class="row">
                        <div class="col col--10 col--offset-2">
                        <h1 class="resume-title">
                            Nathaniel Wilson
                        </h1>
                    </div>
                    </div>
                    <ResumeExperience />
                    <ResumeEducation />
                    <ResumeSkills />
                </main>
            </Layout>
        </>
    )
}