# v53 — Header + Contact Card Correction

This build corrects the v52 header implementation and applies the contact-card follow-up notes.

## Desktop header
- Updated the actual live header component: `src/pages/home/new/NewHeader.jsx`.
- Desktop red CTA now reads `Get Emergency Help` and opens an emergency HVAC service modal.
- Mobile remains direct-call based through the existing mobile `Call Now!` top-bar action and mobile-menu call button.

## Contact cards
- All five cards are full-card clickable targets.
- Meadow Vista and Auburn cards open their respective addresses in Google Maps.
- Fax card uses a fax link.
- Email card uses the business mailto link.
- Standard Hours card calls the main office line.
- Added one support row above the fax number and email address.
- Preserved equal card/headline/content heights and the Olive Kinetic hover treatment.

All v52 and earlier work remains included.
