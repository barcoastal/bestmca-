export type Testimonial = {
  name: string;
  business?: string;
  rating: number;
  quote: string;
  source: "Coastal" | "Trustpilot" | "Case Study";
  date?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jerome Armstead Jr",
    rating: 5,
    quote:
      "Coastal has been there as promised every step of the way and took care of everything.",
    source: "Coastal",
  },
  {
    name: "Sylvana Nicolas",
    rating: 5,
    quote:
      "So far I've had a very good experience. Marco has been helping me with my case and he has been wonderful.",
    source: "Coastal",
  },
  {
    name: "Jamari Nicholas",
    rating: 5,
    quote:
      "Timothy Rivadenera has been AWESOME helping me through this tough time in my business.",
    source: "Coastal",
  },
  {
    name: "Tom C",
    rating: 5,
    quote:
      "Carlos is the best. Always cares and always good communication. He is instrumental.",
    source: "Coastal",
  },
  {
    name: "Alisa Taylor",
    rating: 5,
    quote:
      "Sarah is phenomenal! She is always keeping me informed on any updates and showing up for me.",
    source: "Coastal",
  },
  {
    name: "Joe Mowery",
    rating: 5,
    quote:
      "Simone Simpson is very responsive and attentive to my particular needs.",
    source: "Coastal",
  },
  {
    name: "Maria Jose",
    rating: 5,
    quote:
      "Christian Alvarez, the paralegal assigned to my case, is very kind, knowledgeable, and responsive.",
    source: "Coastal",
  },
  {
    name: "Sanjay Mishra",
    rating: 5,
    quote:
      "Simone has been absolutely fantastic. She has made a difficult and stressful process feel manageable.",
    source: "Coastal",
  },
  {
    name: "Samantha Sandrin",
    rating: 5,
    quote:
      "Incredible service by Marco. I have been listened to, taken care of, and above all respected.",
    source: "Coastal",
  },
  {
    name: "Eleesa Collins",
    rating: 5,
    quote:
      "Marco at Coastal Debt has been incredibly attentive and supportive during a very stressful time.",
    source: "Coastal",
  },
  {
    name: "Heather Heltzinger",
    rating: 5,
    quote:
      "Working with Alecha at Coastal Debt Resolve was an absolute relief. She walked me through every step.",
    source: "Trustpilot",
    date: "Jul 28, 2025",
  },
  {
    name: "Tyler Geoffroy",
    rating: 5,
    quote:
      "Simone did an outstanding job with our company. She was always true to her word.",
    source: "Trustpilot",
    date: "Jul 2, 2025",
  },
  {
    name: "AAMCO AUBURN",
    business: "AAMCO Auburn",
    rating: 5,
    quote:
      "I worked with Shanae Roberts. Their team was very responsive and explained the entire process clearly.",
    source: "Trustpilot",
    date: "Jul 2025",
  },
  {
    name: "KMJ Trucking, LLC",
    business: "KMJ Trucking",
    rating: 5,
    quote:
      "I cannot thank Carlos enough for his guidance through this process.",
    source: "Trustpilot",
    date: "Jul 2025",
  },
  {
    name: "Danny Francis",
    rating: 5,
    quote:
      "My experience with Coastal Debt has been great. My rep Julio has been there every step.",
    source: "Trustpilot",
    date: "Aug 25, 2025",
  },
];

export type CaseStudy = {
  name: string;
  industry: string;
  quote: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: "Kymerlee Music",
    industry: "Real Estate",
    quote:
      "I know what it feels like when things start to shift fast and you're trying to hold on. Coastal helped me find solid ground again.",
  },
  {
    name: "Pedro Lins",
    industry: "Flooring Company",
    quote:
      "My business's finances got real bad paying these loans because of the high interest. Coastal restructured the situation so I could breathe.",
  },
  {
    name: "Ed Sweeney",
    industry: "Food Delivery",
    quote:
      "I got involved with these MCAs. Before I knew it, the payments were catching up to me. Coastal got me out from under it.",
  },
  {
    name: "Jackie McNeill",
    industry: "Real Estate Flipping",
    quote:
      "I had a friend recommend Coastal Debt Resolve, and we called them. It was the best step I made.",
  },
  {
    name: "Maurice Piper",
    industry: "Seafood Market",
    quote:
      "When I found Coastal Debt Resolve, everyone was very transparent. I would say they earned my trust.",
  },
];
