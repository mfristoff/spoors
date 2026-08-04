// Real customer reviews for Spoor's Heating & Air Conditioning (Auburn, CA) —
// sourced from Google, Yelp, Angi & HomeAdvisor. `source` tags the platform.
// `reviewsFor(service)` returns the most relevant reviews for a given secondary
// service page, prioritizing service-specific reviews then filling with general
// praise, rotated per page so different pages surface different voices.
// `highlights` marks the most conversion-friendly phrases for subtle red emphasis.
// `summary` is a 2–4 word label (problem solved / service) shown atop each card.

export const allReviews = [
  {
    name: "Joseph R.",
    rating: 5,
    summary: "Heat Pump Tune-Up",
    text: "I needed a tune up for my two heat pumps/heat function. I was very happy with Nikki in the front office. She was very helpful and with Wes the technician who discovered a capacitor in one of the units that was about to fail. He installed a new one in a very professional manner. I was very impressed with the employees and their attitude and will continue to use SPOOR to repair or service my heat pump heating or cooling problems.",
    tags: ["maintenance", "heating"],
    highlights: ["very professional manner", "continue to use SPOOR"],
  },
  {
    name: "William K.",
    rating: 5,
    summary: "Bad Thermostat, AC Fixed",
    text: "I had a problem with the air turning off before reaching desired temperature. The technician quickly solved the problem....a bad thermostat! Service was great!",
    tags: ["air-conditioning"],
    highlights: ["quickly solved the problem", "Service was great!"],
  },
  {
    name: "Mike Y.",
    rating: 5,
    summary: "Same-Day AC Rescue",
    text: "John Wiltshire was able to fit us in on this super hot day. Wasn't expecting his service until tomorrow. I'm so thankful he found the problem and it didn't cost an arm and a leg. Excellent work, very polite and explained what needed to be done. In no time we had AC again. I would highly recommend. Thank you, Spoor's Heating & Air.",
    tags: ["emergency", "air-conditioning"],
    highlights: ["fit us in on this super hot day", "didn't cost an arm and a leg", "In no time we had AC again"],
  },
  {
    name: "Andrea B.",
    rating: 5,
    summary: "New Furnace, Fair Price",
    text: "Garrett and team were excellent, they provided top professional service at a reasonable price. I am very happy with my new furnace and the whole installation process. Highly recommend!",
    tags: ["heating"],
    highlights: ["top professional service at a reasonable price", "Highly recommend!"],
  },
  {
    name: "Robert S.",
    rating: 5,
    summary: "Professional After a Nightmare",
    text: "We had a nightmare story with another HVAC company. So when we talked with Spoors to set up service, we were very happy with their customer service and the technician was very professional and had a great attitude. WE WILL USE SPOOR'S AGAIN FOR SURE.",
    tags: ["general"],
    highlights: ["WE WILL USE SPOOR'S AGAIN FOR SURE"],
  },
  {
    name: "Bernice L.",
    rating: 5,
    summary: "Free Out-of-Warranty Repair",
    text: "They installed a furnace and had to keep coming back to adjust it and even replaced a part. The warranty ran out a year later. But now, a year and a half later, they replaced it free of charge with a different brand.",
    tags: ["heating"],
    highlights: ["they replaced it free of charge with a different brand"],
  },
  {
    name: "William G.",
    rating: 5,
    summary: "Honest Advice, Thorough Work",
    text: "Mr Spoor does thorough work. He has been in the business a long time and knows the field. I did not know him and called his company to give me a bid on a project. He took time to do some measurements and convinced me of a better course of action. I respect his knowledge of the field and will call him first.",
    tags: ["general"],
    highlights: ["Mr Spoor does thorough work", "will call him first"],
  },
  {
    name: "Ron V.",
    rating: 4,
    summary: "Helpful Office & Tech",
    text: "Both Chris (front office) and Mike (tech) were helpful and accomodating.",
    tags: ["general"],
    highlights: ["helpful and accomodating"],
  },
  {
    name: "John H.",
    rating: 5,
    summary: "Quick Fix, Fair Price",
    text: "The guy knew exactly what he was doing. Took care of my problem and the price was reasonable. Very pleased with this company.",
    tags: ["general"],
    highlights: ["knew exactly what he was doing", "price was reasonable"],
  },
  {
    name: "Kathryn C.",
    rating: 4,
    summary: "Quick & Thorough",
    text: "They were quick and thorough and let us know when they would arrive.",
    tags: ["general"],
    highlights: ["quick and thorough"],
  },
  {
    name: "Ken P.",
    rating: 5,
    summary: "On Time, Good Work",
    text: "On time, and did fine job with good workmanship.",
    tags: ["general"],
    highlights: ["On time", "good workmanship"],
  },
  {
    name: "Patty C.",
    rating: 4,
    summary: "Great Customer Service",
    text: "They have a great customer service and well trained personel.",
    tags: ["general"],
    highlights: ["great customer service", "well trained personel"],
  },
  {
    name: "Bonnie R.",
    rating: 5,
    summary: "Fast Repair, Part On Hand",
    text: "Spoors was great. They were out right away, had the part on their truck, repaired my unit.",
    tags: ["emergency", "general"],
    highlights: ["out right away", "had the part on their truck", "repaired my unit"],
  },
  {
    name: "Rick T.",
    rating: 5,
    summary: "Professional Fall Service",
    text: "Spoors HVAC came to do a fall service of the heating and cooling system in our manufactured home. The technician was very professional and friendly.",
    tags: ["maintenance"],
    highlights: ["very professional and friendly"],
  },
  {
    name: "Linda W.",
    rating: 5,
    source: "yelp",
    summary: "AC Restored in a Heat Wave",
    text: "Spoor's saved the day during a brutal heat wave when our rental's AC suddenly stopped cooling. They sent a technician out the same afternoon, diagnosed the problem quickly, and had the unit running like new before the day was over. My tenants were thrilled and the whole experience was smooth and professional from start to finish.",
    tags: ["general", "air-conditioning", "emergency"],
    highlights: ["sent a technician out the same afternoon", "had the unit running like new", "smooth and professional from start to finish"],
  },
  {
    name: "Erik M.",
    rating: 5,
    source: "yelp",
    summary: "Polite, Responsive Install",
    text: "When Kevin and Robin showed up to install the unit, they were polite, responsive and did a great job.",
    tags: ["general", "ductless-mini-splits", "air-conditioning"],
    highlights: ["polite, responsive and did a great job"],
  },
  {
    name: "Jason R.",
    rating: 5,
    source: "yelp",
    summary: "Trusted for Years",
    text: "I was referred to Jeff (the owner) by my storage company, who has been using this company exclusively for years.",
    tags: ["general"],
    highlights: ["using this company exclusively for years"],
  },
  {
    name: "Patricia F.",
    rating: 5,
    source: "angi",
    summary: "Caught What Others Missed",
    text: "The general Manager came from 45 minutes away less than one day after I called for an estimate in the middle of December. He pointed out several problems needing to be addressed that two other contractors had missed, and performed a complete inspection of potential ducting leaks. All five seemed to work well as a team and moved efficiently while still in good humor. The unit has been heating like a dream, and the work comes with a warranty. We highly recommend this company — we didn't know there were any trustworthy contractors left these days!",
    tags: ["general", "heating"],
    highlights: ["two other contractors had missed", "heating like a dream", "we didn't know there were any trustworthy contractors left these days!"],
  },
  {
    name: "Michelle H.",
    rating: 5,
    source: "angi",
    summary: "Years of Reliable Service",
    text: "Rory has come to our house for several years and is always pleasant, quick and professional. We have never had a major issue with our systems and would not hesitate to use Spoors for any AC or furnace work required.",
    tags: ["general", "maintenance"],
    highlights: ["always pleasant, quick and professional", "would not hesitate to use Spoors"],
  },
  {
    name: "Jennifer M.",
    rating: 5,
    source: "angi",
    summary: "Fixed a Dangerous Leak",
    text: "The repair person showed up on time and was very professional. He did extra work beyond what I expected and located and fixed a dangerous leak in the propane heater. Cleaned up the outdoor unit and after himself and did the work efficiently. I was very happy with the service and intend to use them again next year.",
    tags: ["general", "heating"],
    highlights: ["extra work beyond what I expected", "located and fixed a dangerous leak", "very happy with the service"],
  },
  {
    name: "Bruce M.",
    rating: 5,
    source: "homeadvisor",
    summary: "Repaired, Saved Thousands",
    text: "Repaired my AC instead of replacing it, which everyone else wanted to do. Saved me thousands of dollars.",
    tags: ["general", "air-conditioning"],
    highlights: ["Repaired my AC instead of replacing it", "Saved me thousands of dollars"],
  },
  {
    name: "Debra V.",
    rating: 5,
    source: "homeadvisor",
    summary: "Repaired in Under 24 Hours",
    text: "The repair was completed in less than twenty-four hours from the time I contacted HomeAdvisor. The technician and office staff were very knowledgeable and even found me a warranty on my A.C. unit that I didn't know I had, which saved me money.",
    tags: ["general", "heating"],
    highlights: ["less than twenty-four hours", "very knowledgeable", "saved me money"],
  },
  {
    name: "Shayne R.",
    rating: 5,
    source: "homeadvisor",
    summary: "Seasonal Care for Rentals",
    text: "Garrett, Nikki and Mike were professional and timely and of significant value. I have rentals throughout California and find it extremely beneficial to my time when I am able to hire a quality contractor to perform the seasonal upkeep of my properties.",
    tags: ["general", "maintenance"],
    highlights: ["professional and timely", "a quality contractor to perform the seasonal upkeep"],
  },
];

const SERVICE_ORDER = [
  "heating",
  "air-conditioning",
  "indoor-air-quality",
  "emergency",
  "maintenance",
  "ductless-mini-splits",
  "swamp-coolers",
  "water-heater",
];

export function reviewsFor(service, count = 6) {
  const priority = allReviews.filter((r) => r.tags.includes(service));
  const generalPool = allReviews.filter((r) => r.tags.includes("general"));
  const offset = Math.max(0, SERVICE_ORDER.indexOf(service));
  const rotated = [...generalPool.slice(offset), ...generalPool.slice(0, offset)];

  const picked = [...priority];
  const seen = new Set(priority.map((r) => r.name + r.text));
  for (const r of rotated) {
    if (picked.length >= count) break;
    const key = r.name + r.text;
    if (!seen.has(key)) {
      picked.push(r);
      seen.add(key);
    }
  }
  return picked.slice(0, count);
}