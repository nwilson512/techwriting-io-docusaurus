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
                    <div>
                        <h1 class="text--center hero__title">
                            Nathaniel Wilson
                        </h1>
                    </div>
                    <ResumeExperience />
                    <ResumeEducation />
                    <ResumeSkills />
                </main>
            </Layout>
        </>
    )
}