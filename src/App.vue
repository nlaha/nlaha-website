<template>
  <div class="container">
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
            Sorted by proficiency and experience in descending order.
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
export default {
  name: "App",
  components: {},
  data() {
    return {
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
        {
          title: "Japanese Art Swords",
          description:
            "A fully custom website I made using CraftCMS, I wrote a python script to scrape and import data from the old drupal site.",
          url: "https://japaneseartswords.com",
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
          url: "https://vimeo.com/559140574",
        },
      ],
    };
  },
  mounted() {
    this.sortSkils();
  },
  methods: {
    sortSkils() {
      this.skills.sort((a, b) => (a.level < b.level ? 1 : -1));
    },
  },
};
</script>


