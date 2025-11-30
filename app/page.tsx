"use client"

import React from "react";
import {Canvas} from '@react-three/fiber'
import Box from "@/components/Box";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center font-sans">
            <h1 className={"text-9xl font-extrabold text-green-500"}>
                HELLO WORLD
            </h1>
            <br/>
            <Canvas>
                <ambientLight intensity={Math.PI / 2}/>
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
                <Box position={[-1.2, 0, 0]}/>
                <Box position={[1.2, 0, 0]}/>
            </Canvas>
        </div>
    );
}
