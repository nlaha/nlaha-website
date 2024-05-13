<template>
  <div class="dark-mode-button-container">
    <button className="dark-mode-button" v-on:click="toggleDarkMode">
      <span v-if="darkMode"><i class="bi bi-moon-fill"></i></span>
      <span v-else><i class="bi bi-sun-fill"></i></span>
    </button>
  </div>
  <div class="container section">
    <nav class="panel">
      <div class="header-div">
        <div class="title-container">
          <h1 class="title site-title">Nathan Laha</h1>
          <p class="subtitle site-subtitle">Computer Science Student @ WSU</p>
        </div>
      </div>
    </nav>
    <nav class="panel">
      <div class="social-container">
        <div class="social-group panel card">
          <a
            role="button"
            aria-label="Washington State University VCEA"
            href="https://vcea.wsu.edu"
            class="social-icon"
          >
            <img class="wsu-icon" src="wsu.svg" title="WSU VCEA" />
          </a>
          <a
            role="button"
            aria-label="Instagram"
            href="https://instagram.com/nathan.laha"
            class="social-icon"
          >
            <i class="bi bi-instagram" title="Instagram"></i>
          </a>
          <a role="button" href="https://github.com/nlaha" class="social-icon">
            <i class="bi bi-github" title="GitHub"></i>
          </a>
          <a
            role="button"
            aria-label="Facebook"
            href="https://www.facebook.com/nathan.laha.3"
            class="social-icon"
          >
            <i class="bi bi-facebook" title="Facebook"></i>
          </a>
          <a
            role="button"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/nlaha"
            class="social-icon"
          >
            <i class="bi bi-linkedin" title="LinkedIn"></i>
          </a>
          <a role="button" href="mailto:nlaha@nlaha.com" class="social-icon">
            <i class="bi bi-envelope-at-fill" title="Email"></i>
          </a>
          <a
            role="button"
            aria-label="Download Resume"
            href="https://github.com/nlaha/nlaha-website-2021/raw/main/NathanLaha_Resume_NoContact.pdf"
            class="resume-download-link social-icon"
          >
            <i
              class="bi bi-file-earmark-person-fill"
              title="Resume Download"
            ></i>
          </a>
        </div>
      </div>
    </nav>
    <nav class="panel card">
      <p class="panel-heading" style="margin-top: 1rem">About Me</p>
      <div class="panel-block last_panel_block">
        <div class="panel-content">
          <p class="panel-description" style="margin-top: 0rem">
            {{ generic.summary }}
          </p>
          <div style="display: flex; gap: 1em">
            <a href='https://ko-fi.com/B0B1CDW9P' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
          </div>
        </div>
      </div>
    </nav>
    <nav class="panel card">
      <p class="panel-heading">Education & Experience</p>
      <div
        class="panel-block"
        v-for="(experience, index) in experiences"
        v-bind:class="{ last_panel_block: index === experiences.length - 1 }"
        v-bind:key="experience.title"
      >
        <div class="panel-content">
          <h3 class="panel-title">{{ experience.title }}</h3>
          <h4>
            <i>{{ experience.date }}</i>
          </h4>
          <p class="panel-description">{{ experience.description }}</p>
          <a :href="experience.url"
            ><button class="panel-button" v-if="experience.url">
              Learn More
            </button></a
          >
        </div>
      </div>
    </nav>

    <nav class="panel card">
      <p class="panel-heading n-panel-heading">Programming Projects</p>
      <div
        class="panel-block spotlight-group"
        v-for="(project, index) in programming"
        v-bind:class="{ last_panel_block: index === programming.length - 1 }"
        v-bind:key="project.title"
      >
        <div class="panel-content">
          <h3 class="panel-title">{{ project.title }}</h3>
          <p class="panel-description">{{ project.description }}</p>
          <a :href="project.url"
            ><button class="panel-button" v-if="project.url">
              Learn More
            </button></a
          >
        </div>
      </div>
    </nav>

    <nav class="panel card">
      <p class="panel-heading n-panel-heading">Art Projects</p>
      <div
        class="panel-block"
        v-for="(project, index) in art"
        v-bind:class="{ last_panel_block: index === art.length - 1 }"
        v-bind:key="project.title"
      >
        <div class="panel-content">
          <h3 class="panel-title">{{ project.title }}</h3>
          <p class="panel-description">{{ project.description }}</p>
          <a :href="project.url"
            ><button class="panel-button" v-if="project.url">
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
    downloadResume() {
      exportSiteAsPDF(this);
    },
  },
};
</script>


