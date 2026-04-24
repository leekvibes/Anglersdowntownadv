"use client";

import { useEffect, useRef, useState } from "react";

/* ──────────────────────────────────────────────────────────
   INTERACTIVE BAY MAP
   Shows the Assateague Bay riding area, dock location,
   jet ski tour route, and points of interest. Built with
   Leaflet (free, no API key required).
   ────────────────────────────────────────────────────────── */

/* ── Dock & center ── */
const DOCK = { lat: 38.3365, lng: -75.0849 };
const MAP_CENTER = { lat: 38.295, lng: -75.12 };
const MAP_ZOOM = 12;

/* ── Points of interest ── */
const POINTS_OF_INTEREST = [
  {
    id: "dock",
    label: "Our Dock",
    subtitle: "307 Dorchester Street",
    desc: "Your adventure starts here! Check in, get your safety briefing, and hit the water. Free parking right at our location.",
    lat: 38.3365,
    lng: -75.0849,
    icon: "dock",
    color: "#F5C518",
  },
  {
    id: "horses",
    label: "Wild Horse Beach",
    subtitle: "Assateague Island",
    desc: "See the famous wild horses of Assateague Island from the water. Pontoon boaters can anchor nearby and watch from just 50 feet away.",
    lat: 38.252,
    lng: -75.154,
    icon: "horse",
    color: "#22C55E",
  },
  {
    id: "horses2",
    label: "North Horse Sighting Area",
    subtitle: "Assateague Island",
    desc: "Another popular area where wild horse herds frequently graze along the shoreline. Great viewing from both jet skis and pontoons.",
    lat: 38.288,
    lng: -75.138,
    icon: "horse",
    color: "#22C55E",
  },
  {
    id: "dolphins",
    label: "Dolphin Hotspot",
    subtitle: "OC Inlet Area",
    desc: "Bottlenose dolphins are regularly spotted in this area, especially during morning and late afternoon rides. Watch them leap and play!",
    lat: 38.325,
    lng: -75.088,
    icon: "dolphin",
    color: "#3B82F6",
  },
  {
    id: "sandbar",
    label: "Sandbar Anchoring",
    subtitle: "Mid-Bay",
    desc: "A popular spot for pontoon boaters to anchor, swim, and relax. Shallow water, sandy bottom — perfect for a mid-cruise break.",
    lat: 38.278,
    lng: -75.122,
    icon: "anchor",
    color: "#F59E0B",
  },
  {
    id: "sunset",
    label: "Sunset Viewing",
    subtitle: "Western Bay",
    desc: "The best unobstructed sunset views on the bay. Book a late afternoon ride for golden-hour magic over the water.",
    lat: 38.305,
    lng: -75.125,
    icon: "sunset",
    color: "#F97316",
  },
  {
    id: "island-landing",
    label: "Island Beach Landing",
    subtitle: "Assateague National Seashore",
    desc: "Beach your pontoon and explore the untouched sands of Assateague Island. A 37-mile stretch of pristine national seashore.",
    lat: 38.235,
    lng: -75.162,
    icon: "beach",
    color: "#06B6D4",
  },
];

/* ── Riding area polygon (Assateague Bay) ── */
const RIDING_AREA = [
  [38.345, -75.092],
  [38.340, -75.095],
  [38.330, -75.098],
  [38.315, -75.102],
  [38.300, -75.108],
  [38.280, -75.115],
  [38.260, -75.125],
  [38.240, -75.138],
  [38.225, -75.150],
  [38.220, -75.160],
  [38.225, -75.168],
  [38.240, -75.158],
  [38.260, -75.145],
  [38.280, -75.135],
  [38.300, -75.125],
  [38.315, -75.115],
  [38.330, -75.105],
  [38.345, -75.098],
  [38.345, -75.092],
];

