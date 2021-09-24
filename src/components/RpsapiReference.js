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
                            <div>
                                <strong>
                                    {apiData.endpoint}
                                </strong>
                                {
                                    apiData.data.map((item) => {
                                        return(
                                            // wrap individual endpoint data
                                            <div>
                                                <ul>
                                                    <li>
                                                        method: <code>{item.method}</code>
                                                    </li>
                                                    <li>
                                                        parameters: <code>{item.parameters}</code>
                                                    </li>
                                                    <li>
                                                        description: {item.description}
                                                    </li>
                                                </ul>
                                                <div>
                                                    {item.example}
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