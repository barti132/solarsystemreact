import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";
import {TextureLoader} from "three";
import React, {useRef, useState} from "react";
import ReactDOM from "react-dom";
import {Html} from "@react-three/drei";

export function Planet(props) {
    const texture = useLoader(TextureLoader, props.texture)
    const [active, setActive] = useState(false)
    const ref = useRef()

    useFrame(({clock}) => {
        const time = clock.getElapsedTime() * props.speed
        const x = props.position[0] * Math.sin(time)
        const z = props.zRadius * Math.cos(time)
        ref.current.position.x = x
        ref.current.position.z = z
        ref.current.rotation.y += props.rotationSpeed;
    })

    return (
        <>
            <mesh
                {...props}
                ref={ref}
                onClick={(e) => {
                    const element = active ? (
                        <div id="text"><h1>Lorem ipsum dolor</h1> sit amet, consectetur adipiscing elit. Pellentesque
                            vel ipsum ac
                            ligula rhoncus blandit. Aliquam tempus blandit iaculis. Phasellus non dignissim magna.
                            Interdum
                            et malesuada fames ac ante ipsum primis in faucibus. Pellentesque a interdum odio.
                            Vestibulum dignissim
                            sem a mi blandit, quis aliquet eros suscipit. Phasellus neque metus, tristique at diam a,
                            malesuada
                            pharetra augue. Duis venenatis, lorem ut mattis tristique, tortor metus vestibulum felis, id
                            hendrerit
                            felis nibh posuere sapien. Suspendisse quis lacus orci.
                            <h1>Phasellus vitae porta purus</h1>, a placerat leo. Fusce ultrices, dolor id sagittis
                            ultricies, magna
                            lectus mattis nulla, sit amet pretium ante nunc ac lectus. Ut rutrum tellus nibh, nec
                            malesuada
                            ante laoreet ac. Quisque id orci et libero egestas ultricies ut in sem. Pellentesque
                            condimentum,
                            metus id posuere tempus, ipsum ipsum rhoncus risus, et congue ante nisi vitae mi. Cras
                            dignissim
                            in ante et posuere. Vivamus molestie tortor id neque pretium, nec interdum nunc pulvinar.
                            Vestibulum
                            vehicula felis eu nulla pulvinar tincidunt. Integer nibh sem, malesuada id ultrices
                            accumsan, vulputate
                            eget nunc. Vivamus interdum elit et urna laoreet, et iaculis diam volutpat. Nulla eu laoreet
                            quam,
                            in ultrices augue. Phasellus tempus egestas diam, id dignissim nibh. Donec tincidunt quis
                            nisi id
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
            <Ellipse xRadius={props.position[0]} zRadius={props.zRadius}/>
        </>
    )
}

export function Saturn(props) {
    const texture = useLoader(TextureLoader, props.texture)
    const ringTexture = useLoader(TextureLoader, "2k_saturn_ring_alpha.png")
    const [active, setActive] = useState(false)
    const ref = useRef()

    useFrame(({clock}) => {
        const time = clock.getElapsedTime() * props.speed
        const x = props.position[0] * Math.sin(time)
        const z = props.zRadius * Math.cos(time)
        ref.current.position.x = x
        ref.current.position.z = z
        ref.current.rotation.y += props.rotationSpeed;
    })

    return (
        <>
            <mesh
                {...props}
                ref={ref}
                onClick={(e) => {
                    const element = active ? (
                        <div id="text"><h1>Lorem ipsum dolor</h1> sit amet, consectetur adipiscing elit. Pellentesque
                            vel ipsum ac
                            ligula rhoncus blandit. Aliquam tempus blandit iaculis. Phasellus non dignissim magna.
                            Interdum
                            et malesuada fames ac ante ipsum primis in faucibus. Pellentesque a interdum odio.
                            Vestibulum dignissim
                            sem a mi blandit, quis aliquet eros suscipit. Phasellus neque metus, tristique at diam a,
                            malesuada
                            pharetra augue. Duis venenatis, lorem ut mattis tristique, tortor metus vestibulum felis, id
                            hendrerit
                            felis nibh posuere sapien. Suspendisse quis lacus orci.
                            <h1>Phasellus vitae porta purus</h1>, a placerat leo. Fusce ultrices, dolor id sagittis
                            ultricies, magna
                            lectus mattis nulla, sit amet pretium ante nunc ac lectus. Ut rutrum tellus nibh, nec
                            malesuada
                            ante laoreet ac. Quisque id orci et libero egestas ultricies ut in sem. Pellentesque
                            condimentum,
                            metus id posuere tempus, ipsum ipsum rhoncus risus, et congue ante nisi vitae mi. Cras
                            dignissim
                            in ante et posuere. Vivamus molestie tortor id neque pretium, nec interdum nunc pulvinar.
                            Vestibulum
                            vehicula felis eu nulla pulvinar tincidunt. Integer nibh sem, malesuada id ultrices
                            accumsan, vulputate
                            eget nunc. Vivamus interdum elit et urna laoreet, et iaculis diam volutpat. Nulla eu laoreet
                            quam,
                            in ultrices augue. Phasellus tempus egestas diam, id dignissim nibh. Donec tincidunt quis
                            nisi id
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
                <SaturnRing position={[props.position[0], 0, props.position[2]]} texture={ringTexture}/>
            </mesh>
            <Ellipse xRadius={props.position[0]} zRadius={props.zRadius}/>

        </>
    )
}

function SaturnRing(props) {
    const ref = new THREE.TorusGeometry(6, 0.5, 64, 64)
    ref.rotateX(Math.PI / 2)
    ref.position = new THREE.Vector3(props.position[0], 0, props.position[2])

    return (
        <mesh geometry={ref}>
            <meshStandardMaterial map={props.texture}/>
        </mesh>
    )
}

function Ellipse({xRadius = 1, zRadius = 1}) {
    const points = []

    for (let i = 0; i < 64; i++) {
        const angle = (i / 64) * 2 * Math.PI
        const x = xRadius * Math.cos(angle)
        const z = zRadius * Math.sin(angle)
        points.push(new THREE.Vector3(x, 0, z))
    }
    points.push(points[0])

    const ellipse = new THREE.BufferGeometry().setFromPoints(points)


    return (
        <line geometry={ellipse}>
            <lineBasicMaterial attach="material" color="#bfbbda" linewidth={10}/>
        </line>
    )
}