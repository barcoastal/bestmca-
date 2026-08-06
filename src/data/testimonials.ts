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
  {
    name: "Benjamin Taber",
    rating: 5,
    quote:
      "I was extremely nervous in the beginning as I have never defaulted on anything. I let Coastal Debt take over, and as it was difficult in the beginning, Angie Kelly has been there from the beginning giving me the facts and reassurance that everything will be ok. It was about a year and a half process but well worth it and kept my business alive. I highly recommend Angie Kelly and anyone at Coastal Debt to resolve these MCA issues!",
    source: "Coastal",
  },
  {
    name: "Arnie Creinin",
    rating: 5,
    quote:
      "I was a bit reluctant to move forward with this until I spoke with Zachary and Natasha. They helped put my mind at ease and have been VERY good at keeping me up to date of the situation and how the process works!!",
    source: "Trustpilot",
    date: "Jul 2025",
  },
  {
    name: "Rachel Voigt",
    rating: 5,
    quote:
      "Simone has been very open and upfront with me regarding my account and needs. The weekly updates let me know that I am not forgotten and am in good hands.",
    source: "Coastal",
  },
  {
    name: "James Musser",
    rating: 5,
    quote:
      "Marco has been professional, knowledgeable, and always available for any questions or problems that need to be addressed. Thank you Marco!",
    source: "Coastal",
  },
  {
    name: "Ujjwall Sai Sunder Uppuluri",
    rating: 5,
    quote:
      "I think Marco did a fantastic job as my personal advisor on Coastal Debt Resolve matters. He took time to listen to my concerns, to take into account my circumstances, and recommend me the best possible route. Thank you!",
    source: "Coastal",
  },
  {
    name: "Bernard Glas",
    rating: 5,
    quote:
      "My representative, Mr. Christian Alvares has been very efficient in contacting me and updating our progress in this debt resolution. He is always on top of the situation and I am very appreciative of that.",
    source: "Coastal",
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
  {
    name: "Georgia real estate owner",
    industry: "Real Estate (Georgia)",
    quote:
      "The tipping point for me was when I was waking up every day seeing those daily drafts hit my account. I felt like I was working non-stop just to stay afloat. Filing for bankruptcy did not feel like the right move for me.",
  },
];
