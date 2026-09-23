// Blog article metadata imported from spoors.olivemedia.agency/blog/
// 5 articles have full structured body content (in siteConfig.js).
// The remaining 89 articles have metadata + excerpt as body.
// Articles are sorted newest-first within each page; combined ordering approximates the source.

const _IMG =
  "https://media.base44.com/images/public/6a60ee8a5d61b09b929d4345/";
const AUTHOR = "Jeff Spoor";

const CATEGORY_IMAGES = {
  "Air Conditioning": [
    _IMG + "b3ec9b18a_AdobeStock_65737788.jpeg",
    _IMG + "fed95821e_AdobeStock_66338212.jpeg",
    _IMG + "d877a2d9b_AdobeStock_419922957.jpeg",
    _IMG + "8ecf7e092_AdobeStock_289084367.jpeg",
    _IMG + "25c356f1d_AdobeStock_319218928.jpeg",
    _IMG + "33aaddfaf_AdobeStock_381066711.jpeg",
    _IMG + "6c3aea77e_AdobeStock_580209588.jpeg",
    _IMG + "777a02c57_AdobeStock_596579616.jpeg",
    _IMG + "7dc8f7015_AdobeStock_482908998.jpeg",
    _IMG + "439d96621_AdobeStock_499333613.jpeg",
  ],
  Heating: [
    _IMG + "36a13156d_AdobeStock_150249395.jpeg",
    _IMG + "714690075_AdobeStock_355728990.jpeg",
    _IMG + "4f14fb0f8_AdobeStock_197213379.jpeg",
    _IMG + "aa90a5fc5_AdobeStock_515255157.jpeg",
    _IMG + "25c356f1d_AdobeStock_319218928.jpeg",
  ],
  "Indoor Air Quality": [
    _IMG + "6f7f3eda2_AdobeStock_268674378.jpeg",
    _IMG + "e3f4c7187_AdobeStock_450097271.jpeg",
    _IMG + "e895156ef_AdobeStock_541231422.jpeg",
  ],
  Maintenance: [
    _IMG + "7dc8f7015_AdobeStock_482908998.jpeg",
    _IMG + "8ecf7e092_AdobeStock_289084367.jpeg",
    _IMG + "33aaddfaf_AdobeStock_381066711.jpeg",
    _IMG + "777a02c57_AdobeStock_596579616.jpeg",
    _IMG + "6c3aea77e_AdobeStock_580209588.jpeg",
  ],
  Company: [
    _IMG + "25c356f1d_AdobeStock_319218928.jpeg",
    _IMG + "6f3579a4f_AdobeStock_318148618.jpeg",
    _IMG + "62f211996_AdobeStock_1167895322.jpeg",
    _IMG + "99d8f9440_AdobeStock_117354486.jpeg",
  ],
};

const _counters = {};
function imgForCategory(cat) {
  const pool = CATEGORY_IMAGES[cat] || CATEGORY_IMAGES["Air Conditioning"];
  _counters[cat] = (_counters[cat] || 0) + 1;
  return pool[(_counters[cat] - 1) % pool.length];
}

function meta(slug, title, category, date, isoDate, readTime, excerpt) {
  return {
    slug,
    title,
    category,
    date,
    isoDate,
    author: AUTHOR,
    readTime,
    excerpt,
    image: imgForCategory(category),
    body: [excerpt],
  };
}

