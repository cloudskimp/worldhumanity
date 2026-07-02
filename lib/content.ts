export const org = {
  name: "World Humanity Inc.",
  shortName: "World Humanity",
  tagline: "Striving for the well-being of all people, everywhere.",
  mission:
    "World Humanity, Inc. is a volunteer-run nonprofit dedicated to enhancing the lives of people in our community and around the world. Guided by the belief that every person deserves dignity, health, and opportunity, we show up — to donate blood, pack meals, walk for hearts, and lend a hand wherever it's needed.",
  email: "info@worldhumanity.org",
  city: "Dallas–Fort Worth, Texas",
  ein: "",
  social: {
    instagram: "https://www.instagram.com/worldhumanityinc/",
    linkedin: "https://www.linkedin.com/company/worldhumanity",
    x: "https://www.x.com/worldhumaninc",
  },
  donateUrl: "/donate",
  volunteerFormUrl: "",
};

export const stats = [
  { value: "15+", label: "Blood drives supported with Carter BloodCare" },
  { value: "10,000+", label: "Meals packed alongside charitable partners" },
  { value: "100%", label: "Volunteer-run — every hour is donated" },
];

export const programs = [
  {
    slug: "blood-drives",
    title: "Blood Donation Drives",
    partner: "In partnership with Carter BloodCare",
    accent: "heart" as const,
    summary: "One blood donation can help save up to three lives. We organize and volunteer at community blood drives with Carter BloodCare, helping keep local hospital shelves stocked for patients who need it most.",
    details: "Our volunteers handle outreach, donor sign-ups, day-of coordination, and refreshments — turning a clinical process into a warm community event. Whether you can donate or simply help run the drive, there's a place for you.",
    cta: "Join our next drive",
  },
  {
    slug: "food-packaging",
    title: "Food Packaging & Hunger Relief",
    partner: "With local charitable organizations",
    accent: "marigold" as const,
    summary: "Families in our community shouldn't have to choose between rent and dinner. We roll up our sleeves at food packaging events with charitable partners, assembling meal kits and food boxes for neighbors facing hunger.",
    details: "Packaging events are fast, fun, and family-friendly — a few hours of teamwork produces hundreds of meals. It's one of the easiest ways to see your impact stacked up on a pallet in front of you.",
    cta: "Pack meals with us",
  },
  {
    slug: "heart-walks",
    title: "Heart Walks",
    partner: "Supporting the American Heart Association",
    accent: "heart" as const,
    summary: "Heart disease is the leading cause of death in the United States — and much of it is preventable. We walk in American Heart Association Heart Walks to raise funds for research and to celebrate heart-healthy living together.",
    details: "Our team walks, fundraises, and cheers. It's a joyful morning with a serious purpose, and everyone — kids, grandparents, strollers, and dogs — is welcome to join the World Humanity team.",
    cta: "Walk with our team",
  },
  {
    slug: "community-wellbeing",
    title: "Community Well-Being",
    partner: "Wherever a hand is needed",
    accent: "ocean" as const,
    summary: "Beyond our flagship activities, we respond to needs as they arise — from community clean-ups to supporting families through hard seasons. If it improves the well-being of people around us, it's our work.",
    details: "Have an idea or a cause that needs hands? Reach out. We're a coalition of neighbors who believe small, consistent acts of service add up to a stronger community.",
    cta: "Suggest a cause",
  },
];

export const gallery = [
  { src: "/images/gallery/placeholder-blood-drive.svg", caption: "Volunteers welcoming donors at a community blood drive", event: "Blood Drive · Carter BloodCare" },
  { src: "/images/gallery/placeholder-food-packing.svg", caption: "Assembly line in action — hundreds of meal kits packed", event: "Food Packaging" },
  { src: "/images/gallery/placeholder-heart-walk.svg", caption: "Team World Humanity at the Heart Walk", event: "Heart Walk · American Heart Association" },
  { src: "/images/gallery/placeholder-community.svg", caption: "Neighbors coming together for community well-being", event: "Community Event" },
  { src: "/images/gallery/placeholder-volunteers.svg", caption: "The volunteer crew that makes it all happen", event: "Our Volunteers" },
  { src: "/images/gallery/placeholder-drive-2.svg", caption: "Every donation helps save up to three lives", event: "Blood Drive · Carter BloodCare" },
];

export const upcomingEvents = [
  { date: "Coming soon", title: "Community Blood Drive", location: "Location to be announced", description: "Partner drive with Carter BloodCare. Donors and day-of volunteers needed." },
  { date: "Coming soon", title: "Food Packaging Event", location: "Location to be announced", description: "Help assemble meal kits for local families. Great for groups and kids 8+." },
];

export const tickerItems = [
  "Blood drives with Carter BloodCare",
  "Food packaging for local families",
  "Heart Walks with the American Heart Association",
  "100% volunteer-run",
  "Community well-being, everywhere",
];
