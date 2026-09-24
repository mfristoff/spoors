# v54 Emergency Modal Performance

The desktop emergency-service modal now opens from a pre-mounted state instead of constructing the full scheduler after the visitor clicks.

## Performance changes
- Pre-mounts the emergency modal during browser idle time after the page settles.
- Also primes the modal on hover, focus, or pointer-down before the click completes.
- Keeps the emergency scheduler mounted between opens so repeat opens are immediate.
- Removes the real-time backdrop blur, which was an unnecessary paint/compositing cost on a full-screen overlay.
- Tightens the overlay and modal entrance transitions for a quicker, smoother response.
- Adds compositor hints for opacity and transform animation.

## Files updated
- `src/pages/home/new/NewHeader.jsx`
- `src/components/ui/ServiceQuoteModal.jsx`

All v53 site changes remain included.
