import { Canvas, useFrame } from '@react-three/fiber';
import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';

function NeuralNetwork() {
    const pointsCount = 100;
    const maxDistance = 5.0;
    const groupRef = useRef<THREE.Group>(null!);
    const linesRef = useRef<THREE.LineSegments>(null!);
    const pointsRef = useRef<THREE.Points>(null!);

    const { positions, velocities, linePositions } = useMemo(() => {
        const positions = new Float32Array(pointsCount * 3);
        const velocities = [];
        for (let i = 0; i < pointsCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
            velocities.push(new THREE.Vector3(
                (Math.random() - 0.5) * 0.15,
                (Math.random() - 0.5) * 0.15,
                (Math.random() - 0.5) * 0.15
            ));
        }
        const maxLines = (pointsCount * (pointsCount - 1)) / 2;
        const linePositions = new Float32Array(maxLines * 6);
        
        return { positions, velocities, linePositions };
    }, []);

    useFrame((_, delta) => {
        const pArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
        let lineIndex = 0;
        const safeDelta = Math.min(delta, 0.1) * 0.2;

        for (let i = 0; i < pointsCount; i++) {
            pArray[i * 3] += velocities[i].x * safeDelta;
            pArray[i * 3 + 1] += velocities[i].y * safeDelta;
            pArray[i * 3 + 2] += velocities[i].z * safeDelta;

            if (pArray[i * 3] > 20 || pArray[i * 3] < -20) velocities[i].x *= -1;
            if (pArray[i * 3 + 1] > 20 || pArray[i * 3 + 1] < -20) velocities[i].y *= -1;
            if (pArray[i * 3 + 2] > 5 || pArray[i * 3 + 2] < -20) velocities[i].z *= -1;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        const lGeometry = linesRef.current.geometry;
        const lPosAttr = lGeometry.attributes.position as THREE.BufferAttribute;
        const lPosArray = lPosAttr.array as Float32Array;

        for (let i = 0; i < pointsCount; i++) {
            for (let j = i + 1; j < pointsCount; j++) {
                const dx = pArray[i * 3] - pArray[j * 3];
                const dy = pArray[i * 3 + 1] - pArray[j * 3 + 1];
                const dz = pArray[i * 3 + 2] - pArray[j * 3 + 2];
                const distSq = dx * dx + dy * dy + dz * dz;

                if (distSq < maxDistance * maxDistance) {
                    lPosArray[lineIndex++] = pArray[i * 3];
                    lPosArray[lineIndex++] = pArray[i * 3 + 1];
                    lPosArray[lineIndex++] = pArray[i * 3 + 2];
                    lPosArray[lineIndex++] = pArray[j * 3];
                    lPosArray[lineIndex++] = pArray[j * 3 + 1];
                    lPosArray[lineIndex++] = pArray[j * 3 + 2];
                }
            }
        }

        lPosAttr.needsUpdate = true;
        lGeometry.setDrawRange(0, lineIndex / 3);
        
        if (groupRef.current) {
            groupRef.current.rotation.y += safeDelta * 0.1;
            groupRef.current.rotation.x += safeDelta * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={pointsCount} array={positions} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial size={0.06} color="#4FD1C5" transparent opacity={0.5} sizeAttenuation />
            </points>
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
                </bufferGeometry>
                <lineBasicMaterial color="#7C3AED" transparent opacity={0.15} />
            </lineSegments>
        </group>
    );
}

export default function Background3D() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#070B14] overflow-hidden pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <fog attach="fog" args={['#070B14', 5, 20]} />
                <ambientLight intensity={0.5} />
                <React.Suspense fallback={null}>
                    <NeuralNetwork />
                </React.Suspense>
            </Canvas>
        </div>
    );
}
