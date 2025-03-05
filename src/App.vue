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
          <div class="hstack">
            <p class="subtitle site-subtitle">Software Engineer</p>
            <div class="social-container">
              <div class="social-group panel card">
                <a
                  role="button"
                  aria-label="Instagram"
                  href="https://instagram.com/nathan.laha"
                  class="social-icon"
                >
                  <i class="bi bi-instagram" title="Instagram"></i>
                </a>
                <a
                  role="button"
                  href="https://github.com/nlaha"
                  class="social-icon"
                >
                  <i class="bi bi-github" title="GitHub"></i>
                </a>
                <a
                  role="button"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/nlaha"
                  class="social-icon"
                >
                  <i class="bi bi-linkedin" title="LinkedIn"></i>
                </a>
                <a
                  role="button"
                  href="mailto:nlaha@nlaha.com"
                  class="social-icon"
                >
                  <i class="bi bi-envelope-at-fill" title="Email"></i>
                </a>
              </div>
            </div>
          </div>
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
            <a
              aria-label="Blog"
              role="button"
              class="panel-button"
              href="https://blog.nlaha.com/"
            >
              Blog
            </a>
            <a href="https://ko-fi.com/B0B1CDW9P" target="_blank"
              ><img
                height="36"
                style="border: 0px; height: 36px"
                src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
                alt="Buy Me a Coffee at ko-fi.com"
            /></a>
          </div>
        </div>
      </div>
    </nav>

    <nav class="panel card">
      <p class="panel-heading">Education</p>
      <Section :items="education" :showDate="true" />
    </nav>

    <nav class="panel card">
      <p class="panel-heading">Experience</p>
      <Section :items="experiences" />
    </nav>

    <nav class="panel card">
      <p class="panel-heading n-panel-heading">Programming Projects</p>
      <Section :items="programming" />
    </nav>

    <nav class="panel card">
      <p class="panel-heading n-panel-heading">Art Projects</p>
      <Section :items="art" />
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
import siteData from "./SiteData";
import Section from "./Section.vue";

export default {
  name: "App",
  components: {
    Section,
  },
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
  },
};
</script>


