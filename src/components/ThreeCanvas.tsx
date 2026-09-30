import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  activeSection: string;
  scrollProgress: number;
  solvedSectors: string[];
  onSelectSector?: (sectorId: string) => void;
  isGameMode?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  activeSection,
  scrollProgress,
  solvedSectors,
  onSelectSector,
  isGameMode = false
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Dynamic references
  const targetCamPos = useRef(new THREE.Vector3(0, 10, 22));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const pointLightSDG5Ref = useRef<THREE.PointLight | null>(null);
  const pointLightSDG10Ref = useRef<THREE.PointLight | null>(null);

  // Group references
  const mainFloorGroupRef = useRef<THREE.Group | null>(null);
  const sdg5GroupRef = useRef<THREE.Group | null>(null);
  const sdg10GroupRef = useRef<THREE.Group | null>(null);
  const gameGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  // Interactive raycasting
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());

  // Barriers and interactive meshes map
  const barrierMeshesRef = useRef<Map<string, THREE.Mesh>>(new Map());

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x000000, 0.025);

    // Camera setup
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 150);
    camera.position.set(0, 8, 20);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Context loss resilience
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
    const handleContextRestored = () => {
      initSceneElements();
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xdde4f0, 0.85);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(15, 25, 12);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 60;
    dirLight.shadow.camera.left = -20;
    dirLight.shadow.camera.right = 20;
    dirLight.shadow.camera.top = 20;
    dirLight.shadow.camera.bottom = -20;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // SDG 5 Point Light (Magenta / Rose gold)
    const pointLight5 = new THREE.PointLight(0xec4899, 2.5, 30);
    pointLight5.position.set(-10, 5, 2);
    scene.add(pointLight5);
    pointLightSDG5Ref.current = pointLight5;

    // SDG 10 Point Light (Cyan / Sky blue)
    const pointLight10 = new THREE.PointLight(0x0ea5e9, 2.5, 30);
    pointLight10.position.set(10, 5, 2);
    scene.add(pointLight10);
    pointLightSDG10Ref.current = pointLight10;

    // Build scene architecture
    const initSceneElements = () => {
      // 1. Grid & Main Architectural Base
      const mainFloor = new THREE.Group();
      mainFloorGroupRef.current = mainFloor;
      scene.add(mainFloor);

      const floorGeo = new THREE.PlaneGeometry(80, 80, 40, 40);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x050505,
        roughness: 0.95,
        metalness: 0.05
      });
      const floorMesh = new THREE.Mesh(floorGeo, floorMat);
      floorMesh.rotation.x = -Math.PI / 2;
      floorMesh.position.y = -0.05;
      floorMesh.receiveShadow = true;
      mainFloor.add(floorMesh);

      // Architectural Grid Lines in subtle dark tone
      const gridHelper = new THREE.GridHelper(70, 35, 0x1a1a1a, 0x0d0d0d);
      gridHelper.position.y = 0.01;
      mainFloor.add(gridHelper);

      // Abstract pillars & portals representing workplace structures
      for (let i = -3; i <= 3; i++) {
        if (i === 0) continue;
        const pillarGeo = new THREE.BoxGeometry(0.35, 6, 0.35);
        const pillarMat = new THREE.MeshStandardMaterial({
          color: 0x1c2130,
          roughness: 0.3,
          metalness: 0.7
        });
        const pillar = new THREE.Mesh(pillarGeo, pillarMat);
        pillar.position.set(i * 4.5, 3, -12);
        pillar.castShadow = true;
        mainFloor.add(pillar);
      }

      // 2. SDG 5 Dedicated Pavilion (Left wing)
      const sdg5Group = new THREE.Group();
      sdg5Group.position.set(-14, 0, 0);
      sdg5GroupRef.current = sdg5Group;
      scene.add(sdg5Group);

      // Balanced platform in rose-slate
      const plat5Geo = new THREE.CylinderGeometry(5.5, 6, 0.4, 32);
      const plat5Mat = new THREE.MeshStandardMaterial({
        color: 0x201525,
        roughness: 0.5,
        metalness: 0.4
      });
      const plat5 = new THREE.Mesh(plat5Geo, plat5Mat);
      plat5.receiveShadow = true;
      plat5.castShadow = true;
      sdg5Group.add(plat5);

      // Asymmetric pathways (Unpaid care 19.9% vs 1.8% metaphor)
      // Path 1 (heavy care burden - long spiral curve)
      const pathCurve1 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3, 0.3, 3),
        new THREE.Vector3(-4, 0.3, 0),
        new THREE.Vector3(-2.5, 0.5, -2),
        new THREE.Vector3(-1, 0.8, -4)
      ]);
      const pathGeo1 = new THREE.TubeGeometry(pathCurve1, 32, 0.22, 8, false);
      const pathMat1 = new THREE.MeshStandardMaterial({
        color: 0xec4899,
        emissive: 0x831843,
        emissiveIntensity: 0.4,
        roughness: 0.4
      });
      const pathMesh1 = new THREE.Mesh(pathGeo1, pathMat1);
      sdg5Group.add(pathMesh1);

      // Path 2 (male leisure/direct 1.8% time - straight direct path)
      const pathCurve2 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(2, 0.3, 3),
        new THREE.Vector3(2, 0.3, -4)
      ]);
      const pathGeo2 = new THREE.TubeGeometry(pathCurve2, 16, 0.14, 8, false);
      const pathMat2 = new THREE.MeshStandardMaterial({
        color: 0x94a3b8,
        roughness: 0.4
      });
      const pathMesh2 = new THREE.Mesh(pathGeo2, pathMat2);
      sdg5Group.add(pathMesh2);

      // Stylized human figures on the platform
      const createFigure = (x: number, z: number, colorHex: number, height = 1.4) => {
        const figGroup = new THREE.Group();
        figGroup.position.set(x, 0.3, z);

        const bodyGeo = new THREE.CylinderGeometry(0.18, 0.22, height * 0.7, 16);
        const bodyMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4 });
        const body = new THREE.Mesh(bodyGeo, bodyMat);
        body.position.y = (height * 0.7) / 2;
        body.castShadow = true;
        figGroup.add(body);

        const headGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const head = new THREE.Mesh(headGeo, bodyMat);
        head.position.y = height * 0.7 + 0.25;
        head.castShadow = true;
        figGroup.add(head);

        return figGroup;
      };

      sdg5Group.add(createFigure(-2, 1, 0xf472b6, 1.4));
      sdg5Group.add(createFigure(2, 1, 0x94a3b8, 1.5));
      sdg5Group.add(createFigure(0, -2, 0xfb7185, 1.4));

      // 3. SDG 10 Dedicated Pavilion (Right wing)
      const sdg10Group = new THREE.Group();
      sdg10Group.position.set(14, 0, 0);
      sdg10GroupRef.current = sdg10Group;
      scene.add(sdg10Group);

      // Stepped platform showing access levels
      const plat10Geo = new THREE.BoxGeometry(11, 0.4, 9);
      const plat10Mat = new THREE.MeshStandardMaterial({
        color: 0x111c2a,
        roughness: 0.5,
        metalness: 0.4
      });
      const plat10 = new THREE.Mesh(plat10Geo, plat10Mat);
      plat10.receiveShadow = true;
      plat10.castShadow = true;
      sdg10Group.add(plat10);

      // Four pathways from the prompt:
      // Path A: Open
      // Path B: Partially blocked
      // Path C: Blocked by barrier
      // Path D: Difficult to access (steep)
      const pathwayWidth = 0.5;
      const paths = [
        { x: -3.5, name: 'Path D (Accessibility Deficit)', color: 0x38bdf8, blocked: true },
        { x: -1.2, name: 'Path C (Poverty Barrier)', color: 0x0284c7, blocked: true },
        { x: 1.2, name: 'Path B (Institutional Bias)', color: 0x0369a1, blocked: true },
        { x: 3.5, name: 'Path A (Open Access)', color: 0x38bdf8, blocked: false }
      ];

      paths.forEach((p, idx) => {
        const laneGeo = new THREE.BoxGeometry(pathwayWidth, 0.08, 7);
        const laneMat = new THREE.MeshStandardMaterial({
          color: p.color,
          roughness: 0.3
        });
        const lane = new THREE.Mesh(laneGeo, laneMat);
        lane.position.set(p.x, 0.25, 0);
        sdg10Group.add(lane);

        // Add barrier walls for blocked paths
        if (p.blocked) {
          const barrierGeo = new THREE.BoxGeometry(0.7, 1.2, 0.15);
          const barrierMat = new THREE.MeshStandardMaterial({
            color: 0xef4444,
            transparent: true,
            opacity: 0.85,
            roughness: 0.2
          });
          const barrier = new THREE.Mesh(barrierGeo, barrierMat);
          barrier.position.set(p.x, 0.8, -1.5 + idx * 0.8);
          barrier.castShadow = true;
          barrier.name = `sdg10_barrier_${idx}`;
          sdg10Group.add(barrier);
        }
      });

      sdg10Group.add(createFigure(3.5, 2, 0x38bdf8, 1.4));
      sdg10Group.add(createFigure(-1.2, 2.5, 0x64748b, 1.3));
      sdg10Group.add(createFigure(-3.5, 2.5, 0x94a3b8, 1.4));

      // 4. Workplace Interactive Simulator Game Zone (Center forward floor)
      const gameGroup = new THREE.Group();
      gameGroup.position.set(0, 0, -2);
      gameGroupRef.current = gameGroup;
      scene.add(gameGroup);

      // 5 Reform Stations:
      // 1. Boardroom (Center Left)
      // 2. Accessibility Ramp (Front Center)
      // 3. Safety Haven (Far Left)
      // 4. Care Station (Center Right)
      // 5. Gateway (Front Right)
      const stations = [
        { id: 'boardroom', x: -4.5, z: -3.5, color: 0xd946ef, name: 'The Boardroom' },
        { id: 'accessibility', x: 0, z: -1.5, color: 0x0284c7, name: 'Mobility Bridge' },
        { id: 'safety', x: -6, z: 1.5, color: 0xf43f5e, name: 'Safety Haven' },
        { id: 'caregiver', x: 4.5, z: -3.5, color: 0xec4899, name: 'Care Station' },
        { id: 'gateway', x: 5, z: 1.5, color: 0x0ea5e9, name: 'Opportunity Gateway' }
      ];

      stations.forEach(st => {
        const stGroup = new THREE.Group();
        stGroup.position.set(st.x, 0, st.z);
        stGroup.name = `station_${st.id}`;

        // Base pod
        const podGeo = new THREE.CylinderGeometry(1.4, 1.6, 0.35, 24);
        const podMat = new THREE.MeshStandardMaterial({
          color: 0x171d2b,
          roughness: 0.4,
          metalness: 0.6
        });
        const pod = new THREE.Mesh(podGeo, podMat);
        pod.position.y = 0.18;
        pod.receiveShadow = true;
        pod.castShadow = true;
        stGroup.add(pod);

        // Indicator Beacon
        const ringGeo = new THREE.TorusGeometry(1.2, 0.05, 12, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: st.color });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 0.36;
        stGroup.add(ring);

        // Station architectural element
        const archGeo = new THREE.BoxGeometry(1.8, 1.6, 0.15);
        const archMat = new THREE.MeshStandardMaterial({
          color: 0x222a3d,
          roughness: 0.2,
          transparent: true,
          opacity: 0.8
        });
        const arch = new THREE.Mesh(archGeo, archMat);
        arch.position.set(0, 1.15, -0.6);
        arch.castShadow = true;
        stGroup.add(arch);

        // Barrier gate (dissolves when solved)
        const gateGeo = new THREE.BoxGeometry(1.5, 1.2, 0.1);
        const gateMat = new THREE.MeshStandardMaterial({
          color: 0xfb7185,
          transparent: true,
          opacity: 0.75,
          roughness: 0.3
        });
        const gate = new THREE.Mesh(gateGeo, gateMat);
        gate.position.set(0, 1.0, 0.4);
        gate.name = `gate_${st.id}`;
        stGroup.add(gate);
        barrierMeshesRef.current.set(st.id, gate);

        // Station figure
        const stFig = createFigure(0, 0, 0xe2e8f0, 1.3);
        stGroup.add(stFig);

        gameGroup.add(stGroup);
      });

      // 5. Ambient Atmospheric Particles (Representing ideas, discourse, knowledge)
      const particleCount = 180;
      const partGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorRose = new THREE.Color(0xec4899);
      const colorCyan = new THREE.Color(0x0ea5e9);
      const colorWhite = new THREE.Color(0xffffff);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 50;
        positions[i * 3 + 1] = Math.random() * 12 + 0.5;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

        const mix = Math.random();
        const col = mix < 0.45 ? colorRose : mix < 0.9 ? colorCyan : colorWhite;
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }

      partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      partGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const partMat = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.65
      });

      const particles = new THREE.Points(partGeo, partMat);
      scene.add(particles);
      particlesRef.current = particles;
    };

    initSceneElements();

    // Resize Handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Mouse Move for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Click handler for 3D game interaction
    const handleClick = (e: MouseEvent) => {
      if (!onSelectSector || !cameraRef.current || !sceneRef.current) return;
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      raycasterRef.current.setFromCamera(mouse, cameraRef.current);
      if (gameGroupRef.current) {
        const intersects = raycasterRef.current.intersectObjects(gameGroupRef.current.children, true);
        if (intersects.length > 0) {
          let curr: THREE.Object3D | null = intersects[0].object;
          while (curr && curr !== gameGroupRef.current) {
            if (curr.name && curr.name.startsWith('station_')) {
              const sectorId = curr.name.replace('station_', '');
              onSelectSector(sectorId);
              break;
            }
            curr = curr.parent;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth camera interpolation
      if (cameraRef.current) {
        const cam = cameraRef.current;
        const lerpFactor = prefersReducedMotion ? 0.2 : 0.04;

        // Apply slight mouse parallax
        const parallaxX = mouseRef.current.x * 0.8;
        const parallaxY = mouseRef.current.y * 0.4;

        cam.position.x += (targetCamPos.current.x + parallaxX - cam.position.x) * lerpFactor;
        cam.position.y += (targetCamPos.current.y + parallaxY - cam.position.y) * lerpFactor;
        cam.position.z += (targetCamPos.current.z - cam.position.z) * lerpFactor;

        currentLookAt.current.lerp(targetLookAt.current, lerpFactor);
        cam.lookAt(currentLookAt.current);
      }

      // Subtle particle float
      if (particlesRef.current && !prefersReducedMotion) {
        particlesRef.current.rotation.y = time * 0.02;
        const posAttr = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        if (posAttr) {
          for (let i = 0; i < posAttr.count; i++) {
            let y = posAttr.getY(i);
            y += Math.sin(time + i) * 0.003;
            posAttr.setY(i, y);
          }
          posAttr.needsUpdate = true;
        }
      }

      // Rotate beacon rings
      if (gameGroupRef.current) {
        gameGroupRef.current.children.forEach(child => {
          const ring = child.children.find(c => c instanceof THREE.Mesh && c.geometry instanceof THREE.TorusGeometry);
          if (ring) {
            ring.rotation.z = time * 0.8;
          }
        });
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);

      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update camera targets and environment according to activeSection & scrollProgress
  useEffect(() => {
    if (!cameraRef.current) return;

    if (isGameMode) {
      // Focus isometric view on the workplace simulator
      targetCamPos.current.set(0, 10, 10);
      targetLookAt.current.set(0, 1, -2);
      if (dirLightRef.current) dirLightRef.current.intensity = 2.2;
      return;
    }

    switch (activeSection) {
      case 'prologue':
        // High architectural overview
        targetCamPos.current.set(0, 7 + scrollProgress * 3, 20 - scrollProgress * 5);
        targetLookAt.current.set(0, 1, -4);
        if (pointLightSDG5Ref.current) pointLightSDG5Ref.current.intensity = 1.2;
        if (pointLightSDG10Ref.current) pointLightSDG10Ref.current.intensity = 1.2;
        break;

      case 'sdg5':
        // Smooth camera track to left pavilion (SDG 5 Gender Equality)
        targetCamPos.current.set(-13, 5 + Math.sin(scrollProgress * Math.PI) * 2, 9);
        targetLookAt.current.set(-14, 1.2, 0);
        if (pointLightSDG5Ref.current) pointLightSDG5Ref.current.intensity = 4.0;
        if (pointLightSDG10Ref.current) pointLightSDG10Ref.current.intensity = 0.6;
        break;

      case 'sdg10':
        // Smooth camera track to right pavilion (SDG 10 Reduced Inequalities)
        targetCamPos.current.set(13, 5 + Math.sin(scrollProgress * Math.PI) * 2, 9);
        targetLookAt.current.set(14, 1.2, 0);
        if (pointLightSDG5Ref.current) pointLightSDG5Ref.current.intensity = 0.6;
        if (pointLightSDG10Ref.current) pointLightSDG10Ref.current.intensity = 4.0;
        break;

      case 'outcome':
      case 'game':
        // Centered unified view merging both identities
        targetCamPos.current.set(0, 8, 12);
        targetLookAt.current.set(0, 1.5, -2);
        if (pointLightSDG5Ref.current) pointLightSDG5Ref.current.intensity = 2.8;
        if (pointLightSDG10Ref.current) pointLightSDG10Ref.current.intensity = 2.8;
        if (dirLightRef.current) dirLightRef.current.intensity = 2.0;
        break;

      default:
        targetCamPos.current.set(0, 7, 20);
        targetLookAt.current.set(0, 0, 0);
        break;
    }
  }, [activeSection, scrollProgress, isGameMode]);

  // Update barrier meshes when sectors are solved in game mode
  useEffect(() => {
    barrierMeshesRef.current.forEach((gateMesh, sectorId) => {
      const isSolved = solvedSectors.includes(sectorId);
      if (isSolved) {
        // Lower and make transparent green
        gateMesh.position.y = -0.5;
        if (gateMesh.material instanceof THREE.MeshStandardMaterial) {
          gateMesh.material.opacity = 0.15;
          gateMesh.material.color.setHex(0x10b981);
        }
      } else {
        gateMesh.position.y = 1.0;
        if (gateMesh.material instanceof THREE.MeshStandardMaterial) {
          gateMesh.material.opacity = 0.75;
          gateMesh.material.color.setHex(0xfb7185);
        }
      }
    });
  }, [solvedSectors]);

  return (
    <div
      ref={mountRef}
      className={`webgl-canvas-container ${isGameMode ? 'interactive cursor-pointer' : ''}`}
      aria-label="3D Interactive Digital Exhibition Canvas"
      role="img"
    />
  );
};
