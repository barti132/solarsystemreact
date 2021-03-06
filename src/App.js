import './App.css';

import React, {Suspense} from "react";

import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import {Planet} from "./Planet";

function Lights() {
    return (
        <>
            <ambientLight/>
            <pointLight position={[0, 0, 0]}/>
        </>
    )
}

function Planets() {
    return (
        <>
            <Planet position={[0, 0, 0]} size={5.6} rotationSpeed={0.0034} speed={0} zRadius={0} textureName={'2k_sun.jpg'} name={'Sun'}/>
            <Planet position={[10.7909, 0, 0]} size={0.19125} rotationSpeed={0.00145} speed={0.2} zRadius={8} textureName={'2k_mercury.jpg'}
                    name={'Mercury'}/>
            <Planet position={[15.8208, 0, 0]} size={0.47445} rotationSpeed={-0.00003} speed={0.125} zRadius={13}
                    textureName={'2k_venus_atmosphere.jpg'} name={'Venus'} />
            <Planet position={[19.9597, 0, 0]} size={0.5} rotationSpeed={0.085} speed={0.1} zRadius={17} textureName={'2k_earth_daymap.jpg'}
                    name={'Earth'}/>
            <Planet position={[27.7936, 0, 0]} size={0.26675} rotationSpeed={0.09} speed={0.025} zRadius={25} textureName={'2k_mars.jpg'}
                    name={'Mars'}/>
            <Planet position={[82.8412, 0, 0]} size={5.2} rotationSpeed={0.17} speed={0.0045} zRadius={78} textureName={'2k_jupiter.jpg'}
                    name={'Jupiter'}/>
            <Planet position={[147.6725, 0, 0]} size={4.7247} rotationSpeed={0.15} speed={0.0015} zRadius={140} textureName={'2k_saturn.jpg'}
                    name={'Saturn'}/>
            <Planet position={[292.0972, 0, 0]} size={2.0037} rotationSpeed={0.125} speed={0.0006} zRadius={280} textureName={'2k_uranus.jpg'}
                    name={'Uranus'}/>
            <Planet position={[454.8252, 0, 0]} size={1.94135} rotationSpeed={0.12} speed={0.00003} zRadius={440} textureName={'2k_neptune.jpg'}
                    name={'Neptune'}/>
        </>
    )
}

export default function App() {

    return (
        <div id="root">
            <Canvas camera={{fov: 75, position: [0, 0, 40]}}>
                <color attach="background" args={"black"}/>
                <Suspense fallback={null}>
                    <Stars radius={300} depth={50} count={5000} factor={10} saturation={0} fade/>
                    <Lights/>
                    <Planets/>
                    <OrbitControls/>
                </Suspense>

            </Canvas>
            <div id="planetInfo"></div>
        </div>
    )
}