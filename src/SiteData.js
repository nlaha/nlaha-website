var siteData = {
  darkMode: false,
  userTheme: "light-theme",
  generic: {
    summary: `I'm a 4th-year undergraduate student at Washington State University studying Computer Science. This website acts as a resume as well as a place to show off projects and share social media links.`,
  },
  contacts: [
    {
      type: "Website",
      value: "https://nlaha.com",
    },
    {
      type: "Email",
      value: "nlaha@outlook.com",
    },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/nlaha/",
    },
    {
      type: "GitHub",
      value: "https://github.com/nlaha",
    },
  ],
  experiences: [
    {
      title: "Premera Blue Cross - Software Engineer Intern",
      date: "Summer 2024",
      description: "Working as a full-time intern on the medical management team, I contributed to several back-end services to improve the efficiency and traceability of Premera data. During this time I helped identify and fix 15+ bugs in an application during UAT.",
      url: "https://www.premera.com",
    },
    {
      title: "Premera Blue Cross - Systems Engineering Intern",
      date: "Summer 2023",
      description: "Working as a full-time intern in systems engineering at Premera Blue Cross. I helped the cloud platform team implement policy and Terraform code across an Azure tenant. Ultimately, this enabled 5 teams across the company better utilize Azure while staying compliant with HIPAA and HITRUST standards.",
      url: "https://www.premera.com",
    },
    {
      title: "WSU VCEA - Teaching Assistant",
      date: "Fall Semester 2023",
      description: "Working as a TA for the Voiland college of engineering, I taught a 3-hour lab section once a week, helping 17 students review content and prepare for their exams. I also held office hours where I provided one-on-one assistance to those that needed it."
    },
    {
      title: "UW Medicine - Program Assistant",
      date: "2020 - Present",
      description: "Working as a part-time software engineer helping to create web apps and data visualizations using Python, R, and SQL. During this time, I developed a full-stack web application to display and analyze laboratory test metrics. I also worked on a research project as part of the Foy Lab at UW Medicine.",
      url: "https://foylab.xyz/people.html",
    },
    {
      title: "Stealth Startup - Freelance Software Engineer",
      date: "2023 - 2024",
      description: "Working as a freelance software engineer, I developed a full-stack web application using React and TypeScript. This was a re-write of an open-source project I had developed years earlier called Equinox Dialogue that had the attention of the founders for its ease of use.",
    },
    {
      title: "UW Medicine - Volunteer",
      date: "2019 - 2020",
      description: "Working as a volunteer helping with small data science tasks in R and Python. During this time, I learned the R programming language and developed an application to replace a SQL script that was no longer maintained. By doing this, I unified a codebase that had previously relied on SQL to manage data intake.",
      url: "",
    },
    {
      title: "Washington State University - B.Sc. CS",
      date: "2021 - 2025",
      description: "Working towards a Bachelor of Science in computer science from the WSU Voiland College of Engineering and Architecture.",
      URL: "https://school.eecs.wsu.edu/academics/undergraduate-program/computer-science/",
    },
    {
      title: "Crimson Code Hackathon",
      date: "2022 - 2022",
      description: 'Participated in the 2022 Crimson Code hackathon with a team of 4. Our web app "Coug Study Network" won first place.',
      URL: "https://dailyevergreen.com/128124/news/students-compete-learn-new-coding-in-annual-hackathon/",
    },
    {
      title: "Ballard High School - APCS",
      date: "2017 - 2021",
      description: "My first formal computer science class. Used the JAVA programming language and passed the AP exam with a 5/5.",
      url: "",
    },
    {
      title: "BHS General Computing Club",
      date: "2019 - 2021",
      description: "Leader of the BHS General Computing Club (GCC). At GCC we create a space where people of all skill levels can learn about software/game development, data science and graphic art.",
      url: "https://gcc.nlaha.com",
    },
  ],
  programming: [
    {
      title: "Godot MIDI",
      description: "Wrote a custom MIDI file parser from scratch both in C# and later in C++ as a plugin for the Godot game engine. This allows developers to incorporate music synchronization into their games or applications easily. It is an open-source project with over sixty stars on GitHub.",
      url: "https://github.com/nlaha/godot-midi",
      photos: [],
    },
    {
      title: "SPS MC",
      description: "SPS MC is an Office 365 secured Minecraft server for Seattle Public Schools students. It uses the Office365 API to verify if a player is a part of Seattle Public Schools.",
      url: "https://github.com/GCC-Minecraft-Team",
      photos: [],
    },
    {
      title: "Equinox Dialogue",
      description: "A nonlinear dialogue tree generation tool made with React",
      url: "https://github.com/nlaha/EquinoxDialogue",
    },
    {
      title: "Japanese Art Swords",
      description: "A fully custom website I made using CraftCMS, I wrote a python script to scrape and import data from the old Drupal site.",
      url: "https://japaneseartswords.com",
      photos: [],
    },
    {
      title: "SkyMeshGLTF",
      description:
        "A VERY work in progress bulk conversion utility for converting Skyrim .nif files into .gltf files, currently functional but not ready for production.",
      url: "https://github.com/nlaha/SkyMeshGLTF",
      photos: [],
    },
    {
      title: "The Top",
      description:
        "Composed an original soundtrack for a game, and provided additional assistance with programming some more advanced features. It is available for purchase on Steam.",
      url: "https://store.steampowered.com/app/2096560/The_Top/",
    },
    {
      title: "Void World",
      description:
        "Working with 4 other programmers and level designers, I took on the role of engine programmer and lead artist to create a first-person puzzle game. We spent a year working on this during the height of COVID-19 and while we didn't feel the product was ready to be put on the market, it's a good showcase of my technical and artistic ability. I created it in Unreal Engine and built a modular C++ framework so that puzzle elements could be easily added by our level designers.",
      url: "",
    },
  ],
  art: [
    {
      title: "3D Art",
      description:
        "In my free time, I like doing 3D modeling. It's a skill I want to continue to improve even if it's just for fun. Check out my Artstation page at the link below.",
      url: "https://www.artstation.com/nlaha",
    },
    {
      title: "Digital Filmmaking",
      description:
        'I graduated from the digital filmmaking program at BHS with a department scholar award. In this program, I learned how to create high-quality productions and work in a team effectively, even in stressful situations. My animation "Time Tower" won awards at the Northwest High School Film Festival and the National Academy of Television Arts and Sciences - Northwest Student Emmy Awards.',
      url: "https://vimeo.com/559140574",
    },
  ],
};

export default siteData;
