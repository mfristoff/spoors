# v57 — Update 1

Implemented the 23-page `Update 1` change list against v56.

## Home
- Replaced the Swamp Coolers home service card image with the supplied rooftop-home image.
- Restored the original aspect behavior for the two large Total Comfort / maintenance imagery blocks.
- Removed the desktop right-side gap on the second large home image.

## Global image integrity
- Updated the shared `Image` component so local/non-Wix assets honor `cover` or `contain` and preserve native aspect ratio instead of stretching to the wrapper.
- Changed the shared footer CTA background to render from the original image with CSS `object-cover`, preserving aspect ratio site-wide.
- Changed About story imagery to use original source images with `object-cover`, preventing distortion on Our Commitment, Customer Service, and Community Involvement.

## Careers
- Increased legibility of the supporting line on the dark benefits panel.
- Reduced decorative circle opacity by half.
- Replaced the compensation line with positive team-focused copy.
- Added `Great Working Environment` as an eighth benefit.
- Converted benefit labels to title case.
- Moved the decorative bolt/shape to the top-right of the open-application card.

## Services overview
- Kept `HVAC Indoor Air Quality Services` only once and changed the heating-card duplicate to `Heating Air Quality Support`.
- Replaced requested accordion imagery for:
  - Air Conditioning
  - Indoor Air Quality
  - Emergency Repairs
  - Maintenance & Tune-Ups
  - Ductless Mini-Splits
  - Planned Maintenance
- Limited the Swamp Coolers accordion imagery to images already used on the Swamp Coolers detail page.

## Air Conditioning detail page
- Updated `Tune-Ups That Cut Your Cooling Bills`.
- Updated `Cooling Restored, Day or Night`.
- Updated `Cleaner Air With Every Cooling Cycle`.
- Replaced the image break above Customer Reviews.

## Swamp Coolers detail page
- Swapped the images used by `Simple, Reliable Upkeep` and `Right-Sized Cooling for Your Space`.

## Emergency Repairs detail page
- Replaced the hero image.
- Updated `Restored Airflow, No Guesswork`.
- Updated `Leaks Stopped Before They Spread`.
- Updated `Frozen Coils Thawed and Fixed`.
- Updated `Safe, Professional Repairs—Not DIY`.
- Updated `Prevent the Next Emergency`.
- Updated `Honest Repair-vs-Replace Guidance`.
- Replaced the image break above Customer Reviews and increased its height slightly.

## New local assets
- 36 supplied source images were extracted from the PDF, resized only proportionally, optimized to WebP, and stored under `public/assets/images/update-1/`.
