import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";

const root = process.cwd();
const errors = [];
const approvedMobileSha = "07ae85e9975fefaeda17eebffa641f8ddf3e08ff6c47e00a8c509a3d8d93773a";

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function sha256(rel) {
  const data = fs.readFileSync(path.join(root, rel));
  return crypto.createHash("sha256").update(data).digest("hex");
}

const mobileVideo = "public/assets/video/spoors-home-hero-mobile.mp4";
const hero = read("src/pages/home/Hero.jsx");
const deferred = read("src/pages/home/DeferredHeroVideo.jsx");
const headers = read("public/_headers");
const indexHtml = read("index.html");

assert(
  fs.existsSync(path.join(root, mobileVideo)),
  `Missing protected mobile hero asset: ${mobileVideo}`
);

if (fs.existsSync(path.join(root, mobileVideo))) {
  assert(
    sha256(mobileVideo) === approvedMobileSha,
    "Protected mobile hero MP4 changed. Restore the approved asset or intentionally update the guard only after that exact replacement is approved."
  );
}

assert(
  hero.includes('const HERO_DESKTOP_VIDEO = "https://spoors.olivemedia.agency/wp-content/uploads/2026/07/hero.mp4";'),
  "Desktop home hero source changed unexpectedly."
);
assert(
  hero.includes('const HERO_MOBILE_VIDEO = "/assets/video/spoors-home-hero-mobile.mp4";'),
  "Approved local mobile hero source is missing."
);
assert(hero.includes("src={HERO_DESKTOP_VIDEO}"), "Home hero no longer uses the approved desktop source.");
assert(hero.includes("mobileSrc={HERO_MOBILE_VIDEO}"), "Home hero no longer uses the approved mobile source.");
assert(hero.includes("mobileEager"), "Home hero mobile video is no longer configured for immediate mount.");
assert(!hero.includes("mobilePoster="), "A static mobile hero fallback/poster was reintroduced.");
assert(!hero.includes("mobileSrc={HERO_DESKTOP_VIDEO}"), "Mobile hero was reverted to the desktop video.");
assert(!hero.includes("mobileSrc={HERO_VIDEO}"), "Mobile hero was reverted to a shared desktop/mobile source.");

assert(
  deferred.includes('return mobileSrc && mobileEager ? "mobile" : null;'),
  "Immediate mobile viewport initialization was removed from DeferredHeroVideo."
);
assert(deferred.includes("video.defaultMuted = true;"), "Safari/iPhone muted autoplay safeguard was removed.");
assert(deferred.includes("src={activeSrc}"), "DeferredHeroVideo source behavior changed from the approved implementation.");
assert(headers.includes("/assets/video/*"), "Cloudflare immutable video cache rule is missing.");
assert(
  !indexHtml.includes('media="(max-width: 767px)" href="https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/fed95821e_AdobeStock_66338212.jpeg'),
  "Obsolete static mobile hero image preload was reintroduced."
);

if (errors.length) {
  console.error("\nREGRESSION GUARD FAILED\n");
  for (const error of errors) console.error(`- ${error}`);
  console.error("\nOnly change a protected invariant when the user explicitly approves that exact change.\n");
  process.exit(1);
}

console.log("Regression guard passed. Protected Spoor's release invariants are intact.");
