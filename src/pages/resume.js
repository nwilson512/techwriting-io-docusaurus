import React from "react"
import ResumeEducation from "../components/ResumeEducation"
import ResumeSkills from "../components/ResumeSkills"
import ResumeExperience from "../components/ResumeExperience"
import Layout from '@theme/Layout';
import PrintPdf from "../components/PrintPdf";
// import PrintOther from "../components/PrintOther";
import ResumeAll from "../components/ResumeAll";

export default function render() {
    return(
        <>
            <Layout>
                <main class="container container--fluid margin-vert--lg">
                    <PrintPdf />
                    {/* <PrintOther /> */}
                    {/* <div class="row">
                        <div class="col col--10 col--offset-2 margin-bottom--md">
                        <h1 class="resume-title">
                            Nathaniel Wilson
                        </h1>
                    </div>
                    </div> */}
                    {/* <ResumeAll /> */}
                    {/* <ResumeExperience />
                    <ResumeEducation />
                    <ResumeSkills /> */}
                </main>
            </Layout>
        </>
    )
}