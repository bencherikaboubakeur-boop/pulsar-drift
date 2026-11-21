// Draws the launcher icon (1024px) and splash (2732px) from pure SVG — no design tools needed.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const mark = `
  <defs>
    <radialGradient id="core" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="45%" stop-color="#ff9de4"/>
      <stop offset="100%" stop-color="#ff2fb3"/>
    </radialGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ff3dbb" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#ff3dbb" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ship" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="55%" stop-color="#7df3ff"/>
      <stop offset="100%" stop-color="#0e9cc4"/>
    </linearGradient>
    <linearGradient id="gem" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fff6d8"/>
      <stop offset="100%" stop-color="#ff9d3d"/>
    </linearGradient>
  </defs>
  <circle cx="512" cy="512" r="400" fill="none" stroke="#2ee6ff" stroke-opacity="0.55" stroke-width="12"/>
  <circle cx="512" cy="512" r="240" fill="none" stroke="#2ee6ff" stroke-opacity="0.35" stroke-width="10"/>
  <path d="M 512 512 L 244 700 A 330 330 0 0 1 200 560 Z" fill="#ff3b5c" fill-opacity="0.75"/>
  <circle cx="512" cy="512" r="230" fill="url(#halo)"/>
  <circle cx="512" cy="512" r="96" fill="url(#core)"/>
  <g transform="translate(795 300) rotate(125)">
    <path d="M 0 -64 L 38 46 L 0 26 L -38 46 Z" fill="url(#ship)" stroke="#ffffff" stroke-width="5"/>
  </g>
  <g transform="translate(300 430) rotate(45)">
    <rect x="-30" y="-30" width="60" height="60" fill="url(#gem)" stroke="#ffffff" stroke-width="5"/>
  </g>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#1c1042"/><stop offset="100%" stop-color="#070312"/>
  </linearGradient></defs>
  <rect width="1024" height="1024" fill="url(#bg)"/>
  <circle cx="240" cy="210" r="4" fill="#cfd6ff"/><circle cx="820" cy="150" r="5" fill="#2ee6ff"/>
  <circle cx="880" cy="820" r="4" fill="#ff3dbb"/><circle cx="150" cy="860" r="5" fill="#cfd6ff"/>
  <circle cx="620" cy="900" r="3" fill="#ffc63d"/><circle cx="120" cy="420" r="3" fill="#cfd6ff"/>
  ${mark}
</svg>`;

const splash = `<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732" viewBox="0 0 2732 2732">
  <rect width="2732" height="2732" fill="#070312"/>
  <circle cx="700" cy="600" r="6" fill="#cfd6ff"/><circle cx="2100" cy="800" r="7" fill="#2ee6ff"/>
  <circle cx="2200" cy="2100" r="6" fill="#ff3dbb"/><circle cx="600" cy="2200" r="7" fill="#cfd6ff"/>
  <g transform="translate(1366 1366) scale(1.15) translate(-512 -512)">${mark}</g>
</svg>`;

try {
  mkdirSync("assets", { recursive: true });
  await sharp(Buffer.from(icon)).png().toFile("assets/icon.png");
  await sharp(Buffer.from(splash)).png().toFile("assets/splash.png");
  console.log("Icon + splash generated in /assets");
} catch (e) {
  console.error("Asset generation failed:", e.message);
  process.exitCode = 1;
}