export const additionalBlogArticles = [
  // ── Page 1 grid ──
  meta("merv-ratings-what-do-they-mean", "MERV Ratings: What Do They Mean?", "Indoor Air Quality", "Jul 26, 2024", "2024-07-26", "3 mins read", "When shopping for a new HVAC air filter, homeowners will discover that there are many different air filters with a wide range of Minimum Efficiency Reporting Value (MERV) ratings, and attempting to determine which one best fits your needs can often be overwhelming. Below, Spoor's Heating & Air Conditioning outlines what MERV ratings are and…"),
  meta("five-common-hvac-problems-that-require-an-expert", "5 Common HVAC Problems That Require an Expert", "Air Conditioning", "Nov 10, 2025", "2025-11-10", "5 mins read", "While it can feel empowering to finish your own repairs, installations, or projects, 'DIY' and 'HVAC' are two acronyms that should never go together. Conducting AC repairs without an HVAC professional may lead to hefty legal fines or accidental exposure to hazardous substances such as chlorofluorocarbons or mold spores. Below, we outline air conditioner repairs…"),
  meta("why-does-my-heater-smell-like-its-burning", "Why Does My Heater Smell Like Something Is Burning?", "Heating", "Oct 13, 2023", "2023-10-13", "4 mins read", "As the icy embrace of the winter season arrives in Northern California, homeowners and business owners throughout the region venture indoors to beat the chill by firing on their furnaces. If it's the first time firing up your heater this season, you might notice it emits an odd odor that smells like something is burning…"),
  meta("spoors-heating-and-air-conditioning", "Spoors Heating and Air Conditioning", "Company", "May 25, 2012", "2012-05-25", "1 min read", "Who are we? Our family owned company provides the Sierra Foothill area with heating and air conditioning products and services. Our business model is simple — work is always 100 percent guaranteed to be right, or it is fixed again and again if necessary, until you – our customer – is happy. No surprises guaranteed."),
  meta("reasons-to-join-an-hvac-maintenance-plan", "Seven Reasons To Join An HVAC Maintenance Plan", "Maintenance", "May 8, 2019", "2019-05-08", "4 mins read", "It's a question we hear at Spoor's Heating & Air Conditioning all the time — why is HVAC maintenance important? While we espouse the many benefits of HVAC maintenance, there's now an easy way to make sure your system receives the care it needs. Here are seven reasons to join our Home Comfort Club in Auburn, CA…"),
  meta("ductless-mini-splits-6-benefits-of-a-zoned-heating-system", "Ductless Mini Splits: 6 Benefits Of A Zoned Heating System", "Air Conditioning", "Jan 13, 2026", "2026-01-13", "4 mins read", "Have rooms in your home that never seem to warm up, while others feel toasty no matter how you set your thermostat? Installing a ductless mini split system could be the perfect solution! These innovative HVAC systems provide zoned heating and cooling, allowing homeowners to set different temperatures in individual rooms throughout their house."),
  meta("bad-air-conditioner-unit-smells", "Bad Air Conditioner Unit Smells & How To Remove Them", "Air Conditioning", "Apr 15, 2024", "2024-04-15", "3 mins read", "An air conditioner that smells musty, stale, or overall gross can be disheartening. No one wants to invite guests over to a place where the air smells bad! But before you start to worry about if you need expensive AC repairs or an entirely new unit, call Spoor's Heating & Air Conditioning. Sometimes, all that's…"),

  // ── Page 2 grid ──
  meta("why-does-my-ac-smell-musty", "Why Does My AC Smell Musty?", "Air Conditioning", "Jun 30, 2023", "2023-06-30", "3 mins read", "Our home air conditioning systems keep us cool and comfortable during the hottest of days. However, a pervasive musty smell coming from your home's air conditioning system can quickly ruin an otherwise relaxing day spent at home. Worse yet, a stale or musty smell coming from your air conditioning system could be a sign of…"),
  meta("top-mistakes-that-increase-utility-bills", "Top Mistakes That Increase Utility Bills", "Air Conditioning", "Aug 15, 2023", "2023-08-15", "5 mins read", "As the summer season approaches its peak, it's time to start thinking about the high-use season with regard to your air conditioning system. We all know how summertime utility bills can soar, so understanding and taking advantage of best practices for optimal energy efficiency is critical. Yet, there are many different errors people make when…"),
  meta("5-signs-of-a-faulty-thermostat", "5 Signs Of A Faulty Thermostat", "Air Conditioning", "Jun 14, 2024", "2024-06-14", "3 mins read", "As the control center for your home's entire heating and cooling system, your thermostat plays a crucial role in maintaining the comfort of your home's indoor environment. Without a properly functioning thermostat, it will be nearly impossible to regulate your household's temperature. Being able to identify the signs of a faulty thermostat is key to…"),
  meta("relieve-springtime-allergies", "Relieve Springtime Allergies With These Home Systems", "Indoor Air Quality", "Jun 23, 2020", "2020-06-23", "3 mins read", "Here at Spoor's Heating & Air Conditioning, we consider ourselves to be in the business of caring for people. Accordingly, we believe an essential part of caring for someone is making sure they're comfortable at home — all throughout the year. That's why, this allergy season, the experts at our HVAC company have decided to…"),
  meta("benefits-of-a-new-smart-ac-unit", "The Benefits Of A New 'Smart' AC Unit", "Air Conditioning", "Mar 28, 2024", "2024-03-28", "3 mins read", "Air conditioners have significantly evolved in their capabilities over the last 20 to 30 years. Previously, all AC units could do was turn on and off the fan to cool your home. Now, you can regulate your entire household temperature by simply tapping on your smartphone. Smart central air conditioning pays for itself in added benefits…"),
  meta("10-signs-of-a-dying-ac-unit", "10 Signs Of A Dying AC Unit", "Air Conditioning", "Jun 18, 2021", "2021-06-18", "5 mins read", "While air conditioning systems do have a long lifespan, like all appliances, there will come a day when the AC will need to be replaced. No homeowner wants to be trapped inside a house on a hot California day with no working AC. Spoor's Heating & Air Conditioning is here to teach you about some…"),
  meta("hvac-warranties", "HVAC Warranties: Are They Worth It?", "Maintenance", "Feb 15, 2025", "2025-02-15", "3 mins read", "The world of HVAC warranties can be incredibly confusing. With so many options available, you want to be sure that you are making the right investment. Fortunately, our team can help. Since 1925, Spoor's Heating & Air Conditioning has assisted families with their HVAC questions and concerns. With decades of industry experience, our team can help…"),
  meta("heater-and-air-conditioning-maintenance-checklist", "Heater & Air Conditioning Maintenance Checklist", "Maintenance", "Aug 4, 2011", "2011-08-04", "3 mins read", "Maintain your equipment to prevent future problems and unwanted costs. Keep your cooling and heating system at peak performance by having a contractor do annual preseason check-ups. Contractors are busy once summer and winter come, so it's best to check the cooling system in the spring and the heating system in the fall."),

  // ── Page 3 grid ──
  meta("furnace-sounds-that-should-not-be-ignored", "Furnace Sounds That Should Not Be Ignored", "Heating", "Feb 29, 2024", "2024-02-29", "3 mins read", "When you turn on your furnace, much like any other mechanical appliance, it's bound to make some noise while in operation. However, it's important for homeowners to be able to distinguish the sounds a furnace typically makes from noises that indicate something is wrong. Below, Spoor's Heating & Air Conditioning outlines five furnace sounds that…"),
  meta("why-is-my-ac-so-loud-common-hvac-noises", "Why Is My AC So Loud? Common HVAC Noises Explained", "Air Conditioning", "Jul 25, 2025", "2025-07-25", "4 mins read", "Has your HVAC system been particularly noisy lately? If your AC's suddenly making loud or unusual sounds, it could be an indication that something's gone wrong within your system. While a noisy air conditioner may seem like a minor inconvenience to some, ignoring these noises can lead to more significant problems, such as reduced cooling…"),
  meta("how-humidity-affects-your-home", "How Humidity Affects Your Home & What To Do About It", "Indoor Air Quality", "Aug 25, 2020", "2020-08-25", "3 mins read", "California's weather is notoriously hot and humid — something residents have to contend with even inside their homes. In particular, abnormal humidity levels indoors can cause a myriad of issues ranging from mild discomfort to higher utility bills. When humidity is too low, your family could also experience serious health complications, including sinus irritation, joint stiffness…"),
  meta("fall-hvac-maintenance-tips", "Fall HVAC Maintenance Tips", "Maintenance", "Oct 8, 2019", "2019-10-08", "3 mins read", "A properly functioning heating system is a home's most valuable asset when those chilly wintertime days roll into Northern California. To keep everyone feeling cozy through the fall and into the winter, make use of these HVAC maintenance tips from our technicians at Spoor's Heating & Air Conditioning."),
  meta("four-tips-for-staying-cozy-this-holiday-season", "4 Tips For Staying Cozy This Holiday Season", "Heating", "Dec 19, 2025", "2025-12-19", "4 mins read", "The influx of guests, cooking, and company brought on by the holiday season does not exempt homeowners from California's cool, wet winters. Especially in the Meadow Vista and Sierra Foothills areas, winter can bring about periods of intense cold, sustained winds, and drought. Under these conditions, it can be difficult to maintain a warm, cozy, and…"),
  meta("keep-your-home-energy-efficient", "Keep Your Home Energy-Efficient All Summer", "Air Conditioning", "Jun 26, 2020", "2020-06-26", "4 mins read", "As the summer heat begins to rise, most people are eager to lower the temperatures in their homes to compensate. While keeping temperatures cool can be a matter of safety and comfort, blasting the AC all day long can send utility costs soaring. But, there are things that you can do to help lower costs without…"),
  meta("what-you-can-do-yourself-to-maintain-your-furnace", "What You Can Do Yourself to Maintain Your Furnace", "Heating", "Dec 9, 2010", "2010-12-09", "4 mins read", "Preventive Furnace Maintenance — Keep it Clean! Like all appliances and home machinery, you want to keep your furnace clean. A build up of dirt and dust can mean a breakdown in the efficiency of your heating system. Nowadays, who can afford to waste anything, let alone fuel?"),

  // ── Page 4 grid ──
  meta("how-to-identify-poor-indoor-air-quality", "How To Identify Poor Indoor Air Quality", "Indoor Air Quality", "Oct 26, 2022", "2022-10-26", "3 mins read", "Your home should be your sanctuary, a place for peace and rest. However, a home with poor indoor air quality is an invisible hazard to your health and the health of your household. The air quality in your home can cause illness, increase dust, cause bad odors, and more. Poor indoor air quality can be…"),
  meta("tips-to-deter-bugs-from-the-hvac-unit", "Tips To Deter Bugs From The HVAC Unit", "Maintenance", "Mar 26, 2021", "2021-03-26", "3 mins read", "With an abundance of food, access to water, and plenty of dark corners to build a nest in, our homes are every pest's dream paradise. As such, pests are constantly hunting for new avenues of entry into our abodes. Crawling under doors, squeezing through cracks, descending chimneys — pests will use any and all opportunities…"),
  meta("benefits-of-an-hvac-maintenance-program", "Benefits Of An HVAC Maintenance Program", "Maintenance", "Jul 10, 2023", "2023-07-10", "4 mins read", "The last thing anyone wants is to have their heating, ventilation, and air conditioning (HVAC) system fail on them on 90-degree days with high humidity levels. Just about everyone hopes this HVAC issue never happens, particularly when they need the cool comfort of their HVAC system the most. Unfortunately, if your system is very old…"),
  meta("air-quality-and-wildfire-preparedness-in-norcal", "Tips On Being Air Quality Aware & Wildfire Prepared In NorCal", "Indoor Air Quality", "Nov 15, 2018", "2018-11-15", "8 mins read", "As destructive wildfires persist — burning thousands of acres of land and filling the air with acrid smoke — millions of Northern California home and business owners are met with an air pollution nightmare. Smoke and soot from the widespread wildfire increase levels of particulate matter concentration, plummeting indoor and outdoor air quality."),
  meta("easy-and-effective-ways-to-cool-a-windowless-room", "Easy & Effective Ways To Cool A Windowless Room", "Air Conditioning", "Jan 30, 2023", "2023-01-30", "3 mins read", "Windows can supply rooms with natural light and much-needed air circulation. Without the crucial airflow that windows provide, rooms can become disproportionately hot, stuffy, and uncomfortable compared to the rest of the home. Whether it's a basement, office space, man cave, attic, garage, or any other windowless room — we at Spoor's Heating & Air…"),
  meta("should-you-get-a-whole-house-or-single-room-air-purifier", "Should You Get A Whole House Or Single Room Air Purifier?", "Indoor Air Quality", "Apr 8, 2021", "2021-04-08", "4 mins read", "With spring in full bloom, many homeowners are searching for ways to manage their seasonal allergies, and air purifiers can be an excellent solution. However, deciding between a whole house air purifier or room air purifiers can be difficult. There are many lists and information available online, and it can feel like a lot to…"),
  meta("what-to-expect-during-an-hvac-unit-replacement", "What To Expect During An HVAC Unit Replacement", "Air Conditioning", "Jan 15, 2024", "2024-01-15", "3 mins read", "An HVAC emergency can be stressful! From the initial panic to finding a professional HVAC company to help, HVAC emergencies are often a headache for homeowners and business owners alike! To ease the process, Spoor's Heating & Air Conditioning has broken down the steps of an HVAC unit installation into simple and easy-to-understand terms."),

  // ── Page 5 grid ──
  meta("lower-indoor-humidity-with-these-tips", "Lower Indoor Humidity With These Tips", "Indoor Air Quality", "May 25, 2021", "2021-05-25", "3 mins read", "Humidity can keep your skin hydrated, ease sinus aggravation, and may even help keep you healthy during flu season. However, too much of a good thing can be bad. High humidity levels indoors can lead to mold and mildew growth, cause paint and wallpaper to peel, weaken or damage your home's infrastructure, and is overall…"),
  meta("ac-not-cooling-six-myths-that-impact-performance", "Air Conditioning Myths: 6 Misconceptions That Impact Home Comfort", "Air Conditioning", "Sep 6, 2025", "2025-09-06", "5 mins read", "Nowadays, myths and misconceptions surrounding home air conditioning systems abound, and while some are harmless, others can actually impact your unit's performance and make your home's indoor environment less comfortable. Since 1925, Spoor's Heating & Air Conditioning has provided professional AC services to homes and businesses throughout Auburn, CA, and the surrounding areas!"),
  meta("improve-indoor-air-quality", "Tips To Improve Indoor Air Quality In Your Home", "Indoor Air Quality", "Aug 6, 2019", "2019-08-06", "8 mins read", "Heating and cooling technicians don't just make sure you have comfortable, warm or cool conditioned air in your home, but we also offer solutions for making that air cleaner and healthier to breathe. Poor indoor air quality can lead to aggravated allergy symptoms and respiratory illnesses, so to avoid health concerns and keep your family…"),
  meta("reasons-to-own-a-programmable-thermostat", "Reasons To Own A Programmable Thermostat", "Air Conditioning", "Aug 13, 2024", "2024-08-13", "3 mins read", "When the summer temperatures start to rise, energy usage can skyrocket. Families may be desperately blasting their air conditioning system – looking for any relief from the brutal heat. Luckily, there are ways to be conscientious about your household energy consumption. With a modern, HVAC technician-approved programmable thermostat, you can track your…"),
  meta("how-does-an-evaporative-cooler-work", "How Does An Evaporative Cooler Work?", "Air Conditioning", "Feb 21, 2022", "2022-02-21", "3 mins read", "Evaporative coolers, also known as swamp coolers, are efficient and cost-effective alternatives to traditional air conditioning systems using moisture to cool air. If you've ever gone swimming on a warm day, you'll already be familiar with the process of evaporative cooling. When you exit a pool, the air hits your wet skin, and you feel…"),
  {
    slug: "why-is-my-ac-leaking-water",
    title: "Why Is My AC Leaking Water? Common Reasons & What To Do",
    category: "Air Conditioning",
    date: "Aug 12, 2025",
    isoDate: "2025-08-12",
    dateModified: "2026-07-29",
    modifiedDate: "Jul 29, 2026",
    author: AUTHOR,
    readTime: "8 mins read",
    excerpt: "Water near your indoor AC unit usually points to a blocked condensate drain, a frozen evaporator coil, or a damaged drain pan. Learn what you can check safely and when to turn the system off.",
    image: imgForCategory("Air Conditioning"),
    imageAlt: "HVAC technician inspecting an indoor air conditioning system for a water leak",
    seoTitle: "Why Is My AC Leaking Water? Causes & Safe Next Steps",
    metaDescription: "Why is your AC leaking water? Learn common causes, safe homeowner checks, when to shut it off, and when to call for AC repair in Auburn, CA.",
    canonical: "https://www.spoorsheatingandac.com/resources/blog/why-is-my-ac-leaking-water/",
    primaryQuery: "why is my AC leaking water",
    supportingTopics: ["clogged condensate drain", "frozen evaporator coil", "damaged drain pan", "safe AC leak checks"],
    primaryLocalRelationship: "Auburn and Placer County cooling season",
    contextualInternalLinks: [
      { label: "air conditioning services", path: "/services/air-conditioning/" },
      { label: "seasonal HVAC maintenance", path: "/services/maintenance-tune-ups/" },
      { label: "AC frozen coil guidance", path: "/resources/blog/4-common-reasons-for-a-frozen-ac-and-what-to-do/" },
      { label: "HVAC service in Auburn", path: "/service-areas/auburn/" },
      { label: "request AC service", path: "/contact-us/" }
    ],
    relatedArticles: ["4-common-reasons-for-a-frozen-ac-and-what-to-do", "signs-that-your-ac-is-due-for-a-tune-up", "common-ac-repairs"],
    sources: [
      { name: "Carrier: Why Is My AC Leaking Water?", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/why-is-my-ac-leaking-water/" },
      { name: "Trane: AC Leaking Water", url: "https://www.trane.com/residential/en/resources/troubleshooting/air-conditioners/ac-leaking-water/" },
      { name: "U.S. EPA: A Brief Guide to Mold, Moisture and Your Home", url: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home" },
      { name: "ENERGY STAR: Heat & Cool Efficiently", url: "https://www.energystar.gov/saveathome/heating-cooling" }
    ],
    claimsRequiringVerification: ["A technician should confirm the source of any active leak, refrigerant issue, electrical exposure, or suspected microbial growth in the home."],
    body: [
      "Water around your indoor air conditioning equipment is not normal, even though the system naturally produces condensation. The most common causes are a clogged condensate drain, a frozen evaporator coil that is thawing, or a cracked or rusted drain pan. Turn the system off if water is reaching electrical parts, spreading into walls or ceilings, or continuing to pool. You can safely check the filter, thermostat, and visible drain area, but refrigerant, wiring, internal coils, and concealed drainage problems require professional service.",
      {
        heading: "Is AC condensation normal, or is there a leak?",
        paragraphs: [
          "Your air conditioner removes heat and moisture from indoor air. Moisture condenses on the cold evaporator coil, drips into a drain pan, and leaves through a condensate drain line. That controlled drainage is normal. You may see water dripping from the outdoor end of the condensate line while the AC runs on a warm day.",
          "Water on the floor, inside a utility closet, below an attic air handler, or around a ceiling vent is different. It means condensation is no longer following the intended drainage path. The source can be simple, such as a blocked line, or more involved, such as a frozen coil, damaged pan, loose connection, or installation problem.",
          "Do not assume clear water is harmless. Even a slow leak can wet insulation, drywall, flooring, or framing. The U.S. Environmental Protection Agency recommends drying wet materials quickly, generally within 24 to 48 hours, to reduce the chance of mold growth. Fix the source first, then dry the affected area completely."
        ]
      },
      {
        heading: "What commonly causes an air conditioner to leak water?",
        paragraphs: [
          "A clogged condensate drain is one of the most frequent causes. Dust, dirt, and biological buildup can collect inside the drain line. Water then backs up into the pan and may overflow near the indoor unit. Some systems have a safety switch that stops operation when the water level rises, but not every installation has one or has one in every drain pan.",
          "A frozen evaporator coil can also create a large amount of water when the ice melts. Restricted airflow from a dirty filter, blocked return, dirty coil, or blower problem can contribute to freezing. Low refrigerant can also be involved, but refrigerant diagnosis and repair are not homeowner tasks. Ice on the coil or copper line, weak airflow, and poor cooling are useful clues.",
          "Drain pans can rust, crack, shift, or lose a secure drain connection. An older metal pan may develop a small opening that leaks only while the system runs. An attic unit can also have a secondary pan beneath it. Water in that pan is a warning that the primary drainage system needs attention.",
          "A disconnected, poorly sloped, or damaged drain line can release water before it reaches the proper outlet. Installation issues may become visible after equipment service, vibration, or movement. A condensate pump can also fail in systems that cannot drain by gravity.",
          "Heavy condensation on the outside of an air handler or duct can look like a plumbing leak. Missing insulation, air leakage, or humid air reaching a cold surface may cause this moisture. A technician can determine whether the water comes from inside the drainage system or forms on an exterior surface."
        ]
      },
      {
        heading: "What can you check safely before calling for service?",
        paragraphs: [
          "Start at the thermostat. Set the system to off if water is actively pooling. If the fan setting is on, change it to auto after the problem has been evaluated. Running the fan continuously with a frozen coil can move moisture where it does not belong.",
          "Check the air filter without opening sealed equipment panels. Replace a visibly dirty disposable filter with the correct size and airflow direction. A clean filter may restore airflow, but it does not prove that a frozen coil or leak is resolved. If you see ice, leave the cooling mode off and arrange an inspection.",
          "Look for obvious water around the unit, drain pan, and accessible drain connection. Move stored belongings away from the wet area. Use towels or a wet vacuum on standing water only when you can do so without approaching wiring, controls, or an energized appliance.",
          "Check the outdoor end of the condensate line if it is easy to identify and reach from the ground. Do not climb onto a roof or enter an unsafe attic. Do not pour harsh chemicals into a line unless the equipment manufacturer or your HVAC professional specifically directs you to do so.",
          { segments: ["If the system is cooling poorly or the coil has frozen, review these ", { label: "common reasons for a frozen AC", to: "/resources/blog/4-common-reasons-for-a-frozen-ac-and-what-to-do/" }, ". A professional ", { label: "seasonal HVAC maintenance", to: "/services/maintenance-tune-ups/" }, " visit can also identify drainage, airflow, and coil issues before they cause water damage."] }
        ]
      },
      {
        heading: "When should you shut the AC off?",
        paragraphs: [
          "Turn the cooling system off when water is near electrical components, dripping through a ceiling, spreading into walls, overflowing quickly, or returning after you remove standing water. Also turn it off if you see ice on the indoor coil or refrigerant line. Continued operation can create more meltwater and place additional strain on the equipment.",
          "If you smell burning, see sparking, or find water inside an electrical panel, keep your distance and do not touch the equipment. Use the breaker only if you can reach it without crossing a wet area. Call an HVAC professional for the equipment and the appropriate emergency service if there is an immediate electrical or fire hazard.",
          "A small amount of moisture at the outdoor drain outlet does not require shutdown. Water inside the home, however, deserves prompt attention. The location and rate of leakage matter more than the apparent cleanliness of the water."
        ]
      },
      {
        heading: "When does an AC water leak need professional repair?",
        paragraphs: [
          "Schedule professional service when the drain repeatedly clogs, the pan is damaged, the condensate pump is not working, the coil freezes, cooling performance drops, or the source is hidden. A technician can clear and test the drainage system, inspect the pan and fittings, measure airflow, evaluate the blower, and diagnose the cause of a frozen coil.",
          "Do not open refrigerant circuits or attempt to add refrigerant. Low refrigerant usually indicates a condition that requires trained diagnosis. Electrical controls, float switches, pumps, and attic drainage also need careful testing because an incomplete repair can allow the leak to return.",
          { segments: ["Spoor's Heating & Air Conditioning provides ", { label: "air conditioning service", to: "/services/air-conditioning/" }, " for homeowners who need the source identified and corrected. If your home is nearby, learn about ", { label: "HVAC service in Auburn", to: "/service-areas/auburn/" }, "."] }
        ]
      },
      {
        heading: "Why do AC leaks show up during Auburn's cooling season?",
        paragraphs: [
          "An air conditioner produces more condensate when it runs for longer periods and removes more moisture from indoor air. That extra drainage can expose a partial clog, weak pump, damaged pan, or poor connection that was not obvious during lighter use. This is a practical local relationship, not a different type of AC problem. The same drainage and airflow principles apply throughout Placer County.",
          "A spring inspection gives a technician a chance to test the drain, inspect the pan, verify airflow, and look for signs of previous overflow before the system enters regular cooling use. Maintenance cannot prevent every leak, but it can reveal conditions that make one more likely."
        ]
      },
      {
        heading: "Common questions about leaking air conditioners",
        paragraphs: [
          "Can you run an AC that is leaking water? It is safer to turn it off when water is inside the home or the cause is unknown. Continued operation can produce more condensate. Never run it when water is near electrical parts or when the coil is frozen.",
          "Does a dirty filter cause an AC to leak? A dirty filter can restrict airflow and contribute to a frozen evaporator coil. Water may overflow when the ice melts. A filter change is a useful first check, but persistent freezing needs professional diagnosis.",
          "Can a clogged drain line clear itself? A partial blockage may drain slowly and appear to improve, but buildup usually remains. Repeated overflow calls for proper cleaning and a drainage test.",
          "Is water outside near the AC normal? Water at the condensate drain outlet can be normal. Water leaking from the indoor unit, ceiling, wall, or equipment platform is not normal and should be investigated."
        ]
      },
      {
        heading: "Get the leak checked before water spreads",
        paragraphs: [
          { segments: ["Turn the system off if the leak is active, protect the surrounding area without approaching electrical parts, and arrange service. To have Spoor's inspect the condensate drain, coil, pan, airflow, and safety controls, ", { label: "request AC service online", to: "/contact-us/" }, "."] }
        ]
      }
    ]
  },
  meta("6-tips-to-get-rid-of-your-homes-musty-smell", "6 Tips To Get Rid Of Your Home's Musty Smell", "Indoor Air Quality", "Jul 15, 2021", "2021-07-15", "3 mins read", "Mold thrives in humid, wet environments, making your AC unit the perfect breeding ground and place for mold and mildew to grow and spread. Mold can impact a resident's health and can cause your AC unit to work inefficiently. If the mold continues to grow and spread unchecked, a musty smell can circulate through the…"),

  // ── Page 6 grid ──
  meta("alternative-heating-options-for-winter", "Alternative Heating Options For Winter", "Heating", "Jan 29, 2021", "2021-01-29", "3 mins read", "Winter storms can be a nice time to cozy up with your family and take a moment to relax until the storm subsides. However, if the power goes out, you can be facing a night of dangerously low temperatures. To ensure you have access to heat, prepare some alternative heating options so you can enjoy…"),
  meta("benefits-of-mid-season-furnace-maintenance", "Benefits Of Mid-Season Furnace Maintenance", "Heating", "Dec 15, 2023", "2023-12-15", "3 mins read", "As late-winter temperatures fluctuate in the Sierra Foothills, homeowners and business owners continue to rely on their heating systems to provide them with indoor comfort throughout the season and into the next. The best way to gain peace of mind and ensure your furnace is reliable when you need it most is with regular, mid-season…"),
  meta("9-simple-ways-to-improve-imdoor-air-quality", "9 Simple Ways To Improve Indoor Air Quality", "Indoor Air Quality", "Jun 21, 2024", "2024-06-21", "4 mins read", "Your home's indoor air quality has a significant impact on the health, wellness, and overall comfort of you and your family. Pet dander, mold spores, carbon monoxide, and other indoor air pollutants can cause symptoms such as headaches, coughing, eye, nose, and throat inflammation, skin irritation, painful breathing, bronchitis, and more."),
  meta("10-ways-to-lower-heating-costs", "10 Ways To Lower Heating Costs", "Heating", "Mar 11, 2020", "2020-03-11", "4 mins read", "Dropping temperatures signal more than just the end of the Fall and the beginning of the holiday season. For homeowners, wintertime also means increased heating costs. However, there are plenty of ways for homeowners to prepare for the winter. With a few simple tweaks and the right heating system services, your home can remain cozy…"),
  meta("4-reasons-why-heater-isnt-working", "Heater Not Working? Here's 4 Reasons Why", "Heating", "Nov 16, 2020", "2020-11-16", "3 mins read", "A home's heating system is responsible for keeping you warm and comfortable on chilly nights and throughout the winter. Unfortunately, whether your home uses a furnace, heat pump, mini-split heating system, or other heating method, it sometimes might fail to distribute warmth throughout your home. A home with no heating is, understandably, a frustrating inconvenience."),
  meta("how-to-prepare-for-winter-with-your-hvac-unit", "How To Prepare For Winter With Your HVAC Unit", "Maintenance", "Sep 20, 2012", "2012-09-20", "3 mins read", "As winter approaches and temperatures drop, you'll find that your utility bills will increase, mostly because of heating costs. However, if your HVAC system is prepared in advance and properly maintained, you can cut electricity usage and add to the life of your HVAC system. Many HVAC systems can last as long as…"),
  meta("how-to-tell-if-you-have-mold-in-your-ac", "How To Tell If You Have Mold In Your AC", "Indoor Air Quality", "Sep 9, 2020", "2020-09-09", "3 mins read", "Mold is a serious health hazard, and once it makes its way into a home's AC system, spores carrying mycotoxins could end up being directed into the HVAC ductwork and distributed throughout the whole house. Unfortunately, mold can be hard to detect, and in the humid environment of an air conditioner unit, it will quickly…"),

  // ── Page 7 grid ──
  meta("ways-to-reduce-household-cooling-costs", "5 Ways To Reduce Household Cooling Costs", "Air Conditioning", "Jan 14, 2025", "2025-01-14", "4 mins read", "Staying cool and comfortable during California's hot summer months shouldn't mean you have to blast your air conditioning all day long and, consequently, watch your energy bills skyrocket. If you've ever wondered how to keep your home cool without breaking the bank, you're not alone. Fortunately, there are several practical and effective ways to reduce…"),
  meta("tips-to-take-care-of-your-heating-system", "Seven Tips To Take Care Of Your Heating System", "Heating", "Feb 6, 2019", "2019-02-06", "3 mins read", "The heating system you rely on winter after winter needs a little help from time to time. But don't worry about the help being time-consuming or extensive. Spoor's Heating & Air Conditioning provides six tips to take care of any heating system. Change the air filters — a clogged air filter forces the HVAC system to work…"),
  meta("tips-for-a-healthier-heating-season", "Tips For A Healthier Heating Season", "Heating", "Dec 29, 2023", "2023-12-29", "2 mins read", "The winter season is upon us. The weather is drier, the temperatures are lower, and the plants are starting to freeze over. This influx of cold can sometimes become unbearable, prompting homeowners to try every heating method they can think of. However, you don't need to sacrifice your health for a warmer home."),
  meta("heater-sounds-that-mean-trouble", "Heater Sounds That Mean Trouble", "Heating", "Oct 21, 2021", "2021-10-21", "3 mins read", "With winter just around the corner comes the time to run your home's furnace. When first turning on your furnace for the winter, a loud unexpected noise is probably the last thing you want to hear. Still, typical furnace noises can be confused with noises that could indicate more serious issues with the heater."),
  meta("heating-and-energy-saving-myths", "Heating & Energy-Saving Myths", "Heating", "Apr 21, 2020", "2020-04-21", "4 mins read", "When temperatures drop, homeowners often seek easy and effective ways to implement energy saving techniques. Unfortunately, however, not all heating and energy saving tips are created equal — oftentimes, the best ways to reduce heating costs reside behind a slew of energy-saving myths commonly believed as truths."),
  meta("should-you-repair-or-replace-your-air-conditioner", "Should You Repair or Replace Your Air Conditioner?", "Air Conditioning", "Mar 13, 2024", "2024-03-13", "3 mins read", "Having a functioning and efficient air conditioning system is essential for homeowners all across the country. Of course, when something goes wrong with your AC system, you'll want to have it repaired or replaced as soon as possible. But how exactly is one supposed to tell whether their air conditioning system needs to be repaired…"),
  meta("6-causes-of-poor-airflow-how-to-fix-them", "6 Causes Of Poor HVAC Airflow & How To Fix Them", "Air Conditioning", "Jul 29, 2021", "2021-07-29", "4 mins read", "Poor HVAC airflow can cause inconsistent temperature control, poor quality, and discomfort in your home. If you are experiencing these issues, you may be having issues with poor airflow: hot & cold spots throughout your home, weak or no airflow coming from the vents, one of the vents not blowing air in one room, your AC…"),

  // ── Page 8 grid ──
  meta("4-weird-smells-you-might-get-when-turning-your-heater-on", "4 Weird Smells You Might Get When Turning Your Heater On", "Heating", "Dec 17, 2021", "2021-12-17", "4 mins read", "Does your heater smell like burning plastic, mildew, or sulfur? If so, you need to identify the cause and fix the issue right away. A burning smell coming from your heater could indicate damaged HVAC system parts or electric problems, or it may even signal the presence of foreign objects within the system."),
  meta("who-is-spoors-heating-and-air-conditioning", "Who is Spoor's Heating and Air Conditioning?", "Company", "Nov 7, 2012", "2012-11-07", "2 mins read", "Welcome to Spoor's Heating and Air Conditioning. Our family-owned company provides the Sierra Foothill area with heating and air conditioning products and services. Our business model is simple — our work is always 100 percent guaranteed to be right or it's fixed again, and again if necessary, until you – our customer – is happy."),
  meta("6-air-conditioning-myths-that-are-costing-you-money", "6 Air Conditioning Myths That Are Costing You Money", "Air Conditioning", "Dec 27, 2022", "2022-12-27", "3 mins read", "People often make decisions regarding their homes based on myths and misconceptions, especially new homeowners. HVAC myths could cost you hundreds of dollars in energy bills and increase wear and tear on your air conditioning unit. To save money and ensure your AC is working properly and efficiently, review these common debunked myths."),
  meta("how-to-heat-cool-a-room-without-ductwork", "How To Cool & Heat A Room Without Ductwork", "Air Conditioning", "Jul 30, 2022", "2022-07-30", "3 mins read", "Are you considering going duct-free to heat or cool your indoor spaces? Forced-air heating and cooling systems require ductwork to distribute the warmed or cooled air throughout your indoor rooms. However, some structures are not built with ductwork, and retrofitting ducts can be impractical, expensive, and time-consuming."),
  meta("five-reasons-you-should-hire-our-hvac-repair-service", "5 Reasons You Should Hire Our HVAC Repair Service", "Air Conditioning", "Oct 22, 2025", "2025-10-22", "3 mins read", "A fully functioning heating and air conditioning unit is a necessity to survive the tumultuous weather of North Central California. The last thing you want on a hot summer day or frigid winter night is a broken air conditioner or furnace! Our HVAC company offers high-quality, affordable HVAC repair services in Meadow Vista, CA."),
  meta("why-you-shouldnt-turn-off-the-ac-when-youre-not-home", "Why You Shouldn't Turn Off The AC When You're Not Home", "Air Conditioning", "Mar 31, 2021", "2021-03-31", "4 mins read", "Most homeowners contend the best way to save money on cooling costs is to turn off their air conditioner when they're not home. But there's a much more beneficial way to reduce AC bills while simultaneously prioritizing indoor comfort. Our HVAC company recommends turning up the thermostat 7–10 degrees Fahrenheit while you're out of the…"),
  meta("tips-for-keeping-pollen-out-of-your-home", "Tips For Keeping Pollen Out Of Your Home", "Indoor Air Quality", "Apr 30, 2021", "2021-04-30", "5 mins read", "As winter turns into spring, the sun begins to shine and the songs of baby birds fill the air. For many, Spring doesn't just mean beautiful flowers and baby birds, but it also means more pollen in the air and the itchy eyes and non-stop sneezing that come with pollen allergies."),

  // ── Page 9 grid ──
  {
    slug: "common-ac-repairs",
    title: "Common AC Repairs That Routine Maintenance Can Help Prevent",
    category: "Air Conditioning",
    date: "Aug 3, 2020",
    isoDate: "2020-08-03",
    dateModified: "2026-07-29",
    modifiedDate: "Jul 29, 2026",
    author: AUTHOR,
    readTime: "7 mins read",
    excerpt: "Learn which common air conditioner repairs may be reduced through routine maintenance, which warning signs deserve attention, and what homeowners can check safely.",
    image: imgForCategory("Air Conditioning"),
    imageAlt: "HVAC technician inspecting a residential outdoor air conditioning unit",
    seoTitle: "Common AC Repairs Routine Maintenance May Prevent",
    metaDescription: "Learn about common AC repairs, warning signs, safe homeowner checks, and how routine HVAC maintenance can help Auburn homeowners avoid preventable problems.",
    canonical: "https://www.spoorsheatingandac.com/resources/blog/common-ac-repairs/",
    primaryQuery: "common AC repairs",
    supportingTopics: ["AC maintenance", "airflow problems", "condensate drain clogs", "electrical AC repairs"],
    primaryLocalRelationship: "Auburn cooling-season maintenance",
    sources: [
      { name: "ENERGY STAR: HVAC Maintenance Checklist", url: "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist" },
      { name: "Carrier: Why Is My AC Not Blowing Cold Air?", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/ac-not-blowing-cold-air/" },
      { name: "Carrier: Why Is My AC Leaking Water?", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/why-is-my-ac-leaking-water/" }
    ],
    claimsRequiringVerification: ["A licensed technician should diagnose electrical faults, refrigerant problems, compressor conditions, and recurring drainage failures."],
    body: [
      "Routine maintenance cannot prevent every air conditioner breakdown, but it can reveal or correct several conditions that lead to common repairs. Dirty filters, blocked airflow, clogged condensate drains, loose electrical connections, and debris around the outdoor unit can all affect operation. A professional tune-up also creates a baseline for the system, making it easier to identify unusual temperatures, sounds, cycling, or electrical readings before a small issue becomes a loss of cooling.",
      {
        heading: "Which common AC repairs may be preventable?",
        paragraphs: [
          "Airflow-related service calls often begin with a dirty filter, blocked return, closed register, dirty coil, or blower problem. Restricted airflow can reduce comfort and contribute to evaporator coil freezing. Homeowners can replace an accessible disposable filter, but internal coil and blower cleaning should follow the equipment manufacturer's instructions and may require professional service.",
          "Condensate drain problems are another common source of repair calls. The air conditioner removes moisture from indoor air, and that water must move through a pan and drain line. Dust and buildup can slow the line until water backs up. Maintenance can include checking the pan, drain connection, accessible line, and safety switch so drainage problems are found before water reaches a floor or ceiling.",
          "Outdoor units need clear airflow. Leaves, grass, and debris around the cabinet can interfere with heat transfer. A homeowner can keep the surrounding area clear while the power is off, but bent fins, damaged wiring, fan problems, and internal cleaning need careful handling.",
          "Electrical wear can appear at contactors, capacitors, terminals, motors, or controls. These parts operate at hazardous voltage and are not suitable for do-it-yourself testing. During service, a technician can inspect connections and measure system operation. Maintenance may identify a weakening part, but no inspection can guarantee that an electrical component will not fail later."
        ]
      },
      {
        heading: "What warning signs should you address early?",
        paragraphs: [
          "Call for service when cooling becomes weak, airflow drops, the system cycles unusually, or the indoor temperature no longer matches the thermostat setting. New buzzing, grinding, rattling, or repeated clicking also deserves attention. Shut the system off if you smell burning, see sparking, or hear a severe mechanical noise.",
          "Ice on the refrigerant line or indoor coil is not normal. Turn cooling off and allow the system to thaw without chipping or heating the ice. A dirty filter may contribute, but low refrigerant, a dirty coil, duct restriction, or blower fault can also cause freezing.",
          { segments: ["Water near the indoor equipment may point to a clogged drain, damaged pan, or thawing coil. Follow these ", { label: "safe steps for an AC water leak", to: "/resources/blog/why-is-my-ac-leaking-water/" }, " and turn the system off when water is spreading or approaching electrical parts."] }
        ]
      },
      {
        heading: "What does routine AC maintenance include?",
        paragraphs: [
          "The exact checklist depends on the equipment and installation. A typical visit may include checking the filter, thermostat operation, electrical connections, condensate drainage, indoor and outdoor coils, blower operation, temperature change, refrigerant-related performance indicators, and general equipment condition.",
          "ENERGY STAR advises homeowners to check filters regularly, especially during periods of heavy use, and recommends professional equipment maintenance. Filter timing varies with the home, filter type, pets, indoor conditions, and system use, so replace it when dirty and follow the equipment and filter instructions.",
          { segments: ["Spoor's offers ", { label: "AC maintenance and tune-ups", to: "/services/maintenance-tune-ups/" }, " for homeowners who want their system inspected before regular cooling use. Maintenance reduces avoidable risk, but it is not a promise that every future repair will be prevented."] }
        ]
      },
      {
        heading: "When should you call an AC professional?",
        paragraphs: [
          "Professional diagnosis is appropriate for refrigerant concerns, electrical faults, repeated breaker trips, frozen coils, compressor or motor trouble, persistent drainage problems, and any issue that requires opening sealed equipment panels. Refrigerant handling and line repairs require training and proper equipment.",
          { segments: ["If your system is showing warning signs, review Spoor's ", { label: "air conditioning services", to: "/services/air-conditioning/" }, " or ", { label: "request an appointment", to: "/contact-us/" }, ". A timely diagnosis can clarify whether the system needs cleaning, adjustment, component repair, or a broader replacement discussion."] }
        ]
      }
    ]
  },
  {
    slug: "signs-that-your-ac-is-due-for-a-tune-up",
    title: "Signs That Your AC Is Due For A Tune-Up",
    category: "Air Conditioning",
    date: "Nov 17, 2022",
    isoDate: "2022-11-17",
    dateModified: "2026-07-29",
    modifiedDate: "Jul 29, 2026",
    author: AUTHOR,
    readTime: "6 mins read",
    excerpt: "Weak airflow, uneven cooling, unusual cycling, higher energy use, water, ice, and new noises can signal that your AC needs inspection or maintenance.",
    image: imgForCategory("Air Conditioning"),
    imageAlt: "Technician performing a residential air conditioner tune-up",
    seoTitle: "7 Signs Your AC Needs a Tune-Up",
    metaDescription: "Learn the signs your AC needs a tune-up, what you can check safely, and when Auburn homeowners should schedule professional air conditioning service.",
    canonical: "https://www.spoorsheatingandac.com/resources/blog/signs-that-your-ac-is-due-for-a-tune-up/",
    primaryQuery: "signs AC needs a tune-up",
    supportingTopics: ["weak AC airflow", "uneven cooling", "AC short cycling", "AC maintenance"],
    primaryLocalRelationship: "preseason AC service in Auburn",
    sources: [
      { name: "ENERGY STAR: HVAC Maintenance Checklist", url: "https://www.energystar.gov/saveathome/heating-cooling/maintenance-checklist" },
      { name: "ENERGY STAR: Heat & Cool Efficiently", url: "https://www.energystar.gov/saveathome/heating-cooling" },
      { name: "Carrier: AC Not Blowing Cold Air", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/ac-not-blowing-cold-air/" }
    ],
    claimsRequiringVerification: ["A technician should verify the cause of energy-use changes, refrigerant-related symptoms, electrical faults, and equipment performance problems."],
    body: [
      "Your air conditioner may need a tune-up when airflow weakens, rooms cool unevenly, cycles become unusually short or long, energy use changes without an obvious reason, or the equipment develops new noises, odors, water, or ice. Some symptoms call for routine maintenance, while others indicate a repair. Turn the system off for burning odors, sparking, severe mechanical noise, active indoor water leakage, or a frozen coil.",
      {
        heading: "1. Airflow from the vents feels weak",
        paragraphs: [
          "Weak airflow can result from a dirty filter, blocked return, closed register, duct restriction, dirty indoor coil, or blower problem. Check that accessible registers are open and the filter is installed correctly. If airflow remains weak after replacing a dirty filter, schedule service rather than opening equipment panels.",
          "Airflow matters because the evaporator coil needs a steady supply of warm indoor air. A restriction can reduce comfort and may contribute to coil freezing. A tune-up can assess the filter, blower, coil condition, and visible duct connections."
        ]
      },
      {
        heading: "2. Your home cools unevenly",
        paragraphs: [
          "A warm room does not always mean the AC itself is failing. Sun exposure, duct layout, insulation, closed doors, blocked registers, and thermostat location can affect room temperature. If the pattern is new, however, it can also point to declining airflow or system performance.",
          "Write down which rooms feel different and when the problem occurs. That information helps a technician separate a whole-system issue from a room-specific airflow or building-envelope condition."
        ]
      },
      {
        heading: "3. The AC cycles differently than usual",
        paragraphs: [
          "Frequent short cycles may relate to thermostat problems, airflow restriction, equipment sizing, electrical controls, or other faults. Very long cycles can occur during demanding conditions, but they can also indicate reduced capacity, a dirty coil, duct loss, or a system problem.",
          "Do not diagnose cycling by replacing controls at random. A technician can compare thermostat input with actual system operation and inspect the equipment safely."
        ]
      },
      {
        heading: "4. Cooling performance has dropped",
        paragraphs: [
          "If the system runs but the air is not cool enough, first confirm that the thermostat is set to cooling and the setpoint is below the room temperature. Check the filter and make sure the outdoor unit is not covered or surrounded by debris.",
          "A dirty coil, blower fault, refrigerant issue, compressor problem, or duct condition may require professional diagnosis. Refrigerant is not consumed like fuel. A low charge can indicate a leak or another condition that needs trained service."
        ]
      },
      {
        heading: "5. You hear new sounds or notice odors",
        paragraphs: [
          "Rattling may come from a loose panel or debris, while grinding, screeching, buzzing, and repeated clicking can signal mechanical or electrical trouble. Shut the system off for severe noises, a burning smell, or visible sparking.",
          "A brief dusty odor after seasonal startup may clear, but persistent musty, electrical, chemical, or burning odors need investigation. Do not place fragrance products inside the equipment or ducts."
        ]
      },
      {
        heading: "6. Water or ice appears near the equipment",
        paragraphs: [
          "Water indoors can come from a clogged condensate drain, damaged pan, failed pump, disconnected line, or thawing frozen coil. Ice often points to restricted airflow or a refrigerant-related problem. Turn cooling off and never chip ice from a coil.",
          { segments: ["Use the safety guidance in ", { label: "Why Is My AC Leaking Water?", to: "/resources/blog/why-is-my-ac-leaking-water/" }, " if moisture is collecting near the indoor unit."] }
        ]
      },
      {
        heading: "7. Energy use changes without a clear reason",
        paragraphs: [
          "Weather, thermostat settings, occupancy, rate changes, and other appliances all affect a utility bill. If AC energy use rises alongside longer runtime, weak airflow, or reduced comfort, the system deserves inspection. Avoid promising a specific savings percentage because every home and system operates differently.",
          "ENERGY STAR recommends regular filter checks and professional HVAC maintenance. These steps can support efficient operation and reveal developing problems, but a tune-up cannot correct equipment sizing, major duct defects, or every age-related failure."
        ]
      },
      {
        heading: "Schedule maintenance before a small symptom grows",
        paragraphs: [
          { segments: ["Spoor's provides ", { label: "air conditioning maintenance", to: "/services/maintenance-tune-ups/" }, " and ", { label: "AC repair services", to: "/services/air-conditioning/" }, " in the Auburn area. If your system shows one or more of these signs, ", { label: "request service", to: "/contact-us/" }, " so a technician can identify the actual cause."] }
        ]
      }
    ]
  },
  meta("common-ac-smells-and-what-they-mean", "Common AC Smells & What They Mean", "Air Conditioning", "Sep 28, 2022", "2022-09-28", "3 mins read", "Home air conditioning systems largely work behind the scenes of our everyday lives, quietly keeping us cool and comfortable while out of sight and out of mind. Unfortunately, because our AC largely operates in the background, we don't always notice issues until there's a total breakdown of our AC system."),
  meta("leaking-heat-pumps-the-main-causes-and-how-to-resolve-them", "Leaking Heat Pumps: The Main Causes & How To Resolve Them", "Heating", "Mar 7, 2023", "2023-03-07", "3 mins read", "Heat pumps are cost-effective, efficient, and environmentally friendly heating and cooling systems installed on the exteriors of homes. When a heat pump isn't working properly, it can negatively impact your household's comfort. One of the most common signs of a problem with your heat pump is a leak in the system."),
  meta("pros-cons-of-evaporative-coolers", "Pros & Cons Of Evaporative Coolers", "Air Conditioning", "Mar 31, 2022", "2022-03-31", "3 mins read", "An evaporative cooler, also known as a swamp cooler, is popular for arid locations such as Auburn, CA. But do the advantages of an evaporative cooler outweigh the drawbacks? Find out everything you need to know about the pros versus cons of evaporative coolers from our experienced HVAC technicians!"),
  meta("why-spring-hvac-maintenance-is-important", "Why Spring HVAC Maintenance Is Important", "Maintenance", "Apr 15, 2019", "2019-04-15", "4 mins read", "Sunny skies are a welcome respite from our damp winters in Auburn, CA. And while your home's HVAC system may have worked diligently through the cooler months, that's no reason to forgo spring maintenance. Spoor's Heating & Air Conditioning provides high-quality maintenance and repairs to a range of major HVAC brands."),
  meta("drawbacks-of-an-oversized-ac-system", "Drawbacks Of An Oversized AC System", "Air Conditioning", "Feb 28, 2023", "2023-02-28", "4 mins read", "If you need a new air conditioner, you might think purchasing a larger unit is the best way to ensure a cool and comfortable home or business. But bigger isn't always better when it comes to cooling systems. In reality, installing an AC system too large for your indoor space can cause various problems."),

  // ── Page 10 grid ──
  meta("what-is-short-cycling", "Short Cycling: What Is It?", "Air Conditioning", "Nov 10, 2024", "2024-11-10", "3 mins read", "Spring and fall are the two most important seasons in the HVAC industry. Due to their temperate temperatures, spring and fall are the perfect time for homeowners to conduct routine preventative maintenance. At Spoor's Heating & Air Conditioning, our professional HVAC contractors can thoroughly inspect your air conditioner for faulty components or signs of disrepair."),
  meta("how-to-fix-uneven-cooling", "Multi-Story Homes: How To Fix Uneven Cooling", "Air Conditioning", "Sep 21, 2020", "2020-09-21", "3 mins read", "If you live in a home with more than one story, you're probably familiar with uneven cooling. It's a common problem for houses with multiple levels and can be easy to fix, depending on the cause. To help you get comfortable temperatures no matter what floor you're on, Spoor's Heating & Air Conditioning has some…"),
  meta("how-to-beat-dry-skin-during-the-winter", "How To Beat Dry Skin During The Winter", "Indoor Air Quality", "Dec 3, 2020", "2020-12-03", "3 mins read", "When winter comes around, it typically brings with it cold winds that cause dry, itchy skin. Dry skin is a common occurrence among NorCal residents during the cold season and it often results from depleted moisture levels within the skin. Without proper care to your home or business' indoor air, dry skin woes can become…"),
  meta("why-you-should-invest-in-hvac-preventative-maintenance", "Why You Should Invest In HVAC Preventative Maintenance", "Maintenance", "Oct 15, 2024", "2024-10-15", "3 mins read", "Your HVAC system works tirelessly each day to supply your family with refreshing, cooling air. Show your system how much you appreciate it with a comprehensive preventative maintenance plan. By scheduling two annual maintenance appointments — one in the spring and one in the fall — you can rest assured that your air conditioning system and…"),
  meta("questions-to-ask-when-selecting-an-hvac-company", "Questions To Ask When Selecting An HVAC Company", "Company", "Feb 14, 2024", "2024-02-14", "4 mins read", "Your household's HVAC unit is the lifeblood of your home. Without it, the temperature in your home would have no regulation. In the summer, this could mean unbearable, sweltering heat in your household, whereas, in the winter months, this HVAC failure could have you freezing in every corner of your house!"),
  meta("common-thermostat-issues", "Signs Of A Malfunctioning Thermostat", "Air Conditioning", "Sep 30, 2024", "2024-09-30", "3 mins read", "Arguably the most vital component of an air conditioning system, thermostats are necessary to maintain a comfortable indoor environment with consistent temperatures. These devices work in a similar manner to the human brain. The brain receives input from its surroundings and sends signals through the nerves to the rest of the body."),
  meta("7-common-home-heating-mistakes", "7 Common Home Heating Mistakes", "Heating", "Dec 13, 2019", "2019-12-13", "4 mins read", "Mistakes happen throughout life but operating and handling home heating equipment is one area that deserves special consideration. Utility bill increases, emergency repairs, and even hazardous malfunctions can all be the result of simple, yet nonetheless harmful heater problems. Luckily for homeowners, many of these mistakes are easily corrected."),

  // ── Page 11 grid ──
  meta("when-to-schedule-heat-pump-maintenance", "When To Schedule Heat Pump Replacement", "Heating", "Feb 27, 2025", "2025-02-27", "3 mins read", "Heat pumps are incredibly versatile tools, allowing for heating, cooling, and air quality control, all in one compact device. With proper maintenance, these HVAC systems can keep households cool and comfortable for over a decade! However, as time wears on and the system grows in age, your reliable heat pump may require replacement."),
  {
    slug: "4-common-reasons-for-a-frozen-ac-and-what-to-do",
    title: "4 Common Reasons For A Frozen AC & What To Do",
    category: "Air Conditioning",
    date: "Oct 14, 2022",
    isoDate: "2022-10-14",
    dateModified: "2026-07-29",
    modifiedDate: "Jul 29, 2026",
    author: AUTHOR,
    readTime: "6 mins read",
    excerpt: "A frozen AC coil usually points to restricted airflow, a dirty coil, a blower problem, or a refrigerant-related condition. Learn how to respond safely.",
    image: imgForCategory("Air Conditioning"),
    imageAlt: "Ice buildup on an air conditioner evaporator coil",
    seoTitle: "Frozen AC Coil: 4 Causes and What to Do",
    metaDescription: "Learn four common causes of a frozen AC coil, how to thaw the system safely, what homeowners can check, and when to call an Auburn HVAC technician.",
    canonical: "https://www.spoorsheatingandac.com/resources/blog/4-common-reasons-for-a-frozen-ac-and-what-to-do/",
    primaryQuery: "why is my AC frozen",
    supportingTopics: ["frozen evaporator coil", "restricted AC airflow", "low refrigerant", "safe AC thawing"],
    primaryLocalRelationship: "Auburn cooling-season AC operation",
    sources: [
      { name: "Carrier: Will a Frozen AC Fix Itself?", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/will-frozen-ac-fix-itself/" },
      { name: "Carrier: Troubleshoot an AC Not Working", url: "https://www.carrier.com/us/en/residential/hvac-resources/air-conditioners/troubleshoot-an-ac-not-working/" },
      { name: "ENERGY STAR: Heat & Cool Efficiently", url: "https://www.energystar.gov/saveathome/heating-cooling" }
    ],
    claimsRequiringVerification: ["A trained technician should confirm refrigerant charge, leaks, blower faults, coil contamination, and electrical conditions."],
    body: [
      "If your air conditioner has ice on the indoor coil or copper refrigerant line, turn cooling off. A frozen AC will not fix its underlying problem by continuing to run. Let the ice melt naturally, protect the area from water, and check the filter and accessible vents. Do not chip the ice, apply heat, open refrigerant lines, or keep restarting the system. Restricted airflow is common, but dirty coils, blower faults, and refrigerant-related problems can produce similar symptoms.",
      {
        heading: "Why does an AC coil freeze?",
        paragraphs: [
          "The indoor evaporator coil must stay cold enough to absorb heat but warm enough that moisture drains away as liquid water. If too little warm air passes over the coil, or if system pressure and temperature move outside the intended range, condensation can freeze on the coil. Ice then blocks more airflow and the problem compounds.",
          "A frozen coil can cause weak airflow, warm air from the vents, long runtime, water near the indoor unit after thawing, or visible ice on the larger insulated copper line. These signs identify a symptom, not the final diagnosis."
        ]
      },
      {
        heading: "1. A dirty filter or blocked airflow",
        paragraphs: [
          "A dirty air filter can restrict airflow through the indoor equipment. Closed or blocked registers, obstructed returns, duct restrictions, and heavily loaded filters can contribute as well. Replace a visibly dirty disposable filter with the correct size and airflow direction, then confirm that accessible vents are open and unobstructed.",
          "Do not remove the filter and operate the system without one. If the coil freezes again after the filter is corrected, leave cooling off and arrange service. Another airflow or equipment problem may be present."
        ]
      },
      {
        heading: "2. A dirty evaporator coil",
        paragraphs: [
          "Dust and debris on the evaporator coil can interfere with airflow and heat transfer. The coil sits inside the indoor cabinet, often beyond a sealed or screwed panel. Cleaning it can require access to sharp fins, electrical parts, and the condensate system.",
          "Homeowners should not spray household cleaners into the equipment. A technician can inspect the coil, determine whether cleaning is needed, and use a method appropriate for the equipment and installation."
        ]
      },
      {
        heading: "3. A blower or duct problem",
        paragraphs: [
          "The blower moves indoor air across the evaporator coil. A failing motor, control problem, damaged wheel, incorrect speed, or severe duct restriction can reduce that airflow. You may notice weak air at multiple vents, unusual blower sounds, or a system that runs without moving much air.",
          "Blower and duct diagnosis requires more than checking one register. A technician can evaluate the motor, wheel, controls, filter pressure, coil condition, and duct system to locate the restriction."
        ]
      },
      {
        heading: "4. A refrigerant-related condition",
        paragraphs: [
          "Low refrigerant pressure can lower coil temperature and contribute to freezing. Refrigerant does not normally need routine topping off. If the system is low, a leak or another technical condition may need diagnosis.",
          "Do not connect gauges, release refrigerant, or use a do-it-yourself recharge product. Refrigerant work requires training, proper tools, and compliance with applicable rules. A technician should identify the cause before recommending a repair."
        ]
      },
      {
        heading: "How do you thaw a frozen air conditioner safely?",
        paragraphs: [
          "Set the thermostat from cooling to off. If there is no burning smell, sparking, severe noise, or water near electrical parts, the indoor fan may sometimes be set to on to move room-temperature air across the coil. If you are uncertain, leave the entire system off and call for guidance.",
          "Place towels or a suitable container where melting ice may produce water, but do not reach into energized equipment. Never use a hair dryer, heat gun, sharp tool, or open flame. Thawing may take several hours depending on the amount of ice and indoor conditions.",
          { segments: ["Melting ice can overflow the drain system. If water appears, follow the steps in ", { label: "Why Is My AC Leaking Water?", to: "/resources/blog/why-is-my-ac-leaking-water/" }, "."] }
        ]
      },
      {
        heading: "Can you restart the AC after it thaws?",
        paragraphs: [
          "After the ice has fully melted, you can confirm that the filter is clean and vents are open. If those were the only obvious issues and no unsafe condition exists, a brief cooling test may show whether airflow and cooling return. Stay near the equipment and turn it off if ice starts forming again.",
          "Repeated freezing, weak airflow, water leakage, or poor cooling requires professional service. Restarting a system over and over can allow the same condition to continue and may create more condensate around the indoor unit."
        ]
      },
      {
        heading: "Get the cause diagnosed before the coil freezes again",
        paragraphs: [
          { segments: ["Spoor's provides ", { label: "air conditioning repair", to: "/services/air-conditioning/" }, " and ", { label: "preventive HVAC maintenance", to: "/services/maintenance-tune-ups/" }, " for Auburn-area homeowners. To have the airflow, coil, blower, drainage, and refrigerant-related performance checked, ", { label: "request service", to: "/contact-us/" }, "."] }
        ]
      }
    ]
  },
  meta("common-swamp-cooler-repairs", "4 Common Swamp Cooler Repairs", "Air Conditioning", "May 25, 2022", "2022-05-25", "2 mins read", "An evaporative cooler, more commonly known as a swamp cooler, works well in arid climates to increase humidity. However, like a typical HVAC unit, a swamp cooler can break down over time and require swamp cooler repairs. If your swamp cooler isn't cooling effectively or you're noticing strange sounds when it turns on, contact Spoor's…"),
  meta("why-you-shouldnt-wait-to-fix-your-heat", "Why You Shouldn't Wait To Fix Your Heat", "Heating", "Feb 24, 2021", "2021-02-24", "3 mins read", "Most homeowners recognize the importance of upkeeping their heating system. However, even the most responsible folks may be tempted to put off making repairs on their heating system during the warm season or if the problem seems insignificant. We're here to say that, while we understand the inclination to save money and hold off on…"),
  meta("spoors-services", "Spoor's Services", "Company", "Aug 13, 2012", "2012-08-13", "1 min read", "Spoor's Heating & Air Conditioning is a family-owned, full-service HVAC company. We provide the following residential and commercial HVAC services: Furnace Repair, Heater Repair, Heat Pumps, Electric Water Heater Repair, Thermostats, Baseboard Heating, Electronic Air Cleaners, Filter Replacement, System Tune Ups and Maintenance, Emergency Service."),

  // ── Page 12 grid ──
  meta("signs-your-hvac-system-is-energy-efficient", "3 Signs Your HVAC System Is Energy Efficient", "Maintenance", "Aug 26, 2024", "2024-08-26", "3 mins read", "A modern, high-quality HVAC unit can slash household environmental consumption by nearly half compared to traditional electric heating and air conditioning. Because of this, homeowners looking to reduce their environmental footprint may want to switch to an energy-efficient air conditioning system or furnace. At Spoor's Heating & Air Conditioning, our professional HVAC contractors can quickly and…"),
  meta("how-wildfires-affect-indoor-air-quality-in-norcal", "How Wildfires Affect Indoor Air Quality", "Indoor Air Quality", "Aug 8, 2018", "2018-08-08", "3 mins read", "As wildfire season continues in Northern California, many home and business owners are feeling the effects in terms of reduced indoor air quality (IAQ). Indoors or out, the smoke and stench permeate even seemingly airtight structures. Spoor's Heating & Air Conditioning has provided high-quality air conditioning service to homes and businesses through many wildfire seasons…"),
  meta("5-air-conditioning-mistakes-that-increase-utility-bills", "5 Air Conditioning Mistakes That Increase Utility Bills", "Air Conditioning", "Apr 27, 2023", "2023-04-27", "3 mins read", "As summer approaches and temperatures begin to rise, it's important to ensure your air conditioning unit is in top shape to keep your home or business comfortable. While AC units are essential for maintaining indoor air quality and a comfortable living environment, they can rack up high energy bills if not properly operated and maintained."),
];

export const blogCategories = [
  "All",
  "Air Conditioning",
  "Heating",
  "Indoor Air Quality",
  "Maintenance",
  "Company",
];