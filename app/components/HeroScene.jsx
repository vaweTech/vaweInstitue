// components/HeroScene.jsx
'use client' // Required for client-side libraries in Next.js App Router

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useTexture, useGLTF, Stars, Sparkles, ContactShadows } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

// --- 3D Element Components ---

// Technology coin data with unique properties
const TECHNOLOGY_COINS = [
  { name: 'AI', color: '#FF6B6B', emissive: '#FF1744', icon: '🤖', shape: 'octahedron', speed: 0.8, size: 1.2 },
  { name: 'Digital', color: '#4A90E2', emissive: '#2196F3', icon: '💻', shape: 'box', speed: 0.6, size: 1.0 },
  { name: 'Blockchain', color: '#9B59B6', emissive: '#9C27B0', icon: '⛓️', shape: 'torus', speed: 1.0, size: 1.1 },
  { name: 'Cloud', color: '#2ECC71', emissive: '#4CAF50', icon: '☁️', shape: 'sphere', speed: 0.4, size: 0.9 },
  { name: 'IoT', color: '#FFD700', emissive: '#FFC107', icon: '🌐', shape: 'cone', speed: 1.2, size: 1.3 },
  { name: 'AR/VR', color: '#E74C3C', emissive: '#F44336', icon: '🥽', shape: 'dodecahedron', speed: 0.7, size: 1.1 },
  { name: 'Cybersecurity', color: '#34495E', emissive: '#607D8B', icon: '🔒', shape: 'tetrahedron', speed: 0.9, size: 1.0 },
  { name: 'Data Science', color: '#E67E22', emissive: '#FF9800', icon: '📊', shape: 'icosahedron', speed: 0.5, size: 1.2 }
]


// Function to create a technology coin in a ring flow
function TechnologyCoin({ tech, index, totalCoins, ringRadius = 4, flowSpeed = 0.5 }) {
  const meshRef = useRef()
  const groupRef = useRef()
  
  // Calculate position in ring
  const angle = (index / totalCoins) * Math.PI * 2
  const baseX = Math.cos(angle) * ringRadius
  const baseZ = Math.sin(angle) * ringRadius
  
  // Try to load GLTF model, fallback to basic geometry
  let scene = null
  let texture = null
  
  try {
    if (tech.gltfPath) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const gltf = useGLTF(tech.gltfPath)
      scene = gltf.scene
    }
  } catch (error) {
    console.log('GLTF model not found, using fallback geometry')
  }
  
  // Load texture if provided
  if (tech.texturePath) {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      texture = useTexture(tech.texturePath)
    } catch (error) {
      console.log('Texture not found, using default material')
    }
  }

  // Create enhanced material for technology
  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.95,
      roughness: 0.05,
      color: texture ? undefined : tech.color,
      emissive: new THREE.Color(tech.emissive).multiplyScalar(0.3),
      envMapIntensity: 3.0,
    })
  }, [texture, tech.color, tech.emissive])

  useFrame((state, delta) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      
      // Unique ring flow animation with individual speeds
      const flowAngle = angle + (time * flowSpeed * tech.speed)
      groupRef.current.position.x = Math.cos(flowAngle) * ringRadius
      groupRef.current.position.z = Math.sin(flowAngle) * ringRadius
      
      // Unique vertical floating patterns
      const floatPattern = Math.sin(time * 0.8 + index) * 0.3 + 
                          Math.sin(time * 1.2 + index * 0.5) * 0.15 +
                          Math.sin(time * 0.4 + index * 0.3) * 0.1
      groupRef.current.position.y = 0.5 + floatPattern
      
      // Unique rotation patterns based on shape
      if (meshRef.current) {
        meshRef.current.rotation.y += delta * (tech.speed * 0.8)
        meshRef.current.rotation.x = Math.sin(time * 0.5 + index) * 0.2
        meshRef.current.rotation.z = Math.sin(time * 0.3 + index * 0.7) * 0.15
        
        // Shape-specific rotation behaviors
        if (tech.shape === 'torus') {
          meshRef.current.rotation.x += delta * 0.5
        } else if (tech.shape === 'octahedron') {
          meshRef.current.rotation.z += delta * 0.3
        } else if (tech.shape === 'dodecahedron') {
          meshRef.current.rotation.x += delta * 0.2
          meshRef.current.rotation.z += delta * 0.2
        }
      }
      
      // Dynamic group rotation
      groupRef.current.rotation.y += delta * (0.3 + index * 0.05)
      
      // Scale pulsing based on technology
      const scale = tech.size + Math.sin(time * 0.6 + index) * 0.1
      groupRef.current.scale.setScalar(scale)
    }
  })

  // Use GLTF model if available
  if (scene) {
    return (
      <group ref={groupRef}>
        <primitive 
          ref={meshRef} 
          object={scene.clone()} 
          rotation={[Math.PI / 2, 0, 0]} // Rotate 90 degrees around X-axis to make coin vertical
          scale={1.2}
        />
        <Sparkles 
          count={25} 
          scale={2.5} 
          size={2.5} 
          speed={0.6} 
          color={tech.color}
        />
      </group>
    )
  }

  // Create unique geometry based on shape
  const getGeometry = () => {
    switch (tech.shape) {
      case 'octahedron':
        return <octahedronGeometry args={[0.6]} />
      case 'box':
        return <boxGeometry args={[0.8, 0.8, 0.2]} />
      case 'torus':
        return <torusGeometry args={[0.4, 0.2, 16, 32]} />
      case 'sphere':
        return <sphereGeometry args={[0.5, 16, 16]} />
      case 'cone':
        return <coneGeometry args={[0.5, 0.8, 16]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.5]} />
      case 'tetrahedron':
        return <tetrahedronGeometry args={[0.6]} />
      case 'icosahedron':
        return <icosahedronGeometry args={[0.5]} />
      default:
        return <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
    }
  }

  // Fallback to unique geometry
  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} rotation={[Math.PI / 2, 0, 0]}>
        {getGeometry()}
        <primitive object={material} />
      </mesh>
      <Sparkles 
        count={25 + index * 5} 
        scale={2.5 + index * 0.2} 
        size={2.5 + index * 0.1} 
        speed={0.6 + index * 0.1} 
        color={tech.color}
      />
    </group>
  )
}

