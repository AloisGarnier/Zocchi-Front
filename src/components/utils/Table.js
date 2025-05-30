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
                <tr>
                    {headingDisplay}
                </tr>
            </thead>
        )
    }

    function data() {
        let dataDisplay = []
        for(let row in props.data) {
            let rowDisplay = row.map((r) => <td>{r}</td>)
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