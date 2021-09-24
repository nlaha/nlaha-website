<template>
  <div class="dark-mode-button-container">
    <button className="dark-mode-button" v-on:click="toggleDarkMode">
      <span v-if="darkMode"><ion-icon name="sunny"></ion-icon></span>
      <span v-else><ion-icon name="moon"></ion-icon></span>
    </button>
  </div>
  <div class="container section">
    <div class="header-div">
      <div class="title-container">
        <h1 class="title site-title fadeIn">Nathan Laha</h1>
        <p class="subtitle site-subtitle fadeIn">
          Computer Science Student @ WSU
        </p>
      </div>
      <div class="social-container fadeIn">
        <a href="https://vcea.wsu.edu">
          <img class="wsu-icon" src="wsu.svg" />
        </a>
        <a href="https://instagram.com/nathan.laha">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="https://github.com/nlaha">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.facebook.com/nathan.laha.3">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </div>
    </div>
    <nav class="panel fadeIn">
      <p class="panel-heading">Education & Experience</p>
      <div
        class="panel-block"
        v-for="experience in experiences"
        v-bind:key="experience.title"
      >
        <div class="panel-content">
          <h3 class="panel-title">{{ experience.title }}</h3>
          <h4>
            <i>{{ experience.date }}</i>
          </h4>
          <p class="panel-description">{{ experience.description }}</p>
          <a :href="experience.url"
            ><button
              class="button panel-button is-dark is-outlined"
              v-if="experience.url"
            >
              Learn More
            </button></a
          >
        </div>
      </div>
    </nav>

    <nav class="panel fadeIn">
      <p class="panel-heading">Skills</p>
      <div class="panel-block">
        <div class="skill-container">
          <p class="panel-title">
            Sorted by proficiency and experience in descending order. Relative
            to my overall level of experience.
          </p>
          <div
            class="panel-content"
            v-for="skill in skills"
            v-bind:key="skill.name"
          >
            <h3 class="panel-description">{{ skill.name }}</h3>
            <progress
              class="progress skill-level is-medium"
              :value="skill.level"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </nav>

    <nav class="panel fadeIn">
      <p class="panel-heading n-panel-heading">Programming Projects</p>
      <div
        class="panel-block"
        v-for="project in programming"
        v-bind:key="project.title"
      >
        <div class="panel-content">
          <h3 class="panel-title">{{ project.title }}</h3>
          <p class="panel-description">{{ project.description }}</p>
          <a :href="project.url"
            ><button
              class="button panel-button is-dark is-outlined"
              v-if="project.url"
            >
              Learn More
            </button></a
          >
          <div class="photography-container">
            <div
              class="photography-tile"
              v-for="(image, index) in project.photos"
              v-bind:key="`image-${index}`"
            >
              <a
                class="spotlight image gallery-image"
                :href="photography.baseDir + image"
              >
                <img :src="photography.baseDir + image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <nav class="panel fadeIn">
      <p class="panel-heading n-panel-heading">Photography</p>
      <div class="panel-block">
        <div class="panel-content">
          <p class="panel-description">
            {{ photography.description }}
          </p>
          <div class="photography-container">
            <div
              class="photography-tile"
              v-for="(image, index) in photography.images"
              v-bind:key="`image-${index}`"
            >
              <a
                class="spotlight image gallery-image"
                :href="photography.baseDir + image"
              >
                <img :src="photography.baseDir + image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <nav class="panel fadeIn">
      <p class="panel-heading n-panel-heading">Art Projects</p>
      <div
        class="panel-block"
        v-for="project in art"
        v-bind:key="project.title"
      >
        <div class="panel-content">
          <h3 class="panel-title">{{ project.title }}</h3>
          <p class="panel-description">{{ project.description }}</p>
          <a :href="project.url"
            ><button
              class="button panel-button is-dark is-outlined"
              v-if="project.url"
            >
              Learn More
            </button></a
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { exportSiteAsPDF } from "./ResumeGenerator";

export default {
  name: "App",
  components: {},
  data() {
    return {
      darkMode: false,
      userTheme: "light-theme",
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
          level: "60",
        },
        {
          name: "HTML and CSS Web Design",
          level: "50",
        },
        {
          name: "JAVA Programming",
          level: "80",
        },
        {
          name: "SQL and NoSQL databases",
          level: "50",
        },
      ],
      experiences: [
        {
          title: "Washington State University - B.Sc. CS",
          date: "2021 - Present",
          description:
            "Working towards a Bachelor of Science in computer science from the WSU Voiland College of Engineering and Architecture.",
          url: "https://school.eecs.wsu.edu/academics/undergraduate-program/computer-science/",
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
        {
          title: "UW Medicine - Volunteer Work",
          date: "2019 - 2020",
          description:
            "Assisted Laboratory Medicine Informatics with a variety of small Python and R tasks over the course of a year.",
          url: "",
        },
        {
          title: "UW Medicine - Temporary Work",
          date: "2020 - Present",
          description:
            "Currently working in a temporary position expanding on my previous volunteer position with Laboratory Medicine Informatics. I'm currently working on data science projects using Python, R and SQL.",
          url: "",
        },
      ],
      programming: [
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
          title: "SkyMeshGLTF",
          description:
            "A VERY work in progress bulk conversion utility for converting Skyrim .nif files into .gltf files, currently functional but not ready for production.",
          url: "https://github.com/nlaha/SkyMeshGLTF",
          photos: [],
        },
        {
          title: "Void World",
          description:
            "Working with 4 other programmers and level designers, I took on the role of engine programmer and lead artist to create a first-person puzzle game. We spent a year working on this during the height of COVID-19 and while we didn't feel the product was ready to be put on the market, it's a good showcase of my technical and artistic ability. I created it in Unreal Engine and built a modular C++ framework so that puzzle elements could be easily added by our level designers. I created all the art assets myself using a combination of Blender, Substance Painter and Quixel Mixer/Megascans.",
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
  },
  mounted() {
    this.sortSkils();
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.darkMode = true;
      this.setTheme("dark-theme");
    }

    exportSiteAsPDF(this);
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      console.log(`Switching dark mode to: ${this.darkMode}`);
      if (this.darkMode) {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    sortSkils() {
      this.skills.sort((a, b) => (a.level < b.level ? 1 : -1));
    },
  },
};
</script>