// Function to create a flowing ribbon using GLTF model or fallback geometry
function RibbonModel({ gltfPath, texturePath, color = '#FF6B6B' }) {
  const meshRef = useRef()
  const groupRef = useRef()
  
  // Try to load GLTF model, fallback to basic geometry
  let scene = null
  let texture = null
  
  try {
    if (gltfPath) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const gltf = useGLTF(gltfPath)
      scene = gltf.scene
    }
  } catch (error) {
    console.log('GLTF ribbon model not found, using fallback geometry')
  }
  
  // Load texture if provided
  if (texturePath) {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      texture = useTexture(texturePath)
    } catch (error) {
      console.log('Ribbon texture not found, using default material')
    }
  }

  // Create enhanced ribbon material
  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.3,
      roughness: 0.4,
      color: texture ? undefined : color,
      transparent: true,
      opacity: 0.9,
      emissive: new THREE.Color(color).multiplyScalar(0.2),
      envMapIntensity: 1.5,
    })
  }, [texture, color])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      
      // Enhanced flowing animation with wave motion
      meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.15 + Math.sin(time * 0.8) * 0.05
      meshRef.current.position.y = Math.sin(time * 0.3) * 0.3 + Math.sin(time * 0.7) * 0.1
      
      // Add subtle rotation for more dynamic movement
      meshRef.current.rotation.x = Math.sin(time * 0.4) * 0.1
    }
    
    // Rotate the entire group slowly
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  // Use GLTF model if available
  if (scene) {
    return (
      <group ref={groupRef}>
        <primitive 
          ref={meshRef} 
          object={scene.clone()}
        />
        <Sparkles 
          count={15} 
          scale={3} 
          size={1.5} 
          speed={0.3} 
          color={color}
        />
      </group>
    )
  }

  // Fallback to basic geometry
  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <planeGeometry args={[4, 0.5, 32, 8]} />
        <primitive object={material} />
      </mesh>
      <Sparkles 
        count={15} 
        scale={3} 
        size={1.5} 
        speed={0.3} 
        color={color}
      />
    </group>
  )
}

