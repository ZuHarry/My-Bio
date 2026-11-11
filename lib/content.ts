// ✏️ EDIT THIS FILE: all the text on your site lives here.

export const site = {
  name: "Muhammad Zuhairy bin Razaly",
  shortName: "Zuhairy",
  role: "Software Engineer",
  title: "Muhammad Zuhairy Razaly | Software Engineer",
  description:
    "Portfolio of Muhammad Zuhairy bin Razaly, a software engineer student",
  location: "Sitiawan, Perak, Malaysia",
  email: "zuhairy812@gmail.com",
  resume: "/resume.pdf", // put your CV in the /public folder as resume.pdf
  photo: "/photo.jpg", // e.g. "/photo.jpg" after adding the image to /public
};

export const hero = {
  tagline: "web & mobile apps, from first idea to shipped",
  headline: "I build web and mobile apps that solve real problems.",
  intro:
    "I'm a Computer Science (Software Development) graduate from Universiti Teknikal Malaysia Melaka. I've built PHP web applications during my internship and Flutter mobile apps for my projects, and I'm looking for a Graduate Software Engineer role.",
};

export const about = {
  paragraphs: [
    "I learned Digital Technology at Politeknik Ungku Omar, then went on to a Bachelor of Computer Science (Software Development) at UTeM. Along the way I interned twice at YTY Group, first in IT support and later as a web developer.",
    "I enjoy building complete products, from the database to the screen, and testing them until they work well. I'm also leading and organising tech communities, and I'm keen to keep learning new technologies, including artificial intelligence.",
  ],
  skills: [
    { group: "Languages", items: ["PHP", "Java", "JavaScript", "C++", "HTML", "CSS"] },
    { group: "Frameworks", items: ["Flutter", "React.js (basic)", "Firebase"] },
    { group: "Databases", items: ["MySQL", "Firebase Firestore"] },
    {
      group: "Tools",
      items: ["Git", "GitHub", "VS Code", "Android Studio", "Arduino IDE", "Microsoft Office"],
    },
  ],
};

export const experience = [
  {
    role: "IT Trainee",
    org: "YTY Group (Enterprise Solutions)",
    place: "Lumut, Perak",
    period: "Mar 2026 – Aug 2026",
    points: [
      "Developed and maintained internal web applications using PHP, HTML, CSS, JavaScript and MySQL to support daily business operations.",
      "Implemented new features and system enhancements based on user requirements.",
      "Ran functional tests, documented findings and worked with developers to fix them.",
      "Wrote manuals and technical documentation for end users and maintenance.",
    ],
  },
  {
    role: "Vice President (previously Event Management Team Member)",
    org: "Developer Student Clubs UTeM",
    place: "UTeM",
    period: "2023 – 2026",
    points: [
      "Coordinated committee members to deliver technical events and community programs.",
      "Worked with university clubs and external partners to increase student engagement.",
    ],
  },
  {
    role: "IT Trainee",
    org: "YTY Group (MIS)",
    place: "Lumut, Perak",
    period: "Oct 2022 – Mar 2023",
    points: [
      "Provided technical support by troubleshooting software, hardware and network issues.",
      "Configured operating systems, software and peripherals to company standards.",
    ],
  },
];

export const projects = [
  {
    image: "", // optional screenshot, e.g. "/projects/einventory.png"
    title: "eInventory",
    note: "Final year project, UTeM",
    description:
      "A mobile inventory management app built with Flutter and Firebase. It uses Firestore CRUD operations to keep stock updated in real time.",
    tags: ["Flutter", "Firebase", "Firestore"],
    live: "",
    code: "https://github.com/ZuHarry", // replace with the repo link
  },
  {
    image: "", // optional screenshot, e.g. "/projects/einventory.png"
    title: "eBike SMS (Student Mobility Solution)",
    note: "1st place, Workshop 2 Software Development Project, UTeM",
    description:
      "A cross-platform Flutter app with real-time GPS tracking. An Arduino-based GPS module sends the bike's location to the app.",
    tags: ["Flutter", "Arduino", "GPS"],
    live: "",
    code: "https://github.com/ZuHarry", // replace with the repo link
  },
  {
    image: "", // optional screenshot, e.g. "/projects/einventory.png"
    title: "eSihat",
    note: "3rd place, Diploma Final Year Project Exhibition (Programming), PUO",
    description:
      "An Android health appointment app built with Java and Android Studio, using object-oriented design and tested for usability.",
    tags: ["Java", "Android Studio"],
    live: "",
    code: "",
  },
  {
    image: "", // optional screenshot, e.g. "/projects/einventory.png"
    title: "Groceries Sale Tracker",
    note: "Workshop 1, UTeM",
    description: "A C++ program for tracking grocery sales.",
    tags: ["C++"],
    live: "",
    code: "",
  },
  {
    image: "", // optional screenshot, e.g. "/projects/einventory.png"
    title: "Video Interview Website",
    note: "Languages Department, PUO",
    description: "A video interview website built with Google Sites for the Languages Department.",
    tags: ["Google Sites"],
    live: "",
    code: "",
  },
];

export const education = [
  {
    image: "", // optional screenshot, e.g. "/projects/einventory.png"
    title: "Bachelor of Computer Science (Software Development) with Honours",
    school: "Universiti Teknikal Malaysia Melaka (UTeM)",
    period: "2023 – 2026",
    detail: "CGPA 3.74",
    courses:
      "Software Engineering, Data Structures & Algorithms, Database Systems, Mobile Application Development, Human Computer Interaction, Web Programming, Software Verification & Validation",
  },
  {
    image: "", // optional screenshot, e.g. "/projects/einventory.png"
    title: "Diploma in Digital Technology",
    school: "Politeknik Ungku Omar (PUO)",
    period: "2020 – 2023",
    detail: "CGPA 3.96",
    courses:
      "Mobile Application Development, Web Application Development, System Analysis and Design, Digital Multimedia, Python Programming, Interactive Programming",
  },
];

export const achievements = [
  "Dean's List, Bachelor of Computer Science (Software Development), UTeM",
  "Dean's List, Diploma in Digital Technology, PUO",
  "1st place, Workshop 2 Software Development Project (eBike SMS), UTeM",
  "3rd place, GDSC Code Battle 2024 (HackerRank programming competition)",
  "3rd place, Diploma Final Year Project Exhibition, Programming Category (eSihat)",
  "Program President, 2022 Sem 5 Annual Faculty Dinner, JTMK, PUO",
];

export const socials = [
  { label: "GitHub", href: "https://github.com/ZuHarry" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-linkedin" }, // replace with your profile link
];
