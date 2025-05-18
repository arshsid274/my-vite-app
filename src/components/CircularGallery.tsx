import React, { useRef, useEffect } from "react";
import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Program,
  Mesh,
  Texture,
} from "ogl";

interface GalleryItem {
  image: string;
  text: string;
}

interface CircularGalleryProps {
  items?: GalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
}

const CircularGallery: React.FC<CircularGalleryProps> = ({
  items = [],
  bend = 1,
  textColor = "#ffffff",
  borderRadius = 0,
  font = "bold 30px DM Sans",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: Renderer;
    let animationFrameId: number;

    const initGallery = () => {
      renderer = new Renderer({ dpr: 2, alpha: true });
      const gl = renderer.gl;
      containerRef.current!.appendChild(gl.canvas);

      const camera = new Camera(gl);
      camera.position.z = 10;

      const scene = new Transform();
      const geometry = new Plane(gl, { widthSegments: 100, heightSegments: 50 });

      const meshes: Mesh[] = [];

      items.forEach((item, index) => {
        const texture = new Texture(gl);
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = item.image;
        img.onload = () => {
          texture.image = img;
        };

        const program = new Program(gl, {
          vertex: `
            precision highp float;
            attribute vec3 position;
            attribute vec2 uv;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            varying vec2 vUv;
            void main() {
              vUv = uv;
              vec3 p = position;
              p.z += sin(p.x * 4.0) * 0.1;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
            }
          `,
          fragment: `
            precision highp float;
            uniform sampler2D tMap;
            varying vec2 vUv;
            void main() {
              vec4 color = texture2D(tMap, vUv);
              if (color.a < 0.1) discard;
              gl_FragColor = color;
            }
          `,
          uniforms: {
            tMap: { value: texture },
          },
          transparent: true,
        });

        const mesh = new Mesh(gl, { geometry, program });
        mesh.position.x = index * 2.5;
        mesh.setParent(scene);
        meshes.push(mesh);
      });

      const render = () => {
        renderer.render({ scene, camera });
        animationFrameId = requestAnimationFrame(render);
      };

      render();
    };

    initGallery();

    return () => {
      cancelAnimationFrame(animationFrameId);
      while (containerRef.current?.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    };
  }, [items, bend, textColor, borderRadius, font]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default CircularGallery;
