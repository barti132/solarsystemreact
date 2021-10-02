import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";
import {TextureLoader} from "three";
import React, {useRef, useState} from "react";
import {Html} from "@react-three/drei";
import ReactDOM from "react-dom";
import axios from "axios";

export function Planet(props) {
    const texture = useLoader(TextureLoader, props.texture)
    const ref = useRef()
    const [data, setData] = useState("")

    useFrame(({clock}) => {
        const time = clock.getElapsedTime() * props.speed
        const x = props.position[0] * Math.sin(time)
        const z = props.zRadius * Math.cos(time)
        ref.current.position.x = x
        ref.current.position.z = z
        ref.current.rotation.y += props.rotationSpeed
    })

    return (
        <>
            <mesh
                {...props}
                ref={ref}
                onClick={async () => {
                    axios.get("http://localhost:8080/api/v1/planet/getByName/" + props.name)
                        .then((response) => setData(response.data));

                    const element =
                        (<div id="text">
                            <h1>{data.name} <svg
                                onClick={(event => {
                                    ReactDOM.render(<div></div>, document.getElementById("planetInfo"))
                                })}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="10" y1="10" x2="50" y2="50" stroke="red" strokeWidth="6"/>
                                <line x1="50" y1="10" x2="10" y2="50" stroke="red" strokeWidth="6"/>
                            </svg></h1>
                            <h2>Mass: {data.mass}</h2>
                            <h2>Distance from the Sun: {data.distanceFromSun}</h2>
                            <h2>Info:</h2>
                            {data.description}
                        </div>);

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
    const ref = useRef()
    const [data, setData] = useState("")

    useFrame(({clock}) => {
        const time = clock.getElapsedTime() * props.speed
        const x = props.position[0] * Math.sin(time)
        const z = props.zRadius * Math.cos(time)
        ref.current.position.x = x
        ref.current.position.z = z
        ref.current.rotation.y += props.rotationSpeed
    })

    return (
        <>
            <mesh
                {...props}
                ref={ref}
                onClick={() => {
                    axios.get("http://localhost:8080/api/v1/planet/getByName/" + props.name)
                        .then((response) => setData(response.data));

                    const element =
                        (<div id="text">
                            <h1>{data.name} <svg
                                onClick={(event => {
                                    ReactDOM.render(<div></div>, document.getElementById("planetInfo"))
                                })}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="10" y1="10" x2="50" y2="50" stroke="red" strokeWidth="6"/>
                                <line x1="50" y1="10" x2="10" y2="50" stroke="red" strokeWidth="6"/>
                            </svg></h1>
                            <h2>Mass: {data.mass}</h2>
                            <h2>Distance from the Sun: {data.distanceFromSun}</h2>
                            <h2>Info:</h2>
                            {data.description}
                        </div>);

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