// --- Main Scene Setup ---

export default function HeroScene() {
  return (
    // The Canvas element is the WebGL viewport
    <Canvas 
      className="" // Background handled via theme gradient
      style={{ background: 'linear-gradient(135deg, var(--navbar-hero), var(--background-alt) 60%, var(--navbar-hero))' }}
      camera={{ position: [0, 1, 5], fov: 60 }}
      shadows
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
    >
      {/* Dynamic Lighting Setup */}
      <ambientLight intensity={0.3} color="#4A90E2" />
      
      {/* Main spotlight with enhanced properties */}
      <spotLight 
        position={[10, 15, 10]} 
        angle={0.3} 
        penumbra={1} 
        intensity={3000} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        color="#FFFFFF"
      />
      
      {/* Dynamic rim lighting that changes over time */}
      <pointLight position={[-10, 5, -5]} intensity={1000} color="#FF6B6B" />
      <pointLight position={[10, 5, -5]} intensity={1000} color="#4A90E2" />
      <pointLight position={[0, 8, -8]} intensity={800} color="#9B59B6" />
      <pointLight position={[-8, 6, 8]} intensity={800} color="#2ECC71" />
      
      {/* Atmospheric lighting */}
      <directionalLight position={[0, 10, 0]} intensity={0.5} color="#FFD700" />
      
      {/* Technology-specific lighting */}
      {TECHNOLOGY_COINS.map((tech, index) => {
        const angle = (index / TECHNOLOGY_COINS.length) * Math.PI * 2
        const x = Math.cos(angle) * 6
        const z = Math.sin(angle) * 6
        
        return (
          <pointLight
            key={`tech-light-${tech.name}`}
            position={[x, 3, z]}
            intensity={500 + index * 100}
            color={tech.color}
            distance={10}
            decay={2}
          />
        )
      })}
      
      {/* Environment Map - Enhanced for better reflections */}
      <Environment preset="night" background={false} />
      
      {/* Atmospheric Effects */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      {/* Contact shadows for depth */}
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.4} 
        scale={20} 
        blur={2} 
        far={4.5} 
      />

      {/* 3D Assets - Technology Ring Flow */}
      
      {/* 1. The Dynamic Ribbon */}
      <RibbonModel 
        gltfPath="/models/ribbon.glb" 
        texturePath="/models/ribbon.jpg"
        color="#FF6B6B"
      />
      
      {/* 2. Technology Coins in Horizontal Ring Flow */}
      {TECHNOLOGY_COINS.map((tech, index) => (
        <TechnologyCoin
          key={tech.name}
          tech={tech}
          index={index}
          totalCoins={TECHNOLOGY_COINS.length}
          ringRadius={4.5}
          flowSpeed={0.3}
        />
      ))}
      
      {/* 2.5. Unique Particle Effects */}
      {TECHNOLOGY_COINS.map((tech, index) => {
        const angle = (index / TECHNOLOGY_COINS.length) * Math.PI * 2
        const x = Math.cos(angle) * 4.5
        const z = Math.sin(angle) * 4.5
        
        return (
          <Sparkles
            key={`particles-${tech.name}`}
            position={[x, 0.5, z]}
            count={50 + index * 10}
            scale={3 + index * 0.5}
            size={3 + index * 0.2}
            speed={0.8 + index * 0.1}
            color={tech.color}
          />
        )
      })}
      
      {/* 3. Central Hub with Enhanced Lighting */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color="#FFFFFF"
          emissive="#FFFFFF"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      
      {/* 5. Rotating Ring Base */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <torusGeometry args={[4.5, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#FFFFFF"
          emissive="#FFFFFF"
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>

    </Canvas>
  )
}