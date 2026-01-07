export const services = [
  {
    id: 1,
    title: "Political Strategy & Campaign Planning",
    description: "Election roadmap (pre, during, post) and candidate positioning.",
  },
  {
    id: 2,
    title: "Constituency Research & Ground Intelligence",
    description: "Voter segmentation and detailed caste/community mapping.",
  },
  {
    id: 3,
    title: "Narrative Building & Political Branding",
    description: "Campaign narrative development and crisis narrative control.",
  }
];

export const detailedServices = [
  {
    id: "strategy",
    title: "Political Strategy & Campaign Planning",
    tagline: "Winning with credibility and trust.", // [cite: 43]
    description: "We design a comprehensive election roadmap covering every phase of the campaign—pre-poll, during-poll, and post-poll monitoring.", // [cite: 46, 47]
    process: [
      "Candidate positioning and identity building", // [cite: 48]
      "Booth-level micro-planning and execution", // [cite: 49]
      "Opposition and risk assessment", // [cite: 51]
      "Poll-day strategy and monitoring systems" // [cite: 52]
    ]
  },
  {
    id: "research",
    title: "Constituency Research & Ground Intelligence",
    tagline: "Insight-driven ground reality.", // [cite: 14]
    description: "Deep-dive research into local culture, voter psychology, and political realities to identify the pulse of the constituency.", // [cite: 97, 53]
    process: [
      "Detailed voter segmentation", // [cite: 54]
      "Caste and community mapping", // [cite: 55]
      "Local issue identification and feedback loops", // [cite: 56, 57]
      "Swing voter and influencer analysis" // [cite: 58]
    ]
  },
  {
    id: "branding",
    title: "Narrative Building & Political Branding",
    tagline: "Shaping perceptions with integrity.", // [cite: 16]
    description: "Developing a powerful campaign narrative that aligns with the candidate’s image and addresses the electorate's needs.", // [cite: 59, 60]
    process: [
      "Slogan and messaging framework development", // [cite: 61]
      "Speech and manifesto content inputs", // [cite: 62]
      "Image building (Ground + Media presence)", // [cite: 63]
      "Crisis narrative control and rapid response" // [cite: 64]
    ]
  }
];