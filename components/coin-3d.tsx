"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export type Coin3DProps = {
  className?: string
  metalness?: number
  roughness?: number
  spinSpeed?: number // radians per second around Y
  coinImage?: string // New prop for custom coin image
}

/**
 * Clean, professional 3D coin with optional custom image texture
 */
export default function Coin3D({
  className = "w-full h-full",
  metalness = 0.85,
  roughness = 0.25,
  spinSpeed = 1.6,
  coinImage,
}: Coin3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const cleanupRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 0, 3.2)

    // Lighting
    const amb = new THREE.AmbientLight(0xffffff, 0.7)
    const dir = new THREE.DirectionalLight(0xffffff, 1.15)
    dir.position.set(2.5, 3, 2)
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.4)
    rimLight.position.set(-2, -1.5, -2)
    scene.add(amb, dir, rimLight)

    // Coin group
    const coin = new THREE.Group()
    scene.add(coin)

    // Dimensions
    const radius = 1 // Change coin size (1 = default)
    const thickness = 0.2 // Change coin thickness (0.1 = thin, 0.3 = thick)

    // Load texture if provided
    const textureLoader = new THREE.TextureLoader()
    let coinTexture: THREE.Texture | null = null

    if (coinImage) {
      coinTexture = textureLoader.load(coinImage) // Your custom image
      coinTexture.wrapS = THREE.RepeatWrapping
      coinTexture.wrapT = THREE.RepeatWrapping
    }

    // Materials
    const rimMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#d9b24a"), // Change rim color (gold)
      metalness,
      roughness,
    })

    const faceMat = coinTexture
      ? new THREE.MeshStandardMaterial({
          map: coinTexture,
          metalness: 0.7,
          roughness: 0.3,
        })
      : new THREE.MeshStandardMaterial({
          color: new THREE.Color("#f7e08f"), // Change face color (light gold)
          metalness: 0.92, // Face metalness
          roughness: 0.22, // Face roughness
        })

    const accentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#a78bfa"), // Change accent color (purple)
      metalness: 0.7,
      roughness: 0.35,
    })

    // Rim
    const rimGeo = new THREE.CylinderGeometry(radius, radius, thickness, 96, 1, true)
    rimGeo.rotateX(Math.PI / 2)
    const rim = new THREE.Mesh(rimGeo, rimMat)
    rim.castShadow = true
    rim.receiveShadow = true
    coin.add(rim)

    // Faces
    const faceFront = new THREE.Mesh(new THREE.CircleGeometry(radius - 0.02, 96), faceMat)
    faceFront.position.z = thickness / 2
    faceFront.castShadow = true
    faceFront.receiveShadow = true
    coin.add(faceFront)

    const faceBack = new THREE.Mesh(new THREE.CircleGeometry(radius - 0.02, 96), faceMat)
    faceBack.position.z = -thickness / 2
    faceBack.rotation.y = Math.PI
    faceBack.castShadow = true
    faceBack.receiveShadow = true
    coin.add(faceBack)

    // Subtle inlaid ring detail for refinement (still clean and flat)
    const ringFront = new THREE.Mesh(new THREE.RingGeometry(radius * 0.78, radius * 0.92, 96), accentMat)
    ringFront.position.z = thickness / 2 + 0.001
    coin.add(ringFront)

    const ringBack = new THREE.Mesh(new THREE.RingGeometry(radius * 0.78, radius * 0.92, 96), accentMat)
    ringBack.position.z = -thickness / 2 + 0.001
    ringBack.rotation.y = Math.PI
    coin.add(ringBack)

    // Resize
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))
      if (canvas.width !== width || canvas.height !== height) {
        renderer.setSize(width, height, false)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      }
    }
    resize()
    window.addEventListener("resize", resize)

    // Animate
    let raf = 0
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      coin.rotation.y = t * spinSpeed // Change spinSpeed prop (1.0 = slow, 3.0 = fast)
      coin.rotation.x = Math.sin(t * 0.9) * 0.12 // Change 0.12 for wobble amount
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    // Cleanup
    cleanupRef.current = () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      rimGeo.dispose()
      faceFront.geometry.dispose()
      faceBack.geometry.dispose()
      ringFront.geometry.dispose()
      ringBack.geometry.dispose()
      rimMat.dispose()
      faceMat.dispose()
      accentMat.dispose()
      if (coinTexture) coinTexture.dispose()
      renderer.dispose()
    }

    return () => {
      cleanupRef.current?.()
      cleanupRef.current = null
    }
  }, [metalness, roughness, spinSpeed, coinImage])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
