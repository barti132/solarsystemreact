import './App.css';

import React, {Suspense, useRef, useState} from "react";

import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import {TextureLoader} from "three";
import ReactDOM from "react-dom";

function Sphere(props) {
    const texture = useLoader(TextureLoader, props.texture);
    const [active, setActive] = useState(false);
    const ref = useRef();
    const {camera} = useThree();

    useFrame((state, delta) => (ref.current.rotation.y += 0.01));

    return (
        <mesh
            {...props}
            ref={ref}
            onClick={(e) => {
                camera.add(ref);
                const element = active ? (
                    <div id="text"><h1>Lorem ipsum dolor</h1> sit amet, consectetur adipiscing elit. Pellentesque vel ipsum ac
                        ligula rhoncus blandit. Aliquam tempus blandit iaculis. Phasellus non dignissim magna. Interdum
                        et malesuada fames ac ante ipsum primis in faucibus. Pellentesque a interdum odio. Vestibulum dignissim
                        sem a mi blandit, quis aliquet eros suscipit. Phasellus neque metus, tristique at diam a, malesuada
                        pharetra augue. Duis venenatis, lorem ut mattis tristique, tortor metus vestibulum felis, id hendrerit
                        felis nibh posuere sapien. Suspendisse quis lacus orci.
                        <h1>Phasellus vitae porta purus</h1>, a placerat leo. Fusce ultrices, dolor id sagittis ultricies, magna
                        lectus mattis nulla, sit amet pretium ante nunc ac lectus. Ut rutrum tellus nibh, nec malesuada
                        ante laoreet ac. Quisque id orci et libero egestas ultricies ut in sem. Pellentesque condimentum,
                        metus id posuere tempus, ipsum ipsum rhoncus risus, et congue ante nisi vitae mi. Cras dignissim
                        in ante et posuere. Vivamus molestie tortor id neque pretium, nec interdum nunc pulvinar. Vestibulum
                        vehicula felis eu nulla pulvinar tincidunt. Integer nibh sem, malesuada id ultrices accumsan, vulputate
                        eget nunc. Vivamus interdum elit et urna laoreet, et iaculis diam volutpat. Nulla eu laoreet quam,
                        in ultrices augue. Phasellus tempus egestas diam, id dignissim nibh. Donec tincidunt quis nisi id
                        interdum. Proin convallis tempor felis et viverra. Cras feugiat sollicitudin nisi.
                    </div>) : (<div></div>);
                setActive(!active);
                ReactDOM.render(element, document.getElementById("planetInfo"));
            }}
        >

            <sphereGeometry args={[props.size, 32, 32]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}

export default function App() {
    return (
        <div id="root">
            <Canvas>
                <color attach="background" args={"black"}/>
                <Suspense fallback={null}>
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
                    <ambientLight intensity={0.6}/>
                    <Sphere position={[0, 0, 0]} size={2} texture={'2k_sun.jpg'} name={'Sun'}/>
                    <Sphere position={[5, 0, 0]} size={1} texture={'2k_earth_daymap.jpg'} name={'Earth'}/>
                    <OrbitControls/>
                </Suspense>

            </Canvas>
            <div id="planetInfo"></div>
        </div>
    )
}