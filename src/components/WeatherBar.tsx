"use client";

import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────────────────
   LIVE CONDITIONS DATA BAR
   Data-dashboard style strip pulling live air temp, water temp,
   wind, and derived ride-status. Monospace digits, hairline
   separators, pulsing status indicators.
   ────────────────────────────────────────────────────────── */

interface WeatherData {
  temp: number;
  feelsLike: number;
  wind: number;
  windDir: string;
  waterTemp: number | null;
  description: string;
  icon: "sun" | "partly" | "cloudy" | "rain" | "storm";
}

const LAT = 38.3365;
const LON = -75.0849;
const NOAA_STATION = "8570283";

function weatherIcon(code: number): WeatherData["icon"] {
  if (code <= 1) return "sun";
  if (code <= 3) return "partly";
  if (code <= 48) return "cloudy";
  if (code <= 67) return "rain";
  return "storm";
}

function weatherLabel(code: number): string {
  if (code <= 1) return "CLEAR";
  if (code === 2) return "PARTLY CLOUDY";
  if (code === 3) return "OVERCAST";
  if (code <= 48) return "CLOUDY";
  if (code <= 55) return "LIGHT RAIN";
  if (code <= 67) return "RAIN";
  if (code <= 77) return "SNOW";
  if (code <= 82) return "SHOWERS";
  return "STORM";
}

function windDir(deg: number): string {
  const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return dirs[Math.round(deg / 45) % 8];
}

function rideStatus(icon: WeatherData["icon"], wind: number): {
  text: string;
  tone: "success" | "warn" | "danger";
} {
  if (icon === "storm" || wind > 25)
    return { text: "HOLD — CHECK FIRST", tone: "danger" };
  if (icon === "rain" || wind > 18)
    return { text: "RIDEABLE — SOME CHOP", tone: "warn" };
  return { text: "OPTIMAL CONDITIONS", tone: "success" };
}

async function fetchWaterTemp(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=latest&station=${NOAA_STATION}&product=water_temperature&units=english&time_zone=lst_ldt&format=json`
    );
    const data = await res.json();
    if (data?.data?.[0]?.v) {
      return Math.round(parseFloat(data.data[0].v));
    }
    return null;
  } catch {
    return null;
  }
}

const TONE_CLASS = {
  success: { text: "text-success", dot: "bg-success" },
  warn: { text: "text-warn", dot: "bg-warn" },
  danger: { text: "text-danger", dot: "bg-danger" },
} as const;

export function WeatherBar() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    async function fetchWeather() {
      try {
        const [weatherRes, waterTemp] = await Promise.all([
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York`
          ),
          fetchWaterTemp(),
        ]);
        const data = await weatherRes.json();
        const c = data.current;
        setWeather({
          temp: Math.round(c.temperature_2m),
          feelsLike: Math.round(c.apparent_temperature),
          wind: Math.round(c.wind_speed_10m),
          windDir: windDir(c.wind_direction_10m),
          waterTemp,
          description: weatherLabel(c.weather_code),
          icon: weatherIcon(c.weather_code),
        });
        setTimestamp(
          new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        );
      } catch {
        /* silently fail — bar just won't show */
      }
    }
    fetchWeather();
  }, []);

  if (!weather) return null;

  const status = rideStatus(weather.icon, weather.wind);
  const tone = TONE_CLASS[status.tone];

  return (
    <section className="relative bg-bg-deep border-y border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 py-3">
        {/* Top meta strip */}
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink-mute mb-2.5">
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="text-accent">LIVE</span>
            <span className="text-ink-mute">·</span>
            <span>Assateague Bay · 38.3365°N 75.0849°W</span>
          </span>
          <span className="hidden sm:inline mono-num">
            {timestamp}
          </span>
        </div>

        {/* Data row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-3 gap-x-6">
          <DataCell label="AIR" value={`${weather.temp}°F`} sub={`FEELS ${weather.feelsLike}°`} />
          <DataCell label="WATER" value={weather.waterTemp !== null ? `${weather.waterTemp}°F` : "--"} sub="NOAA 8570283" />
          <DataCell label="WIND" value={`${weather.wind}`} sub={`MPH · ${weather.windDir}`} />
          <DataCell label="SKY" value={weather.description} sub="OPEN-METEO" isText />
          <div className="col-span-2 md:col-span-1 flex items-center justify-start md:justify-end gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${tone.dot} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${tone.dot}`} />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-mute">
                STATUS
              </span>
              <span className={`font-mono text-[11px] font-semibold uppercase tracking-[0.1em] ${tone.text}`}>
                {status.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataCell({
  label,
  value,
  sub,
  isText = false,
}: {
  label: string;
  value: string;
  sub: string;
  isText?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-mute">
        {label}
      </span>
      <span
        className={`${
          isText
            ? "font-mono text-sm font-semibold text-ink uppercase tracking-wider"
            : "mono-num text-xl md:text-2xl font-semibold text-ink leading-none"
        }`}
      >
        {value}
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-mute mt-0.5">
        {sub}
      </span>
    </div>
  );
}
