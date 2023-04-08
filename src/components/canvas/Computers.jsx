import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./cyberpunk_desk/scene.gltf');
  return (
    //threejs element
    <mesh>
      {/* adding light */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* 3d object */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [3.25, -2.0, 3.5] : [4.85, -2.75, 5.5]}
        rotation={[-0.01, -0.1, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //Add listener for changes to screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    //set initial value of isMobile state variable
    setIsMobile(mediaQuery.matches);

    //Define callback function to handle changes to media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    //Canvas
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [0, 3, 5], fov: 55 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Canvas Loader */}
      <Suspense fallback={<CanvasLoader />}>
        {/* 3D object Control */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        {/* 3d object */}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
