var siteData = {
  darkMode: false,
  userTheme: "light-theme",
  generic: {
    summary: `I'm a software engineer based in Seattle, WA. This website acts as a resume as well as a place to show off projects and share social media links.`,
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
  education: [
    {
      title: "Washington State University - B.Sc. CS",
      date: "2021 - May 5th, 2025",
      url: "https://school.eecs.wsu.edu/academics/undergraduate-program/computer-science/",
    },
  ],
  experiences: [
    {
      title: "Stealth Startup - Software Engineer",
      date: "2023 - Present",
      description: [
        "Developed 3 full-stack web applications from scratch to meet business needs",
        "Set up an Azure tenant using Bicep IaC for continuous deployment",
        "Managed an Azure Kubernetes Service (AKS) cluster",
        "Enhanced an open-source project with new features",
        "Provided support for several production applications",
      ],
    },
    {
      title: "Premera Blue Cross - Software Engineer Intern",
      date: "Summer 2024",
      description: [
        "Fixed 15+ bugs in a C# back-end API",
        "Worked on an agile team",
        "Wrote test plans and utilized SQL to gather test data",
        "Used test driven development (TDD) to build applications",
        "Integrated application insights monitoring into several microservices",
      ],
      url: "https://www.premera.com",
    },
    {
      title: "Premera Blue Cross - Systems Engineering Intern",
      date: "Summer 2023",
      description: [
        "Utilized Azure Policy to enforce HIPAA compliance across an Azure tenant",
        "Used Bicep and Terraform to interact with Azure",
        "Worked on an agile team utilizing Azure DevOps",
      ],
      url: "https://www.premera.com",
    },
    {
      title: "WSU VCEA - Teaching Assistant",
      date: "Fall Semester 2023",
      description: [
        "Taught a 3-hour lab section for 17 students",
        "Held office hours and provided one-on-one help for students",
        "Described C programming concepts during lab and office hours",
      ],
    },
    {
      title: "UW Medicine - Program Assistant",
      date: "2020 - Present",
      description: [
        "Created data visualizations using Python and R",
        "Developed several production ready full-stack web apps in Python",
        "Worked with the Foy Lab to develop a machine learning approach for test interpretations",
      ],
      url: "https://foylab.xyz/people.html",
    },
    {
      title: "UW Medicine - Volunteer",
      date: "2019 - 2020",
      description: [
        "Helped with several data science tasks using Python and R",
        "Converted a SQL script to R, allowing for easier development",
      ],
      url: "",
    },
    {
      title: "Crimson Code Hackathon",
      date: "2022 - 2022",
      description: [
        "Won 1st place in our category for this 24-hour hackathon",
        "Developed a react app with a C# back-end along with 3 other team members",
      ],
      url: "https://dailyevergreen.com/128124/news/students-compete-learn-new-coding-in-annual-hackathon/",
    },
    {
      title: "BHS General Computing Club (GCC)",
      date: "2019 - 2021",
      description: [
        "Co-president of the club along with 2 other students",
        "Developed projects alongside other club members",
      ],
      url: "https://gcc.nlaha.com",
    },
  ],
  programming: [
    {
      title: "Godot MIDI",
      description:
        "Wrote a custom MIDI file parser from scratch both in C# and later in C++ as a plugin for the Godot game engine. This allows developers to incorporate music synchronization into their games or applications easily. It is an open-source project with over sixty stars on GitHub.",
      url: "https://github.com/nlaha/godot-midi",
      photos: [],
    },
    {
      title: "SPS MC",
      description:
        "SPS MC is an Office 365 secured Minecraft server for Seattle Public Schools students. It uses the Office365 API to verify if a player is a part of Seattle Public Schools.",
      url: "https://github.com/GCC-Minecraft-Team",
      photos: [],
    },
    {
      title: "The Top",
      description:
        "Composed an original soundtrack for a game, and provided additional assistance with programming some more advanced features. It is available for purchase on Steam.",
      url: "https://store.steampowered.com/app/2096560/The_Top/",
    },
    {
      title: "Equinox Dialogue",
      description: "A nonlinear dialogue tree generation tool made with React",
      url: "https://github.com/nlaha/EquinoxDialogue",
    },
    {
      title: "Japanese Art Swords",
      description:
        "A fully custom website I made using CraftCMS, I wrote a python script to scrape and import data from the old Drupal site.",
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
  ],
  art: [
    {
      title: "3D Art Portfolio",
      description: "A collection of 3D art I have made over the years",
      url: "https://www.artstation.com/nlaha",
    },
    {
      title: "Digital Filmmaking",
      description: [
        "Completed four years of the Ballard High School digital film-making program",
        "Won department scholar for my achievements during that time",
      ],
      url: "https://vimeo.com/559140574",
    },
  ],
};

export default siteData;
