import ReactDOM from "react-dom";

export function Info(props) {

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


            <h2>Lorem ipsum dolor</h2>
            sit amet, consectetur adipiscing elit. Pellentesque
            vel ipsum ac ligula rhoncus blandit. Aliquam tempus blandit iaculis. Phasellus non dignissim magna.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque a interdum odio.
            Vestibulum dignissim sem a mi blandit, quis aliquet eros suscipit. Phasellus neque metus, tristique at diam
            a,
            malesuada pharetra augue. Duis venenatis, lorem ut mattis tristique, tortor metus vestibulum felis, id
            hendrerit felis nibh posuere sapien. Suspendisse quis lacus orci.
            <h2>Phasellus vitae porta purus</h2>
            , a placerat leo. Fusce ultrices, dolor id sagittis
            ultricies, magna lectus mattis nulla, sit amet pretium ante nunc ac lectus. Ut rutrum tellus nibh, nec
            malesuada ante laoreet ac. Quisque id orci et libero egestas ultricies ut in sem. Pellentesque
            condimentum, metus id posuere tempus, ipsum ipsum rhoncus risus, et congue ante nisi vitae mi. Cras
            dignissim in ante et posuere. Vivamus molestie tortor id neque pretium, nec interdum nunc pulvinar.
            Vestibulum vehicula felis eu nulla pulvinar tincidunt. Integer nibh sem, malesuada id ultrices
            accumsan, vulputate eget nunc. Vivamus interdum elit et urna laoreet, et iaculis diam volutpat. Nulla eu
            laoreet
            quam, in ultrices augue. Phasellus tempus egestas diam, id dignissim nibh. Donec tincidunt quis
            nisi id interdum. Proin convallis tempor felis et viverra. Cras feugiat sollicitudin nisi.
        </div>
    )
}