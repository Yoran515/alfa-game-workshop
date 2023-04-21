import { useState } from "react";
import "./App.css";
import { Box } from "@react-three/drei";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Stage() {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Box>
    </>
  );
}

function App() {
  const [show, setShow] = useState(0);

  return (
    <>
      <button onClick={() => setShow((show) => !show)}>Click me</button>
      <Canvas
        camera={{
          position: [0, 2, 10],
          fov: 75,
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {show && <Stage />}
      </Canvas>
    </>
  );
}
export default App;