import React from "react";
import ReactDOM from "react-dom";

export class InfoBox extends React.Component {

    state = {
        data: [],
    };

    componentDidMount() {
        const apiURI = "http://localhost:8080/api/v1/planet/getByName/" + this.props.name

        fetch(apiURI)
            .then((res) => res.json())
            .then((json) => this.setState({data: json}));
    }

    render() {
        return (
            <div>
                {
                    this.state.data ?<PlanetInfo data={this.state.data}/> : <LoadingBox/>
                }
            </div>
        );
    }
}

function PlanetInfo(data) {
    
    return (<div id="text">
        <h1>{data.data.name} <svg
            onClick={(event => {
                ReactDOM.render(<div></div>, document.getElementById("planetInfo"))
            })}
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="10" y1="10" x2="50" y2="50" stroke="red" strokeWidth="6"/>
            <line x1="50" y1="10" x2="10" y2="50" stroke="red" strokeWidth="6"/>
        </svg></h1>
        <h2>Mass: {data.data.mass}</h2>
        <h2>Distance from the Sun: {data.data.distanceFromSun}</h2>
        <h2>Info:</h2>
        {data.data.description}
    </div>);
}

function LoadingBox(){
    return (<div id="text">
        <h1>Loading <svg
            onClick={(event => {
                ReactDOM.render(<div></div>, document.getElementById("planetInfo"))
            })}
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="10" y1="10" x2="50" y2="50" stroke="red" strokeWidth="6"/>
            <line x1="50" y1="10" x2="10" y2="50" stroke="red" strokeWidth="6"/>
        </svg></h1>
    </div>);
}