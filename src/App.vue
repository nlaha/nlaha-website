<script setup>
import VLazyImage from "v-lazy-image";
</script>
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
          <img class="wsu-icon" src="wsu.svg" title="WSU VCEA" />
        </a>
        <a href="https://instagram.com/nathan.laha">
          <ion-icon name="logo-instagram" title="Instagram"></ion-icon>
        </a>
        <a href="https://github.com/nlaha">
          <ion-icon name="logo-github" title="GitHub"></ion-icon>
        </a>
        <a href="https://www.facebook.com/nathan.laha.3">
          <ion-icon name="logo-facebook" title="Facebook"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/nlaha">
          <ion-icon name="logo-linkedin" title="LinkedIn"></ion-icon>
        </a>
        <a href="https://app.joinhandshake.com/users/32804032">
          <div class="handshake-icon" src="Handshake.svg" title="Handshake" />
        </a>
        <a href="mailto:nlaha@outlook.com">
          <ion-icon name="mail" title="Email"></ion-icon>
        </a>
        <div>
          <a v-on:click="downloadResume" class="resume-download-link panel">
            Download Resume
            <ion-icon name="download" title="Resume"></ion-icon>
          </a>
        </div>
      </div>
    </div>
    <nav class="panel fadeIn">
      <div class="panel-block">
        <div class="panel-content">
          <p class="panel-description">{{ generic.summary }}</p>
        </div>
      </div>
    </nav>
    <nav class="panel fadeIn">
      <div class="panel-block">
        <div class="panel-content">
          <p class="panel-description">
            A quick note, if you would like to download some working demos of my
            programming projects, or view my full photography portfolio. Please
            visit my Notion site.
            <br>
            <a href="https://njlaha.notion.site/"
              ><button class="button panel-button is-dark is-outlined">
                Notion
              </button>
            </a>
          </p>
        </div>
      </div>
    </nav>
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
        class="panel-block spotlight-group"
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
                :data-src-1920="
                  photography.baseDir +
                  `${image}`.replace(/\.(jpg|jpeg|png|gif)$/, '-1920.png')
                "
                :data-src-2560="
                  photography.baseDir +
                  `${image}`.replace(/\.(jpg|jpeg|png|gif)$/, '-2560.png')
                "
              >
                <v-lazy-image
                  :src="photography.baseDir + image"
                  src-placeholder="/Placeholder.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <nav class="panel fadeIn spotlight-group">
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
                :data-src-2560="
                  photography.baseDir +
                  `${image}`.replace(/\.(jpg|jpeg|png|gif)$/, '-2560.png')
                "
                :data-src-3840="
                  photography.baseDir +
                  `${image}`.replace(/\.(jpg|jpeg|png|gif)$/, '-3840.png')
                "
              >
                <v-lazy-image
                  :src="photography.baseDir + image"
                  src-placeholder="/Placeholder.png"
                />
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

<style scoped>
.v-lazy-image {
  transition: 2s;
  opacity: 0;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>

<script>
import { exportSiteAsPDF } from "./ResumeGenerator";

import siteData from "./SiteData";

export default {
  name: "App",
  components: {},
  data() {
    return siteData;
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
    downloadResume() {
      exportSiteAsPDF(this);
    },
  },
};
</script>


