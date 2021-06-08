var app = new Vue({
  el: "#app",
  data: {
    skills: [
      {
        name: "NodeJS and Javscript (Full Stack)",
        level: "60",
      },
      {
        name: "C# and C++ Game Development",
        level: "85",
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
        name: "Data Science (Python & R)",
        level: "50",
      },
      {
        name: "HTML and CSS Web Design",
        level: "60",
      },
      {
        name: "JAVA Programming",
        level: "80",
      },
      {
        name: "SQL and NoSQL databases",
        level: "70",
      },
    ],
    experiences: [
      {
        title: "Ballard High School - APCS",
        description:
          "My first formal computer science class. Used the JAVA programming language and passed the AP exam with a 5/5.",
        url: "",
      },
      {
        title: "UW Medicine - Temporary Work",
        description:
          "Assisted Laboratory Medicine Informatics with some data science and visualization programming in both a volunteer position and a paid position.",
        url: "",
      },
      {
        title: "BHS General Computing Club",
        description:
          "Leader of the BHS General Computing Club (GCC). At GCC we create a space where people of all skill levels can learn about software/game development, data science and graphic art.",
        url: "https://gcc.nlaha.com",
      },
    ],
    programming: [
      {
        title: "SPS MC",
        description:
          "SPS MC is an Office 365 secured Minecraft server for Seattle Public Schools students. It uses the Office365 API to verify if a player is actually a part of Seattle Public Schools.",
        url: "https://spsmc.net",
      },
      {
        title: "War Map",
        description:
          "War Map is a work in progress political data visualization tool. It is capable of analyzing election data down to the precinct level.",
        url: "https://map.nlaha.com",
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
          'I\'ve been in the Ballard High School digital filmmaking program for a total of 4 years now. My animation "Time Tower" won awards at the Northwest High School Film Festival and the National Academy of Television Arts and Sciences - Northwest Emmy Awards.',
      },
    ],
  },
  methods: {
    sortSkils(event) {
      this.skills.sort((a, b) => (a.level < b.level ? 1 : -1));
    },
  },
});

app.sortSkils();
