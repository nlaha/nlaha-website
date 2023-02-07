<template>
  <div class="dark-mode-button-container">
    <button className="dark-mode-button" v-on:click="toggleDarkMode">
      <span v-if="darkMode"><ion-icon name="sunny"></ion-icon></span>
      <span v-else><ion-icon name="moon"></ion-icon></span>
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
            <ion-icon name="logo-instagram" title="Instagram"></ion-icon>
          </a>
          <a role="button" href="https://github.com/nlaha" class="social-icon">
            <ion-icon name="logo-github" title="GitHub"></ion-icon>
          </a>
          <a
            role="button"
            aria-label="Facebook"
            href="https://www.facebook.com/nathan.laha.3"
            class="social-icon"
          >
            <ion-icon name="logo-facebook" title="Facebook"></ion-icon>
          </a>
          <a
            role="button"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/nlaha"
            class="social-icon"
          >
            <ion-icon name="logo-linkedin" title="LinkedIn"></ion-icon>
          </a>
          <a role="button" href="mailto:nlaha@nlaha.com" class="social-icon">
            <ion-icon name="mail" title="Email"></ion-icon>
          </a>
        </div>
        <div class="social-group panel card">
          <a
            role="button"
            aria-label="Download Resume"
            href="https://github.com/nlaha/nlaha-website-2021/raw/main/NathanLaha_Resume.pdf"
            class="resume-download-link resume-button"
          >
            Resume
          </a>
          <a
            role="button"
            aria-label="Download Resume"
            href="https://github.com/nlaha/nlaha-website-2021/raw/main/NathanLaha_Resume.pdf"
            class="resume-download-link resume-icon"
          >
            <ion-icon name="download" title="Resume Download"></ion-icon>
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
          <p class="panel-description">
            I also have a blog, but I mainly use it for school projects and
            occasional notes.
          </p>
          <div style="display: flex; gap: 1em">
            <a
              aria-label="Notion"
              role="button"
              href="https://njlaha.notion.site/"
              ><button class="panel-button">Notion</button>
            </a>
            <a aria-label="Blog" role="button" href="https://blog.nlaha.com/"
              ><button class="panel-button">Blog</button>
            </a>
            <a aria-label="Bots" role="button" href="https://wos.nlaha.com/"
              ><button class="panel-button">Bots</button>
            </a>
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
    this.sortSkills();
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
    sortSkills() {
      this.skills.sort((a, b) => (a.level < b.level ? 1 : -1));
    },
    downloadResume() {
      exportSiteAsPDF(this);
    },
  },
};
</script>


