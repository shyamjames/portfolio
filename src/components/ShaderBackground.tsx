"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FlyingShapes({ theme }: { theme: "light" | "dark" }) {
  const count = 150;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 100;
      const rx = Math.random() * Math.PI;
      const ry = Math.random() * Math.PI;
      const rz = Math.random() * Math.PI;
      const speed = 3 + Math.random() * 10;
      const scale = 0.2 + Math.random() * 0.4;
      temp.push({ x, y, z, rx, ry, rz, speed, scale });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    particles.forEach((particle, i) => {
      // Move towards the camera
      particle.z += particle.speed * delta;
      
      // Rotate shapes slowly
      particle.rx += delta * 0.2;
      particle.ry += delta * 0.3;

      // Reset when they pass the camera
      if (particle.z > 10) {
        particle.z = -90; // Send back to the horizon
        particle.x = (Math.random() - 0.5) * 60;
        particle.y = (Math.random() - 0.5) * 60;
      }

      dummy.position.set(particle.x, particle.y, particle.z);
      dummy.rotation.set(particle.rx, particle.ry, particle.rz);
      dummy.scale.set(particle.scale, particle.scale, particle.scale);
      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  const color = theme === "dark" ? "#14b8a6" : "#006666";

  return (
    <instancedMesh ref={meshRef} args={[null as any, null as any, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color={color} wireframe={true} transparent opacity={0.25} />
    </instancedMesh>
  );
}

export default function ShaderBackground() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check initial theme
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.hasAttribute("data-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setTheme(isDark ? "dark" : "light");

    // Observe changes to html data-theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const newTheme = document.documentElement.getAttribute("data-theme");
          setTheme(newTheme === "dark" ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Match the surface color of the theme so fog blends seamlessly
  const fogColor = theme === "dark" ? "#14181d" : "#E7E5E4";

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <fog attach="fog" args={[fogColor, 10, 80]} />
        <FlyingShapes theme={theme} />
      </Canvas>
    </div>
  );
}
