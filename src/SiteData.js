var siteData = {
  darkMode: false,
  userTheme: "light-theme",
  generic: {
    summary: `
I'm a 2nd year student at Washington State University working on my BS in Computer Science. I've always had a passion for programming and
I try to work on personal projects in my free time.
        `,
  },
  photography: {
    description: `
            Every year in the summer I go hiking around the pacific northwest,
            one of my favorite activities while out enjoying nature is taking
            photos. Below (if my code is working correctly) you should see a
            gallery of photos taken by me! For more photos, check out my instagram page.
        `,
    baseDir: "images/photography/",
    images: [
      "_A7R1549-HDR.jpg",
      "_A7R1183.jpg",
      "_A7R1685.jpg",
      "_A7R1726.jpg",
      "_A7R1727.jpg",
      "_A7R1736.jpg",
      "_A7R1170.jpg",
      "_A7R1667.jpg",
    ],
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
  skills: [
    {
      name: "NodeJS and JavaScript (Full Stack)",
      level: "75",
    },
    {
      name: "C and C++",
      level: "79",
    },
    {
      name: "Linux Server Configuration",
      level: "70",
    },
    {
      name: "Azure DevOps Project Management",
      level: "25",
    },
    {
      name: "Python",
      level: "85",
    },
    {
      name: "HTML and CSS Web Design",
      level: "80",
    },
    {
      name: "JAVA & C# Programming",
      level: "78",
    },
    {
      name: "SQL and NoSQL databases",
      level: "50",
    },
  ],
  experiences: [
    {
      title: "UW Medicine - Temporary Work",
      date: "2020 - Present",
      description:
        "Currently working in a temporary position expanding on my previous volunteer position with Laboratory Medicine Informatics. I'm currently working on data science and web development projects using Python, R and SQL.",
      url: "",
    },
    {
      title: "UW Medicine - Volunteer Work",
      date: "2019 - 2020",
      description:
        "Assisted Laboratory Medicine Informatics with a variety of small Python and R tasks over the course of a year.",
      url: "",
    },
    {
      title: "Washington State University - B.Sc. CS",
      date: "2021 - Present",
      description:
        "Working towards a Bachelor of Science in computer science from the WSU Voiland College of Engineering and Architecture.",
      url:
        "https://school.eecs.wsu.edu/academics/undergraduate-program/computer-science/",
    },
    {
      title: "Crimson Code Hackathon",
      date: "2022 - 2022",
      description:
        "Participated in the 2022 Crimson Code hackathon with a team of 4. Our web app \"Coug Study Network\" won first place and I've since decided to continue the project.",
      url: "https://dailyevergreen.com/128124/news/students-compete-learn-new-coding-in-annual-hackathon/",
    },
    {
      title: "Ballard High School - APCS",
      date: "2017 - 2021",
      description:
        "My first formal computer science class. Used the JAVA programming language and passed the AP exam with a 5/5.",
      url: "",
    },
    {
      title: "BHS General Computing Club",
      date: "2019 - 2021",
      description:
        "Leader of the BHS General Computing Club (GCC). At GCC we create a space where people of all skill levels can learn about software/game development, data science and graphic art.",
      url: "https://gcc.nlaha.com",
    },
  ],
  programming: [
    {
      title: "Coug Study Network",
      description:
        "Coug Study Network is a platform for sharing assignment information and study habits. It allows students to make posts about assignments and rate how difficult or time consuming they were. This gives both students and professors valuable information about the classes.",
      url: "https://wsusn.nlaha.com",
      photos: [],
    },
    {
      title: "SPS MC",
      description:
        "SPS MC is an Office 365 secured Minecraft server for Seattle Public Schools students. It uses the Office365 API to verify if a player is a part of Seattle Public Schools.",
      url: "https://spsmc.net",
      photos: [],
    },
    {
      title: "War Map",
      description:
        "War Map is a work in progress political data visualization tool. It can analyze election data down to the precinct level.",
      url: "https://map.nlaha.com",
      photos: [],
    },
    {
      title: "Japanese Art Swords",
      description:
        "A fully custom website I made using CraftCMS, I wrote a python script to scrape and import data from the old drupal site.",
      url: "https://japaneseartswords.com",
      photos: [],
    },
    {
      title: "NOS",
      description:
        "A simple and work-in-progress operating system I made for educational purposes. Currently just runs Conway's Game of Life on boot.",
      url: "https://github.com/nlaha/NOS",
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
      description: "Composed an original soundtrack for a game, and provided assistance with programming some more advanced features. It is availible for purchase on Steam.",
      url: "https://store.steampowered.com/app/2096560/The_Top/",
    },
    {
      title: "Void World",
      description:
        "Working with 4 other programmers and level designers, I took on the role of engine programmer and lead artist to create a first-person puzzle game. We spent a year working on this during the height of COVID-19 and while we didn't feel the product was ready to be put on the market, it's a good showcase of my technical and artistic ability. I created it in Unreal Engine and built a modular C++ framework so that puzzle elements could be easily added by our level designers.",
      url: "",
      photos: ["VW_Items.png", "VW_Items1.png"],
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
        'I graduated the digital filmmaking program at BHS with a department scholar award. In this program I learned how to create high quality productions and work in a team effectively, even in stressful situations. My animation "Time Tower" won awards at the Northwest High School Film Festival and the National Academy of Television Arts and Sciences - Northwest Emmy Awards.',
      url: "https://vimeo.com/559140574",
    },
  ],
};

export default siteData;