/* ── Jet ski tour route (approximate) ── */
const JETSKI_ROUTE = [
  [38.3365, -75.0849],
  [38.332, -75.092],
  [38.325, -75.098],
  [38.315, -75.108],
  [38.305, -75.115],
  [38.295, -75.120],
  [38.280, -75.128],
  [38.270, -75.132],
  [38.260, -75.138],
  [38.252, -75.142],
  [38.260, -75.138],
  [38.270, -75.132],
  [38.285, -75.125],
  [38.300, -75.115],
  [38.315, -75.105],
  [38.325, -75.096],
  [38.332, -75.090],
  [38.3365, -75.0849],
];

/* ── SVG icon paths ── */
const ICON_PATHS: Record<string, string> = {
  dock: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  horse: "M13 10V3L4 14h7v7l9-11h-7z",
  dolphin: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  anchor: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
  sunset: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  beach: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
};

/* ── Create custom marker HTML ── */
function createMarkerIcon(poi: (typeof POINTS_OF_INTEREST)[0]): string {
  const svgPath = ICON_PATHS[poi.icon] || ICON_PATHS.dock;
  return `
    <div style="
      width: 40px; height: 40px;
      background: ${poi.color};
      border: 3px solid white;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: transform 0.2s;
    ">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="${svgPath}" />
      </svg>
    </div>
  `;
}

/* ── Popup HTML ── */
function createPopupContent(poi: (typeof POINTS_OF_INTEREST)[0]): string {
  return `
    <div style="font-family: var(--font-space), system-ui, sans-serif; max-width: 260px; padding: 4px 0;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <div style="
          width: 32px; height: 32px; min-width: 32px;
          background: ${poi.color}20;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${poi.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="${ICON_PATHS[poi.icon] || ICON_PATHS.dock}" />
          </svg>
        </div>
        <div>
          <div style="font-weight: 800; font-size: 15px; color: #1A1A2E; line-height: 1.2;">${poi.label}</div>
          <div style="font-size: 11px; color: #4A5568; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">${poi.subtitle}</div>
        </div>
      </div>
      <p style="font-size: 13px; color: #4A5568; line-height: 1.5; margin: 0;">${poi.desc}</p>
    </div>
  `;
}

/* ── Filter pills ── */
const FILTERS = [
  { id: "all", label: "All", color: "#1B5FAE" },
  { id: "dock", label: "Dock", color: "#F5C518" },
  { id: "horse", label: "Wild Horses", color: "#22C55E" },
  { id: "dolphin", label: "Dolphins", color: "#3B82F6" },
  { id: "anchor", label: "Sandbars", color: "#F59E0B" },
  { id: "sunset", label: "Sunsets", color: "#F97316" },
  { id: "beach", label: "Beaches", color: "#06B6D4" },
];

/* ══════════════════════════════════════════════════════════ */

