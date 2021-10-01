import ReactDOM from "react-dom";

export function Info(props) {

    let planetData;
    /*planetData = {
        id: 0,
        name: "",
        description: "",
        distanceFromSun: 0,
        mass: ""
    }*/

    console.log(props)
    fetch("http://localhost:8080/api/v1/planet/getByName/Sun" ).then((res) => {res.json()}).then((json) => {planetData = json.results})
    console.log(planetData)

    return (
        <div id="text">
                <h1>{props} <svg
                    onClick={(event => {
                        ReactDOM.render(<div></div>, document.getElementById("planetInfo"))
                    })}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="10" y1="10" x2="50" y2="50" stroke="red" strokeWidth="6"/>
                    <line x1="50" y1="10" x2="10" y2="50" stroke="red" strokeWidth="6"/>
                </svg></h1>

            {planetData}

        </div>
    )
}