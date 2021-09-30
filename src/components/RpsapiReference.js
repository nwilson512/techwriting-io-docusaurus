import React, { Component } from "react"
import JSONData from "../data/apireference.json"

const apiData = JSONData.api_calls;

class RenderApiReference extends Component {
    render() {
        return(
            // wraps whole reference section
            <div>
                {
                    apiData.map((apiData) => {
                        return(
                            // wraps each endpoint
                            <div class="card margin-vert--lg padding--lg">
                                <h3>
                                    {apiData.endpoint}
                                </h3>
                                {
                                    apiData.data.map((item) => {
                                        return(
                                            // wrap individual endpoint data
                                            <div>
                                                <ul>
                                                    <li>
                                                        <strong>method:</strong> <code>{item.method}</code>
                                                    </li>
                                                    <li>
                                                        <strong>parameters:</strong> <code>{item.parameters}</code>
                                                    </li>
                                                    <li>
                                                    <strong>description:</strong> {item.description}
                                                    </li>
                                                </ul>
                                                <div>
                                                    <pre>
                                                    {item.example}
                                                    </pre>
                                                </div> 
                                            </div>
                                        );
                                    })
                                }

                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default RenderApiReference;