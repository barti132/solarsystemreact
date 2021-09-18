import './App.css';

import React, {Suspense, useRef, useState} from "react";

import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {Html, OrbitControls, Stars} from "@react-three/drei";
import {TextureLoader} from "three";
import ReactDOM from "react-dom";

function Sphere(props) {
    const texture = useLoader(TextureLoader, props.texture)
    const [active, setActive] = useState(false)
    const ref = useRef()

    useFrame((state, delta) => (ref.current.rotation.y += 0.01))

    return (
        <mesh
            {...props}
            ref={ref}
            onClick={(e) => {
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
                    </div>) : (<div></div>)
                setActive(!active)
                ReactDOM.render(element, document.getElementById("planetInfo"))
            }}
        >
            <Html distanceFactor={15}>
                <div id="annotation">{props.name}</div>
            </Html>
            <sphereGeometry args={[props.size, 32, 32]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}

function Lights(){
    return(
        <>
            <ambientLight/>
            <pointLight position={[0, 0, 0]} />
        </>)
}

function Planets(){
    return(
        <>
            <Sphere position={[0, 0, 0]} size={5.45} texture={'2k_sun.jpg'} name={'Sun'}/>
            <Sphere position={[15, 0, 0]} size={0.19125} texture={'2k_mercury.jpg'} name={'Mercury'}/>
            <Sphere position={[20, 0, 0]} size={0.47445} texture={'2k_venus_atmosphere.jpg'} name={'Venus'}/>
            <Sphere position={[25, 0, 0]} size={0.5} texture={'2k_earth_daymap.jpg'} name={'Earth'}/>
            <Sphere position={[30, 0, 0]} size={0.26675} texture={'2k_mars.jpg'} name={'Mars'}/>
            <Sphere position={[45, 0, 0]} size={5.6046} texture={'2k_jupiter.jpg'} name={'Jupiter'}/>
            <Sphere position={[65, 0, 0]} size={4.7247} texture={'2k_saturn.jpg'} name={'Saturn'}/>
            <Sphere position={[80, 0, 0]} size={2.0037} texture={'2k_uranus.jpg'} name={'Uranus'}/>
            <Sphere position={[95, 0, 0]} size={1.94135} texture={'2k_neptune.jpg'} name={'Neptune'}/>
        </>
    )
}

export default function App() {
    return (
        <div id="root">
            <Canvas camera={{fov: 75, position: [0,0,40]}}>
                <color attach="background" args={"black"}/>
                <Suspense fallback={null}>
                    <Stars radius={250} depth={50} count={5000} factor={10} saturation={0} fade />
                    <Lights/>
                    <Planets/>
                    <OrbitControls/>
                </Suspense>

            </Canvas>
            <div id="planetInfo"></div>
        </div>
    )
}