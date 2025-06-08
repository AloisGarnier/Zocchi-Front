import React from "react"

/**
 * 
 * @param {*} props : heading, data
 * @returns 
 */
export default function Table(props) {

    function heading() {
        let headingDisplay = props.heading.map((h) => <th scope="col">{h}</th>)
        return(
            <thead>
                <tr class="table-active">
                    {headingDisplay}
                </tr>
            </thead>
        )
    }

    function data() {
        let dataDisplay = []
        for(let i=0; i< props.data.length; i++) {
            let rowDisplay = props.data[i].map((r) => <td>{r}</td>)
            dataDisplay.push(
                <tr class="table-light">
                    {rowDisplay}
                </tr>
            )
        }
        return(
            <tbody>
                {dataDisplay}
            </tbody>
        )
    }

    return(
        <table class="table table-hover">
            {heading()}
            {data()}
        </table>
    )
}