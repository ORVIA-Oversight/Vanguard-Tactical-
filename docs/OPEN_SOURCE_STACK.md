# Vanguard Tactical open-source integration stack

## Integrated now
- **MapLibre GL JS** (BSD-3-Clause) — interactive ATAC field map embedded in Vanguard.
- **InkJS** (MIT) — dependency added for the scenario engine workstream.

## Server / field adapters prepared next
- **Nakama** (Apache-2.0) — preferred external realtime/community service for team chat, parties, leaderboards and live event state if Vanguard outgrows the existing Supabase/Convex functions.
- **Traccar** (Apache-2.0) — optional GPS/geofence source, normalized into the ATAC/SENSE track contract.
- **Meshtastic** (GPL-3.0 firmware) — external off-grid LoRa gateway for low-bandwidth messages, positions and telemetry. Keep firmware/device stack separate and ingest events through an adapter.
- **FreeTAKServer** (EPL-2.0) — optional TAK interoperability bridge, not the Vanguard core.

## Architecture rule
Vanguard remains the customer-facing application and source of identity/permissions. External open-source services are adapters behind the platform, not separate user experiences.

## Licence rule
Permissive libraries may be linked directly where appropriate. Strong-copyleft or service-specific projects should stay as separately deployed components until licence review confirms the intended commercial use.

Build verification is enforced by `.github/workflows/build.yml` on every push to `main`.
