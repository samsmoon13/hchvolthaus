import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { 
  Compass, 
  Scissors, 
  Eye, 
  Grid3x3, 
  Box, 
  Maximize2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import * as THREE from "three";

interface HouseModelProps {
  sectionX: number;
  sectionY: number;
  sectionZ: number;
  wireframe: boolean;
  transparency: number;
  exploded: boolean;
  autoRotate: boolean;
}

function HouseModel({ 
  sectionX, 
  sectionY, 
  sectionZ, 
  wireframe, 
  transparency,
  exploded,
  autoRotate
}: HouseModelProps) {
  const groupRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const { scene } = useThree();

  // Setup clipping planes - disabled for now to avoid THREE import
  const clippingPlanes = useMemo(() => {
    return [];
  }, [sectionX, sectionY, sectionZ]);

  useFrame(() => {
    if (groupRef.current && !hovered && autoRotate) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  // Material properties
  const materialProps = {
    wireframe,
    transparent: transparency < 1,
    opacity: transparency,
    clippingPlanes,
    clipShadows: true,
  };

  const explodeOffset = exploded ? 0.5 : 0;

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Main House Body */}
      <mesh position={[0, 1 + explodeOffset * 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#f5f5f5" {...materialProps} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2.5 + explodeOffset * 2, 0]} castShadow>
        <coneGeometry args={[2.3, 1.5, 4]} />
        <meshStandardMaterial color="#001960" {...materialProps} />
      </mesh>

      {/* Door */}
      <mesh position={[0, 0.5, 1.51 + explodeOffset * 0.3]}>
        <boxGeometry args={[0.6, 1.2, 0.05]} />
        <meshStandardMaterial color="#001960" {...materialProps} />
      </mesh>

      {/* Windows - Left */}
      <mesh position={[-0.8, 1.2, 1.51 + explodeOffset * 0.3]}>
        <boxGeometry args={[0.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#87ceeb" {...materialProps} />
      </mesh>

      {/* Windows - Right */}
      <mesh position={[0.8, 1.2, 1.51 + explodeOffset * 0.3]}>
        <boxGeometry args={[0.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#87ceeb" {...materialProps} />
      </mesh>

      {/* Side Window - Left */}
      <mesh position={[-1.51 - explodeOffset * 0.3, 1.2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#87ceeb" {...materialProps} />
      </mesh>

      {/* Side Window - Right */}
      <mesh position={[1.51 + explodeOffset * 0.3, 1.2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#87ceeb" {...materialProps} />
      </mesh>

      {/* Chimney */}
      <mesh position={[1, 3 + explodeOffset * 1.5, -0.5]} castShadow>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#001960" {...materialProps} />
      </mesh>

      {/* Base/Foundation */}
      <mesh position={[0, -0.1 - explodeOffset * 0.3, 0]} receiveShadow>
        <boxGeometry args={[3.5, 0.2, 3.5]} />
        <meshStandardMaterial color="#5a6c84" {...materialProps} />
      </mesh>

      {/* Garage */}
      <mesh position={[3 + explodeOffset, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 1.6, 2.5]} />
        <meshStandardMaterial color="#e8ecf2" {...materialProps} />
      </mesh>

      {/* Garage Roof */}
      <mesh position={[3 + explodeOffset, 1.8 + explodeOffset * 0.5, 0]} castShadow>
        <boxGeometry args={[2.2, 0.2, 2.7]} />
        <meshStandardMaterial color="#001960" {...materialProps} />
      </mesh>

      {/* Garage Door */}
      <mesh position={[3 + explodeOffset, 0.8, 1.26 + explodeOffset * 0.2]}>
        <boxGeometry args={[1.5, 1.4, 0.05]} />
        <meshStandardMaterial color="#5a6c84" {...materialProps} />
      </mesh>
    </group>
  );
}

type ViewPreset = "north" | "south" | "east" | "west" | "top" | "isometric" | "free";

interface CameraControllerProps {
  view: ViewPreset;
  onViewComplete: () => void;
}

function CameraController({ view, onViewComplete }: CameraControllerProps) {
  const { camera } = useThree();
  const controlsRef = useRef<any>();
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetPosition, setTargetPosition] = useState<{ x: number; y: number; z: number } | null>(null);
  const previousView = useRef<ViewPreset>(view);

  // When view changes, set up the animation
  if (previousView.current !== view && view !== "free") {
    previousView.current = view;
    setIsAnimating(true);
    
    const distance = 10;
    const frontViewHeight = 1.5; // Eye level for front views
    let newTarget = { x: 6, y: 4, z: 8 };

    switch (view) {
      case "north":
        newTarget = { x: 0, y: frontViewHeight, z: distance };
        break;
      case "south":
        newTarget = { x: 0, y: frontViewHeight, z: -distance };
        break;
      case "east":
        newTarget = { x: distance, y: frontViewHeight, z: 0 };
        break;
      case "west":
        newTarget = { x: -distance, y: frontViewHeight, z: 0 };
        break;
      case "top":
        newTarget = { x: 0, y: distance, z: 0.001 };
        break;
      case "isometric":
        newTarget = { x: 6, y: 4, z: 8 };
        break;
    }
    
    setTargetPosition(newTarget);
  }

  useFrame(() => {
    if (!controlsRef.current || !isAnimating || !targetPosition) return;

    // Smooth camera movement
    const speed = 0.05;
    camera.position.x += (targetPosition.x - camera.position.x) * speed;
    camera.position.y += (targetPosition.y - camera.position.y) * speed;
    camera.position.z += (targetPosition.z - camera.position.z) * speed;

    // Check if animation is complete (close enough to target)
    const distance = Math.sqrt(
      Math.pow(targetPosition.x - camera.position.x, 2) +
      Math.pow(targetPosition.y - camera.position.y, 2) +
      Math.pow(targetPosition.z - camera.position.z, 2)
    );

    if (distance < 0.1) {
      setIsAnimating(false);
      onViewComplete();
    }

    controlsRef.current.target.set(0, 1, 0);
    controlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={5}
      maxDistance={20}
      maxPolarAngle={Math.PI / 2}
    />
  );
}

export function Model3D() {
  const { t } = useLanguage();
  const [sectionX, setSectionX] = useState(0);
  const [sectionY, setSectionY] = useState(0);
  const [sectionZ, setSectionZ] = useState(0);
  const [wireframe, setWireframe] = useState(false);
  const [transparency, setTransparency] = useState(1);
  const [exploded, setExploded] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [panelOpen, setPanelOpen] = useState(true);
  const [view, setView] = useState<ViewPreset>("isometric");
  const [showSections, setShowSections] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const viewButtons = [
    { label: "North", value: "north" as ViewPreset },
    { label: "South", value: "south" as ViewPreset },
    { label: "East", value: "east" as ViewPreset },
    { label: "West", value: "west" as ViewPreset },
    { label: "Top", value: "top" as ViewPreset },
    { label: "ISO", value: "isometric" as ViewPreset },
  ];

  const handleViewChange = (newView: ViewPreset) => {
    setView(newView);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{
      backgroundColor: '#f8f9fa',
      backgroundImage: 'var(--dot-bg)',
      backgroundSize: 'var(--dot-size)'
    }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-6 text-xl sm:text-2xl">
            {t.model3d?.heading || "Interactive 3D Model"}
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore the building from different angles, create sections, and analyze features
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* 3D Canvas */}
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-white shadow-2xl">
            <Canvas 
              key="3d-model-canvas"
              shadows 
              gl={{ 
                localClippingEnabled: true,
                alpha: false,
                antialias: true,
                preserveDrawingBuffer: true
              }}
              dpr={[1, 2]}
            >
              <PerspectiveCamera makeDefault position={[6, 4, 8]} fov={50} />
              
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />
              <pointLight position={[-10, 10, -10]} intensity={0.3} />
              <spotLight
                position={[0, 15, 0]}
                angle={0.3}
                penumbra={1}
                intensity={0.5}
                castShadow
              />

              {/* Ground */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.2, 0]}
                receiveShadow
              >
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial color="#cbd5e1" />
              </mesh>

              {/* House Model */}
              <HouseModel 
                sectionX={sectionX}
                sectionY={sectionY}
                sectionZ={sectionZ}
                wireframe={wireframe}
                transparency={transparency}
                exploded={exploded}
                autoRotate={autoRotate}
              />

              {/* Controls */}
              <CameraController view={view} onViewComplete={() => {}} />
            </Canvas>

            {/* Control Panel Overlay */}
            <div className="absolute top-4 right-4 max-w-xs">
              {/* View Controls */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 mb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-primary" />
                    <span className="text-xs">View Direction</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {viewButtons.map((btn) => (
                    <Button
                      key={btn.value}
                      onClick={() => handleViewChange(btn.value)}
                      variant={view === btn.value ? "default" : "outline"}
                      size="sm"
                      className="text-xs h-7"
                    >
                      {btn.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Section Controls */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mb-3">
                <button
                  onClick={() => setShowSections(!showSections)}
                  className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-primary" />
                    <span className="text-xs">Section Cuts</span>
                  </div>
                  {showSections ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {showSections && (
                  <div className="px-4 pb-4 space-y-3">
                    <div>
                      <Label className="text-xs mb-1.5 block">X-Axis Cut</Label>
                      <Slider
                        value={[sectionX]}
                        onValueChange={(val) => setSectionX(val[0])}
                        min={-5}
                        max={5}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label className="text-xs mb-1.5 block">Y-Axis Cut</Label>
                      <Slider
                        value={[sectionY]}
                        onValueChange={(val) => setSectionY(val[0])}
                        min={-5}
                        max={5}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label className="text-xs mb-1.5 block">Z-Axis Cut</Label>
                      <Slider
                        value={[sectionZ]}
                        onValueChange={(val) => setSectionZ(val[0])}
                        min={-5}
                        max={5}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        setSectionX(5);
                        setSectionY(5);
                        setSectionZ(5);
                      }}
                      variant="outline"
                      size="sm"
                      className="w-full text-xs h-7"
                    >
                      Reset Sections
                    </Button>
                  </div>
                )}
              </div>

              {/* Visual Features */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
                <button
                  onClick={() => setShowFeatures(!showFeatures)}
                  className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-xs">Visual Features</span>
                  </div>
                  {showFeatures ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {showFeatures && (
                  <div className="px-4 pb-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-xs">Auto Rotate</Label>
                      <Switch
                        checked={autoRotate}
                        onCheckedChange={setAutoRotate}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label className="text-xs">Wireframe Mode</Label>
                      <Switch
                        checked={wireframe}
                        onCheckedChange={setWireframe}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label className="text-xs">Exploded View</Label>
                      <Switch
                        checked={exploded}
                        onCheckedChange={setExploded}
                      />
                    </div>
                    <div>
                      <Label className="text-xs mb-1.5 block">Transparency</Label>
                      <Slider
                        value={[transparency * 100]}
                        onValueChange={(val) => setTransparency(val[0] / 100)}
                        min={10}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        setAutoRotate(false);
                        setWireframe(false);
                        setExploded(false);
                        setTransparency(1);
                      }}
                      variant="outline"
                      size="sm"
                      className="w-full text-xs h-7"
                    >
                      Reset Features
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Grid3x3 className="w-3.5 h-3.5" />
              <span>Drag to rotate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Scroll to zoom</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Box className="w-3.5 h-3.5" />
              <span>Right-click to pan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}