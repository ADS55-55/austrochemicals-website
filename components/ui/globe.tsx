"use client";

import Globe, { type GlobeMethods } from "react-globe.gl";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GlobeArcRow } from "@/lib/home-globe-arcs";

export type GlobePin = {
  name: string;
  lat: number;
  lng: number;
};

export type GlobeConfigInput = {
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  arcTime?: number;
};

export function World({
  data,
  pins,
  globeConfig,
}: {
  data: GlobeArcRow[];
  pins: GlobePin[];
  globeConfig: GlobeConfigInput;
}) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 640, height: 420 });

  const blockCanvasZoom = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const blockPinchZoom = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length > 1) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      const h = Math.min(780, Math.max(480, w * 0.62));
      setDims({ width: Math.max(320, w), height: h });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onGlobeReady = useCallback(() => {
    const g = globeRef.current;
    if (!g) return;
    const c = g.controls();
    g.pointOfView({ lat: 18, lng: 76, altitude: 1.72 }, 0);
    c.autoRotate = globeConfig.autoRotate ?? true;
    c.autoRotateSpeed = globeConfig.autoRotateSpeed ?? 1;
    c.enableZoom = false;
    c.enablePan = false;
    c.enableRotate = true;
    c.zoomSpeed = 0;
    c.mouseButtons = {
      LEFT: 0,
      MIDDLE: undefined,
      RIGHT: undefined,
    };
    c.touches = {
      ONE: 0,
      TWO: undefined,
    };
    const lockCameraDistance = () => {
      const pos = c.object.position;
      const dist = Math.sqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z);
      if (dist > 0.001) {
        c.minDistance = dist;
        c.maxDistance = dist;
      }
    };
    lockCameraDistance();
    requestAnimationFrame(lockCameraDistance);
  }, [globeConfig.autoRotate, globeConfig.autoRotateSpeed]);

  return (
    <div
      ref={wrapRef}
      className="globe-world-wrap"
      style={{ width: "100%" }}
      onWheelCapture={blockCanvasZoom}
      onTouchMoveCapture={blockPinchZoom}
    >
      <Globe
        ref={globeRef}
        width={dims.width}
        height={dims.height}
        onGlobeReady={onGlobeReady}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={globeConfig.showAtmosphere ?? true}
        atmosphereColor={globeConfig.atmosphereColor ?? "#ffffff"}
        atmosphereAltitude={globeConfig.atmosphereAltitude ?? 0.12}
        pointsData={pins}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#00e5ff"}
        pointRadius={0.58}
        pointAltitude={0.018}
        pointResolution={28}
        pointLabel={(obj: object) => (obj as GlobePin).name}
        arcsData={data}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcAltitude="arcAlt"
        arcDashLength={0.36}
        arcDashGap={0.85}
        arcDashInitialGap="dashInitialGap"
        arcDashAnimateTime={globeConfig.arcTime ?? 2800}
        arcsTransitionDuration={800}
      />
    </div>
  );
}
