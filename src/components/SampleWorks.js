import React, { Component } from "react"
// import SampleWorkData from "../data/sampleworksconfig.json"

// build a series of functions that display and make the sample works page interesting and interactive

// function SampleWorkCard() {
//     // take in data, remove hardcoded portions
//     return(
//         <div class="card-demo container">
//         <div class="card col col--8">
//             <div class="card__header">
//             <h3>
//                 test {SampleWorkData.title}
//             </h3>
//             </div>
//             <div class="card__body">
//             <p>
//                 test {SampleWorkData.description}
//             </p>
//             </div>
//             <div class="card__footer">
//             <button class="button button--secondary button--block">test {SampleWorkData.button}</button>
//             </div>
//         </div>
//         </div>
//     );
// }

function SampleWorkCard() {
    // take in data, remove hardcoded portions
    return(
        <div class="card-demo container">
            <div class="row">
        <div class="card col col--5 margin-right--lg margin-bottom--lg">
            <div class="card__header">
            <h3>
                Rock Paper Scissors API
            </h3>
            </div>
            <div class="card__body">
            <p>
            A functional API that allows users to play rock paper scissors against a computer and features a docs endpoint and script for generating reference documentation.
            </p>
            </div>
            <div class="card__footer">
                <a
                className="button button--secondary button--block"
                href="/docs/sample-works/api">
                See how it works
                </a>
            </div>

        </div>
        <div class="card col col--5 margin-right--lg margin-bottom--lg">
            <div class="card__header">
            <h3>
                Google Cloud Platform IaaS
            </h3>
            </div>
            <div class="card__body">
            <p>
                This permanent writing sample describes a method for deploying a static site onto Google Cloud Platform (GCP) at the infrastructure layer.
            </p>
            </div>
            <div class="card__footer">
            <a
                className="button button--secondary button--block"
                href="/docs/sample-works/create-a-statamic-web-server-on-google-cloud-platform/index">
                Check out the GCP sample
                </a>
            </div>
        </div>
        </div>
        <div class="row">
        <div class="card col col--5 margin-right--lg margin-bottom--lg">
            <div class="card__header">
            <h3>
                PX-Backup Documentation
            </h3>
            </div>
            <div class="card__body">
            <p>
            I planned and wrote version 1.0 individually.
            </p>
            <p>
            A new technical writer continues to make contributions to the documentation under my guidance. 
            </p>
            </div>
            <div class="card__footer">
            <a
                className="button button--secondary button--block"
                href="https://backup.docs.portworx.com">
                Visit the official docs
                </a>
            </div>
        </div>
        <div class="card col col--5 margin-right--lg margin-bottom--lg">
            <div class="card__header">
            <h3>
                Snapshot comparison methods
            </h3>
            </div>
            <div class="card__body">
            <p>
                This concept documentation describes how Portworx takes snapshots and compares them with those stored on the cloud. 
            </p>
            </div>
            <div class="card__footer">
            <a
                className="button button--secondary button--block"
                href="https://docs.portworx.com/portworx-install-with-kubernetes/storage-operations/create-snapshots/snapshot-methods/">
                Visit the official docs
                </a>
            </div>
        </div>
        </div>
        </div>
    );
}
export default SampleWorkCard;