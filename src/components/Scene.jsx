import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const torusRef = useRef();
  const floatRef1 = useRef();
  const floatRef2 = useRef();
  const groupRef = useRef(); // For mouse parallax

  useFrame((state) => {
    // Mouse Parallax effect: gently rotate the entire scene based on cursor position
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (state.pointer.y * Math.PI) / 10, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.pointer.x * Math.PI) / 10, 0.05);
    }
  });

  useGSAP(() => {
    const triggerElement = document.getElementById('overlay-container');
    if (!triggerElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    if (torusRef.current) {
      tl.to(torusRef.current.rotation, {
        x: Math.PI * 4,
        y: Math.PI * 4,
        ease: "none"
      }, 0);

      // Torus starts at Z=0, goes past camera
      tl.fromTo(torusRef.current.position, 
        { z: 0 }, 
        { z: 12, ease: "power2.in" }, 
        0
      );
    }
    
    if (floatRef1.current) {
      tl.fromTo(floatRef1.current.position, 
        { z: -20, x: -6, y: 4 }, 
        { z: 8, x: -2, y: 0, ease: "none" }, 
        0
      );
      tl.to(floatRef1.current.rotation, { x: Math.PI * 2, y: Math.PI * 2, ease: "none" }, 0);
    }

    if (floatRef2.current) {
      tl.fromTo(floatRef2.current.position, 
        { z: -35, x: 6, y: -3 }, 
        { z: 5, x: 2, y: 2, ease: "none" }, 
        0
      );
      tl.to(floatRef2.current.rotation, { x: -Math.PI * 2, z: Math.PI * 2, ease: "none" }, 0);
    }
  }, []);

  return (
    <group ref={groupRef}>
      <Environment preset="city" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={torusRef} position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 200, 48]} />
          <MeshTransmissionMaterial 
            backside 
            thickness={1.5} 
            roughness={0.05} 
            transmission={1} 
            ior={1.2} 
            chromaticAberration={0.3} 
            anisotropy={0.1} 
            color="#FF8E8B"
            resolution={256}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={3}>
        <mesh ref={floatRef1} position={[-4, 3, -2]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#4ECDC4" roughness={0.1} metalness={0.2} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
        <mesh ref={floatRef2} position={[4, -2, -3]}>
          <icosahedronGeometry args={[1]} />
          <meshStandardMaterial color="#FFE66D" roughness={0.2} metalness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}
