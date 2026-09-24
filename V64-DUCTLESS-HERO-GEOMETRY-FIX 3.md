# v64 Ductless Hero Geometry Fix

The v63 object-position adjustment was too subtle because the desktop hero crop offered almost no horizontal travel.

## Fix
- Added an optional desktop hero image-width control to the shared service detail layout.
- Ductless Mini-Splits now uses a narrower 54% desktop image panel instead of 62%.
- The hero image is anchored to the right center.
- This physically moves the mini-split unit farther right and clears more space behind the headline.

## Files updated
- `src/pages/services/ServiceDetailLayout.jsx`
- `src/pages/services/DuctlessMiniSplitServices.jsx`