export function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showRoute, setShowRoute] = useState(true);
  const [loaded, setLoaded] = useState(false);

  /* ── Initialize map ── */
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;

      if (cancelled || !mapRef.current) return;

      /* Inject Leaflet CSS */
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      /* Create map */
      const map = L.map(mapRef.current, {
        center: [MAP_CENTER.lat, MAP_CENTER.lng],
        zoom: MAP_ZOOM,
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: false,
      });

      /* Dark-ish satellite-style tiles (free, no key) */
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        { maxZoom: 18 }
      ).addTo(map);

      /* Zoom controls top-right */
      L.control.zoom({ position: "topright" }).addTo(map);

      /* Attribution bottom-right */
      L.control
        .attribution({ position: "bottomright" })
        .addAttribution('&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://osm.org/copyright">OSM</a>')
        .addTo(map);

      /* ── Riding area overlay ── */
      L.polygon(RIDING_AREA as [number, number][], {
        color: "#1B5FAE",
        weight: 2,
        opacity: 0.6,
        fillColor: "#1B5FAE",
        fillOpacity: 0.08,
        dashArray: "8, 6",
      }).addTo(map);

      /* ── Jet ski tour route ── */
      const routeLine = L.polyline(JETSKI_ROUTE as [number, number][], {
        color: "#F5C518",
        weight: 3,
        opacity: 0.8,
        dashArray: "10, 8",
      }).addTo(map);

      /* ── Markers ── */
      const markers: L.Marker[] = [];
      POINTS_OF_INTEREST.forEach((poi) => {
        const icon = L.divIcon({
          html: createMarkerIcon(poi),
          className: "",
          iconSize: [40, 40],
          iconAnchor: [20, 20],
          popupAnchor: [0, -24],
        });

        const marker = L.marker([poi.lat, poi.lng], { icon })
          .addTo(map)
          .bindPopup(createPopupContent(poi), {
            maxWidth: 280,
            className: "custom-popup",
          });

        (marker as L.Marker & { _poiIcon: string }).options;
        // Store POI icon type on marker for filtering
        Object.defineProperty(marker, "_poiIcon", { value: poi.icon, writable: false });
        markers.push(marker);
      });

      mapInstanceRef.current = map;
      markersRef.current = markers;

      /* Store route line for toggling */
      (map as L.Map & { _routeLine: L.Polyline })._routeLine = routeLine;

      setLoaded(true);

      /* Fix tile rendering after container size is known */
      setTimeout(() => map.invalidateSize(), 200);
    })();

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  /* ── Filter markers ── */
  useEffect(() => {
    if (!mapInstanceRef.current || !loaded) return;

    markersRef.current.forEach((marker) => {
      const poiIcon = (marker as L.Marker & { _poiIcon: string })._poiIcon;
      if (activeFilter === "all" || poiIcon === activeFilter) {
        marker.setOpacity(1);
      } else {
        marker.setOpacity(0.2);
        marker.closePopup();
      }
    });
  }, [activeFilter, loaded]);

  /* ── Toggle route ── */
  useEffect(() => {
    if (!mapInstanceRef.current || !loaded) return;
    const map = mapInstanceRef.current as L.Map & { _routeLine?: L.Polyline };
    if (map._routeLine) {
      map._routeLine.setStyle({ opacity: showRoute ? 0.8 : 0 });
    }
  }, [showRoute, loaded]);

  return (
    <div className="relative">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeFilter === f.id
                ? "text-white shadow-md scale-105"
                : "bg-white/80 text-gray-text hover:bg-white border border-gray-border"
            }`}
            style={activeFilter === f.id ? { backgroundColor: f.color } : {}}
          >
            {f.label}
          </button>
        ))}

        {/* Route toggle */}
        <button
          onClick={() => setShowRoute(!showRoute)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
            showRoute
              ? "bg-yellow-brand text-dark border-yellow-brand"
              : "bg-white/80 text-gray-text border-gray-border hover:bg-white"
          }`}
        >
          {showRoute ? "Hide" : "Show"} Jet Ski Route
        </button>
      </div>

      {/* Map container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-border">
        <div
          ref={mapRef}
          className="w-full h-[400px] md:h-[500px] lg:h-[550px]"
        />

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 bg-blue-dark/90 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-10 h-10 border-4 border-white/30 border-t-yellow-brand rounded-full animate-spin mx-auto mb-3" />
              <p className="font-bold text-sm">Loading Map...</p>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-border text-xs z-[1000] hidden md:block">
          <p className="font-bold text-dark mb-2">Legend</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5 bg-blue-brand opacity-60" style={{ borderTop: "2px dashed #1B5FAE" }} />
              <span className="text-gray-text">Riding Area</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-0.5" style={{ borderTop: "2px dashed #F5C518" }} />
              <span className="text-gray-text">Jet Ski Tour Route</span>
            </div>
            {[
              { color: "#F5C518", label: "Dock" },
              { color: "#22C55E", label: "Wild Horses" },
              { color: "#3B82F6", label: "Dolphins" },
              { color: "#F59E0B", label: "Sandbars" },
              { color: "#F97316", label: "Sunsets" },
              { color: "#06B6D4", label: "Beaches" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-text">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leaflet popup custom styles */}
      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          padding: 4px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .custom-popup .leaflet-popup-tip {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .leaflet-div-icon {
          background: none !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
}
