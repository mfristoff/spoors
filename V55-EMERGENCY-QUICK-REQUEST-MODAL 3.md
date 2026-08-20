# v55 Emergency Quick Request Modal

The desktop header emergency CTA now opens a dedicated emergency request form instead of the standard scheduling form.

## Emergency flow
- Removed the calendar and time-slot picker entirely.
- New required fields: name, phone, and service address.
- Added a short optional "What's happening?" field for dispatch context.
- Form submissions go to the existing shared Formspree endpoint with an urgent emergency subject line.
- Added a secondary direct-call action inside the modal for visitors who want immediate phone contact.
- Mobile header behavior remains direct tap-to-call.

## Performance
- The new modal is small and mounts directly on click.
- No scheduler/calendar UI is constructed.
- No full-screen backdrop blur is used.
- Entrance motion is limited to a quick opacity/transform transition.

## Files updated
- `src/pages/home/new/NewHeader.jsx`
- `src/components/ui/EmergencyHelpModal.jsx`

All prior v54 changes remain included.
