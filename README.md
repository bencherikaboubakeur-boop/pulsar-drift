# PULSAR DRIFT

One-touch neon orbital survival. Hop between the rings of a dying star, chain
shards for combos, dodge plasma jets and comets. Waves escalate forever.

- Tap / click / Space — switch orbit
- P / Esc — pause · M — mute · R — restart
- 3 difficulties, 4 power-ups, best score saved on device
- 100% offline · synthesized music & SFX · no ads, no tracking

## Android APK
Every push to `main` builds the APK on GitHub Actions (Capacitor 7).
Download it: **Actions → latest run → Artifacts → PulsarDrift-APK**.
Requires Android 6.0+. Debug-signed for personal use.

## Files
- `www/index.html` — the entire game
- `capacitor.config.json` — app name / id
- `scripts/make-assets.mjs` — generates icon + splash
- `.github/workflows/android.yml` — cloud build