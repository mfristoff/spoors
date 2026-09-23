import { blogArticles } from "@/lib/siteConfig";

const MERGE_TARGETS = {
  "Tips On Being Air Quality Aware & Wildfire Prepared In NorCal": "After the Wildfires: Servicing Your AC System for Smoke Damage",
  "How Wildfires Affect Indoor Air Quality": "After the Wildfires: Servicing Your AC System for Smoke Damage",
  "Tips For Keeping Pollen Out Of Your Home": "Breathe Easy: HVAC Tips for Allergy Sufferers",
  "Relieve Springtime Allergies With These Home Systems": "Breathe Easy: HVAC Tips for Allergy Sufferers",
  "How To Identify Poor Indoor Air Quality": "5 Warning Signs of Poor Indoor Air Quality in Auburn, CA",
  "Tips To Improve Indoor Air Quality In Your Home": "9 Simple Ways To Improve Indoor Air Quality",
  "Lower Indoor Humidity With These Tips": "How Humidity Affects Your Home & What To Do About It",
  "How To Beat Dry Skin During The Winter": "How Humidity Affects Your Home & What To Do About It",
  "6 Tips To Get Rid Of Your Home's Musty Smell": "How Humidity Affects Your Home & What To Do About It",
  "Bad Air Conditioner Unit Smells & How To Remove Them": "Common AC Smells & What They Mean",
  "Why Does My AC Smell Musty?": "Common AC Smells & What They Mean",
  "4 Weird Smells You Might Get When Turning Your Heater On": "Why Does My Heater Smell Like Something Is Burning?",
  "Furnace Sounds That Should Not Be Ignored": "Heater Sounds That Mean Trouble",
  "Why You Should Invest In HVAC Preventative Maintenance": "Annual HVAC Maintenance Checklist for Homeowners",
  "Heater & Air Conditioning Maintenance Checklist": "Annual HVAC Maintenance Checklist for Homeowners",
  "Seven Reasons To Join An HVAC Maintenance Plan": "Benefits Of An HVAC Maintenance Program",
  "4 Tips For Staying Cozy This Holiday Season": "How To Prepare For Winter With Your HVAC Unit",
  "Tips For A Healthier Heating Season": "How To Prepare For Winter With Your HVAC Unit",
  "Benefits Of Mid-Season Furnace Maintenance": "What You Can Do Yourself to Maintain Your Furnace",
  "Seven Tips To Take Care Of Your Heating System": "What You Can Do Yourself to Maintain Your Furnace",
  "5 Signs Of A Faulty Thermostat": "Signs Of A Malfunctioning Thermostat",
  "The Benefits Of A New 'Smart' AC Unit": "Reasons To Own A Programmable Thermostat",
  "10 Signs Of A Dying AC Unit": "When Is It Time To Replace Your HVAC System?",
  "6 Air Conditioning Myths That Are Costing You Money": "Air Conditioning Myths: 6 Misconceptions That Impact Home Comfort",
  "5 Air Conditioning Mistakes That Increase Utility Bills": "5 Ways To Reduce Household Cooling Costs",
  "Why You Shouldn't Turn Off The AC When You're Not Home": "5 Ways To Reduce Household Cooling Costs",
  "Keep Your Home Energy-Efficient All Summer": "5 Ways To Reduce Household Cooling Costs",
  "3 Signs Your HVAC System Is Energy Efficient": "5 Ways To Reduce Household Cooling Costs",
  "Heating & Energy-Saving Myths": "10 Ways To Lower Heating Costs",
  "7 Common Home Heating Mistakes": "10 Ways To Lower Heating Costs",
  "Easy & Effective Ways To Cool A Windowless Room": "Ductless Mini Splits: 6 Benefits Of A Zoned Heating System",
  "How To Cool & Heat A Room Without Ductwork": "Ductless Mini Splits: 6 Benefits Of A Zoned Heating System",
  "Why You Shouldn't Wait To Fix Your Heat": "Heater Not Working? Here's 4 Reasons Why",
  "5 Reasons You Should Hire Our HVAC Repair Service": "Questions To Ask When Selecting An HVAC Company"
};

const SUPPORTING = new Set([
  "Signs That Your AC Is Due For A Tune-Up", "Common AC Repairs That Routine Maintenance Can Help Prevent",
  "Fall HVAC Maintenance Tips", "Why Spring HVAC Maintenance Is Important", "Should You Repair or Replace Your Air Conditioner?",
  "What To Expect During An HVAC Unit Replacement", "HVAC Warranties: Are They Worth It?"
]);
const COMMERCIAL_REVIEW = new Set(["Who is Spoor's Heating and Air Conditioning?", "Spoors Heating and Air Conditioning", "Spoor's Services", "Alternative Heating Options For Winter"]);
const GSC_REVIEW = new Set(["Tips To Deter Bugs From The HVAC Unit", "Top Mistakes That Increase Utility Bills"]);

const textOf = (body = []) => body.flatMap((block) => typeof block === "string" ? [block] : block.paragraphs || []).join(" ");
const words = (value) => value.trim().split(/\s+/).filter(Boolean).length;
const serviceFor = (category) => ({
  "Air Conditioning": "/services/air-conditioning/", Heating: "/services/heating/",
  "Indoor Air Quality": "/services/indoor-air-quality/", Maintenance: "/services/maintenance-tune-ups/",
  Company: "/services/"
}[category] || "/services/");

export const blogAuditTable = blogArticles.map((article, index, all) => {
  const mergeTarget = MERGE_TARGETS[article.title];
  const status = mergeTarget ? "Merge into named primary article"
    : SUPPORTING.has(article.title) ? "Retain as supporting article"
    : COMMERCIAL_REVIEW.has(article.title) ? "Review for possible consolidation into a commercial page"
    : GSC_REVIEW.has(article.title) ? "Review against Search Console before redirecting"
    : "Retain and expand";
  const related = all.filter((item) => item.category === article.category && item.slug !== article.slug).slice(0, 3);
  return {
    currentTitle: article.title,
    currentUrl: `/resources/blog/${article.slug}/`,
    originalPublicationDate: article.isoDate,
    currentArticleBodyWordCount: words(textOf(article.body)),
    status,
    primaryInformationalQuery: article.primaryQuery,
    supportingTopics: article.supportingTopics,
    primaryLocalRelationship: article.primaryLocalRelationship,
    relevantServicePage: serviceFor(article.category),
    relevantServiceAreaPage: article.primaryLocalRelationship ? "/service-areas/auburn/" : "",
    relatedArticles: related.map((item) => `/resources/blog/${item.slug}/`),
    recommendedInternalLinkAnchorText: article.category === "Company" ? "Spoor's HVAC services" : `${article.category.toLowerCase()} services in Auburn`,
    claimsRequiringVerification: /health|mold|refrigerant|energy|saving|cost|warranty|wildfire/i.test(textOf(article.body)) ? "Verify safety, health, energy, cost, or equipment claims against an authoritative source." : "Confirm any changing technical or local claims during editorial review.",
    recommendedAction: mergeTarget ? `Consolidate useful material into “${mergeTarget}” after Search Console review. Preserve this URL for now.` : `${status}. Preserve the current URL and publication date.`,
    auditOrder: index + 1
  };
});