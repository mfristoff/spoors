# Spoor's Scope and ServiceTitan Closeout
Date: 2026-11-23
Sources: Signed Prospero Web Development Proposal (12/11/2025, signed 03/13/2026); Spoor Website Strategy and Launch Brief (14 pages); Mike/Barry Slack thread 11/19/2026.

## 1. Original Website Build and 14-Page Review Closeout
Treat this section as work within the signed website-build agreement and reasonable launch fixes, NOT as a claim that 100% of the 14-page brief is complete.

- Responsive website rebuild, visual updates, navigation, mobile layout, conversion messaging, real service paths, graphics, responsive assets and performance tuning.
- Four-generation brand positioning, SPOOR values, education-first messaging, and homepage/secondary-page copy revisions. Use verified facts and consistent 1925 history.
- Service and city-page architecture, city-specific corrections, eight priority service areas (Auburn, Meadow Vista, Weimar, Colfax, Newcastle, North Auburn, Applegate, Grass Valley), service-area finder and meaningful internal links.
- Page-specific technical SEO, unique titles and descriptions, canonical URLs, crawlable content, accurate LocalBusiness/Service/BreadcrumbList/FAQ structured data, sitemap and robots rules.
- Preservation of legacy indexed pages with one-hop 301 redirects, correct 404 responses, no accidental production noindex, and launch migration safety.
- Claims and review verification; accurate repair versus free replacement estimate language; contact forms and emergency contact paths; broken link and placeholder correction.
- Review presentation, click-through to Google Reviews, real customer quotes and sources, and functioning map.
- Device/browser/functionality tests, image and video delivery performance and launch technical QA.
- ServiceTitan contracted components: booking widget, website-to-text widget and customer portal link, with account-specific configuration and real booking/message tests once credentials arrive.

## 2. Proposal One: Website Expansion and Educational Content (One-Time)
- Advanced searchable Homeowner Education hub with category filters and featured guides.
- Twelve original, technician-reviewed HVAC cornerstone educational articles with sources, metadata, photos and internal links.
- Four short educational videos with transcripts/thumbnails if Olive is responsible for production; otherwise clearly specify client-provided assets and scope.
- Searchable FAQ hub, dedicated question pages and canonical answer structure.
- Custom article, FAQ and video publishing templates; HVAC glossary, author/reviewer/date metadata, relevant safety guidance and staff publishing workflow/tools.
- Optional private technician training resources, role-based access and ServiceTitan note references only if commissioned.
- One-time education structured data, cross-linking and launch content QA.

## 3. Proposal Two: Ongoing SEO and Content Management (Retainer)
- 52-week expert-led educational publishing program with seasonal edits and approved technician input.
- Continuous FAQ development, article and media updates, link maintenance, content quality reviews.
- Search Console/Bing/GA4 and keyword visibility monitoring, technical SEO improvements, content refreshes, and 30/60/90-day performance reporting plus recurring subsequent reporting.
- Google Business Profile, Yelp and Bing Places accuracy, posts, categories, photos and review management.
- Distribution and repurposing of articles and videos for social media, YouTube and other approved channels.
- Ongoing local/service-area content expansion, AI-search crawlability checks and measured improvements without ranking promises.

## Original Prospero Agreement Completion Audit
The signed agreement explicitly covers 40+ pages, ServiceTitan integration, text tool, integrated map, Google Reviews click-through, customer portal, scheduling widget; responsive design, copy, graphics, HTML/CSS/JS, device/browser tests, two revision rounds, image performance and full launch.
- [ ] 40+ distinct public pages: source App.jsx has 37 route patterns including dynamic routes and utility/auth pages. Count canonical published pages and verify status. A route pattern count does NOT prove the contract is met.
- [ ] ServiceTitan Scheduling Pro: NOT CONNECTED; requires tenant-specific scheduler ID, API key, allowed domain, configured zones, job mappings, hours, campaigns and booking tests.
- [ ] ServiceTitan Customer Portal: NOT CONNECTED; previous portal.example.com was a broken placeholder. Add account-specific portal Host URL and check registration/login.
- [ ] ServiceTitan Chat to Text: NOT CONNECTED; fetch exact provider-generated widget code and place at end of body, with sufficient mobile clearance for cookie controls; test actual message delivery.
- [ ] Map: inspect page and mobile interactions, URL and location accuracy.
- [ ] Google Reviews click-through: click-test the actual Google listing, logos, honest source labeling and link behavior.
- [ ] Devices, popular browsers, two rounds revisions, production launch: assemble dated QA/revision/deployment evidence.
- [ ] Forms, call links, lead events: execute live test submissions; confirm consent, success states, follow-up and tracking.
- [ ] Redirects/SEO: test each original URL and final canonical rather than assuming configuration.
- [ ] Site design, copy, graphics, HTML/CSS/JS and optimization: confirm across every actual published page and device.

## ServiceTitan Technical Integration Plan
Official setup reference: https://help.servicetitan.com/docs/sp-onboarding-part-4-install-scheduling-pro-on-your-website
- Scheduling Pro is an overlay launched from a CTA, not a permanently embedded rectangular iframe. The vendor install includes script https://embed.scheduler.servicetitan.com/scheduler-v1.js with data-api-key and data-schedulerid, and a CTA that invokes the scheduler. Source prepared: src/components/servicetitan/ServiceTitanBookingCTA.jsx. Desktop header, mobile menu and contact fallback are staged on this branch.
- Configure build-time public Vite variables VITE_SPOORS_ST_SCHEDULER_ID and VITE_SPOORS_ST_SCHEDULER_API_KEY from the actual account-generated snippet (not from guesses). Verify the correct staging and production domains are allowlisted. After deployment, make a real test booking; the fallback remains contact-us until configured.
- Customer Portal is an EXTERNAL link, not a booking iframe. In ServiceTitan Settings > Communications > Customer Portal, obtain the activated portal Host URL. Configure VITE_SPOORS_ST_PORTAL_URL and test login, invitation and mobile. Source navigation/footer fallback currently points to contact-us labeled Portal Access Help while URL is unavailable.
- Chat to Text is a distinct account-generated web widget. Get code at Settings > Integrations > Marketing Integrations > Chat to Text > Get Code. Install the exact supplied snippet before </body> and check it does not obscure the existing mobile menu, form, cookie consent or emergency CTA. Test a live message; do not invent a ServiceTitan text number, URL or embed script.
- This code branch does not establish a ServiceTitan connection or grant tenant access. Production deployment must be reconciled with the newer live Cloudflare Worker assets. Current GitHub main was last committed 2026-11-11 and Cloudflare script 'spoors' has a separate navigation-performance overlay. Do not deploy the older complete GitHub tree over the newer live build without diff/reconciliation.

## 14-Page Brief Versus Signed Scope
The 14-page brief is a client request, not a signed change order. The original contract covers reasonable site corrections, launch testing, navigation, maps, reviews, SEO-friendly implementation, content in roughly 40+ pages, and ServiceTitan widgets. The requested 12 original expert-led articles, videos, substantial searchable education/FAQ systems, publishing workflow, private technician training library, multi-platform listings management and year-long publishing/reporting are new components or recurring services; allocate these to proposals one and two. Original launch QA must not be re-billed as a new retainer.
