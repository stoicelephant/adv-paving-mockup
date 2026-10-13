/**
 * Advanced Asphalt & Concrete, LLC: everything the site says.
 * Source: adv-paving.com (read Oct 13, 2026). See docs/intake-adv-paving.md.
 * Nothing here is invented: missing facts (hours, service area, reviews) are left out
 * and listed as questions for the client.
 */

/** A photo in the client's Wix media library, hotlinked for the mockup. w/h are the original's pixel size. */
export type WixPhoto = { id: string; w: number; h: number };

export type Service = {
  slug: string;
  name: string;
  /** One line for the home page list. */
  summary: string;
  /** Paragraphs for the service page. */
  body: string[];
  /** Plain list on the service page. Only things their site says. */
  includes: string[];
};

export type Person = {
  name: string;
  title: string;
  area?: string;
  bio: string[];
  phone: { display: string; tel: string };
  email: string;
  photo: WixPhoto;
  /** Where to anchor the crop: "t" keeps the top (faces), "c" centers. */
  crop?: "t" | "c";
};

export const site = {
  isSample: false,

  /** Mockup mode: preview bar, noindex on every page, quote form doesn't send. Set false to launch. */
  preview: {
    enabled: true,
    note: "Design preview for Advanced Asphalt & Concrete. Not the live site.",
  },

  name: "Advanced Asphalt & Concrete, LLC",
  shortName: "Advanced Asphalt & Concrete",
  url: "https://www.adv-paving.com",
  schemaType: "GeneralContractor",
  duns: "119695123",

  logo: { id: "57fef7_a71013ad43c148d0928488fc362aec8a~mv2.png", w: 389, h: 227 } as WixPhoto,

  seo: {
    title: "Advanced Asphalt & Concrete | Paving, seal coating and striping in Atlanta",
    description:
      "Asphalt paving, concrete, seal coating, parking lot striping and ADA markings, and masonry for commercial and residential properties. Based in Brookhaven, GA. Licensed and insured.",
    ogImage: "/og.png",
  },

  hero: {
    headline: "Asphalt, concrete and striping for Atlanta properties.",
    sub: "Parking lots and driveways, new installs and repairs, from a Brookhaven company that has been paving since 2016.",
    photo: { id: "57fef7_49c5c0b5b196417887f0b28652265cb4~mv2.jpeg", w: 1280, h: 720 } as WixPhoto,
    photoAlt: "Aerial view of a freshly paved and striped commercial parking lot",
  },

  phone: { display: "470-546-3653", tel: "+14705463653" },
  email: "Info@ADV-Paving.com",
  showAddress: false,
  address: { street: "", city: "Brookhaven", region: "GA", postalCode: "", country: "US" },
  /** Not published on the old site. Empty hides the hours block. */
  hours: [] as { days: string[]; opens: string; closes: string; label: string; text: string }[],
  license: "Licensed and insured",
  foundedYear: 2016,
  region: "the Atlanta area",
  serviceArea: [] as string[],

  social: { google: "", instagram: "", facebook: "" },

  services: [
    {
      slug: "asphalt-paving",
      name: "Asphalt paving",
      summary: "New installations, repairs and resurfacing for commercial and residential properties.",
      body: [
        "We pave parking lots, driveways and roads, from new installations to repairs and resurfacing of worn pavement.",
        "Every surface is built to handle heavy use and changing weather, with a focus on quality, safety and results that last.",
      ],
      includes: ["New asphalt installation", "Asphalt repairs", "Resurfacing", "Commercial and residential work"],
    },
    {
      slug: "concrete",
      name: "Concrete",
      summary: "Decorative finishes through structural concrete, built for performance and looks.",
      body: [
        "Concrete work from decorative finishes to structural applications, matched to how the surface will be used and how you want it to look.",
      ],
      includes: ["Decorative concrete finishes", "Structural concrete", "New construction and renovation"],
    },
    {
      slug: "seal-coating",
      name: "Seal coating",
      summary: "Resealing that protects asphalt from weather, wear and daily traffic.",
      body: [
        "Seal coating puts a protective layer over existing asphalt. It guards the surface against weather, wear and daily traffic, and extends the life of the pavement you already paid for.",
      ],
      includes: ["Asphalt resealing", "Protective coatings", "Parking lots and driveways"],
    },
    {
      slug: "striping-ada",
      name: "Striping and ADA markings",
      summary: "Parking lot lines and handicap markings that keep traffic moving and lots compliant.",
      body: [
        "Clear parking lot striping improves traffic flow and safety. Handicap markings keep your lot in line with ADA requirements.",
        "We stripe new lots and restripe faded ones.",
      ],
      includes: ["Parking stall striping", "Handicap and ADA markings", "Restriping faded lots"],
    },
    {
      slug: "masonry",
      name: "Custom masonry",
      summary: "Retaining walls, brickwork, and custom stone and concrete features.",
      body: [
        "Retaining walls, brickwork, and custom stone and concrete features that improve both how a property works and how it looks, built for durability.",
      ],
      includes: ["Retaining walls", "Brickwork", "Custom stone features", "Custom concrete features"],
    },
    {
      slug: "custom-design",
      name: "Custom paving and design",
      summary: "Custom layouts and decorative finishes, planned with you to suit the property.",
      body: [
        "Have something specific in mind? We listen, help you see the possibilities, and work with you on a layout and finish that suits the property. Then we build it.",
      ],
      includes: ["Custom layouts", "Decorative finishes", "Design help from the start"],
    },
  ] satisfies Service[],

  /** "What does your pavement need?" Each answer points at a service, in AAC's own terms. */
  needs: [
    {
      key: "lines",
      label: "Faded or missing lines",
      service: "striping-ada",
      answer: "Striping and ADA markings",
      text: "Fresh parking stall lines and handicap markings keep traffic moving, keep people safe and keep the lot ADA compliant.",
    },
    {
      key: "gray",
      label: "Gray, dry or worn surface",
      service: "seal-coating",
      answer: "Seal coating",
      text: "A new seal coat protects the asphalt from weather, wear and daily traffic, and extends its life before bigger repairs are needed.",
    },
    {
      key: "cracks",
      label: "Cracks, potholes or rough patches",
      service: "asphalt-paving",
      answer: "Asphalt repairs and resurfacing",
      text: "Damaged sections get repaired, and worn pavement gets resurfaced so it holds up to heavy use again.",
    },
    {
      key: "new",
      label: "Starting from dirt or gravel",
      service: "asphalt-paving",
      answer: "New asphalt or concrete",
      text: "A new installation, whether it's a home driveway, a parking lot, or the roads in a subdivision.",
    },
    {
      key: "custom",
      label: "Something custom",
      service: "custom-design",
      answer: "Custom paving, design and masonry",
      text: "Custom layouts, decorative finishes, retaining walls and stone features, planned with you to suit the property.",
    },
  ],

  projectTypes: [
    "residential subdivisions",
    "apartment sites",
    "road improvements",
    "retail centers and malls",
    "hospitals",
    "schools",
    "sports facilities",
    "office buildings",
  ],

  story: [
    "Advanced Asphalt & Concrete was established in 2016 to meet the growing demand for asphalt, concrete, masonry, design and infrastructure work.",
    "Today we build the surfaces communities and businesses depend on: residential developments, commercial properties, apartment communities, office parks, public works and private developments.",
  ],

  mission: "To build lasting relationships while delivering work that stands the test of time.",

  howWeWork: [
    { title: "Safety training", body: "Our crews get ongoing safety training." },
    { title: "Weekly production meetings", body: "We meet every week to review production, and we keep communication open on every job." },
    { title: "Modern equipment", body: "Modern equipment keeps the work efficient and cost-effective." },
  ],

  values: ["Honesty", "Integrity", "Safety", "Workmanship"],

  team: [
    {
      name: "Jason Green",
      title: "Owner and President",
      bio: [
        "Welcome, and thank you for exploring our site. At Advanced Asphalt and Concrete, we believe our greatest strength is our people: the clients we serve and the men and women who make this company what it is every day.",
        "We're focused on building connections and growing together through innovation, leadership and purpose.",
      ],
      phone: { display: "404-655-6411", tel: "+14046556411" },
      email: "Jason@ADV-Paving.com",
      photo: { id: "57fef7_0ad411ff2d6245b580a48ec2aeec5649~mv2.png", w: 380, h: 438 },
      crop: "t",
    },
    {
      name: "Patricia Klimek",
      title: "Director of Operations and Marketing",
      bio: [
        "We represent a company built on honesty, integrity and a real commitment to people. From the clients we serve to the hardworking men and women behind every project, relationships are at the heart of everything we do.",
        "We're grateful for the chance to earn your trust and deliver excellence at every step.",
      ],
      phone: { display: "470-546-3653", tel: "+14705463653" },
      email: "patricia.k@adv-paving.com",
      photo: { id: "57fef7_f16ababe8d7f423caba15b50d32e61db~mv2.jpeg", w: 1320, h: 1012 },
      crop: "c",
    },
    {
      name: "Calvin Chambers",
      title: "Sales Agent",
      area: "Gwinnett County",
      bio: [
        "Calvin brings over 50 years of sales experience and a commitment to service shaped by his time as an Army veteran.",
        "He treats every customer with honesty, clear communication and consistency, so each project gets personal attention. Calvin serves the Atlanta area.",
      ],
      phone: { display: "678-557-2874", tel: "+16785572874" },
      email: "Calvin@ADV-Paving.com",
      photo: { id: "57fef7_e8138cee5ee1488fa2136e792499bd5b~mv2.jpg", w: 1320, h: 2046 },
      crop: "t",
    },
  ] satisfies Person[],

  /** Each answer restates something AAC's own site says. */
  faqs: [
    { q: "Do you work on commercial or residential properties?", a: "Both. We handle everything from home driveways and custom paving to parking lots, apartment sites, retail centers, schools and office buildings, new builds and renovations, small jobs to large scale." },
    { q: "Are you licensed and insured?", a: "Yes. Advanced Asphalt & Concrete is licensed and insured. Our DUNS number is 119695123." },
    { q: "Can you make our parking lot ADA compliant?", a: "Yes. We paint handicap markings and parking lot striping that keep lots in line with ADA requirements, and we restripe faded lots." },
    { q: "How much does it cost?", a: "Every property is different, so we quote each job. Quotes are free: call 470-546-3653 or send the quote form." },
  ],

  form: {
    /** Live: a form service endpoint (e.g. Web3Forms). Ignored while preview.enabled is true. */
    action: "https://api.web3forms.com/submit",
    hidden: {
      access_key: "",
      subject: "New quote request from adv-paving.com",
      from_name: "adv-paving.com",
      redirect: "https://www.adv-paving.com/thank-you",
    } as Record<string, string>,
  },

  tracking: { metaPixelId: "" },

  nav: [
    { label: "Services", href: "/#services" },
    { label: "Our team", href: "/team" },
    { label: "Get a quote", href: "/contact" },
  ],
};

export type Site = typeof site;
