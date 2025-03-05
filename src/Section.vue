<template>
  <div
    class="panel-block"
    v-for="(item, index) in items"
    v-bind:class="{ last_panel_block: index === items.length - 1 }"
    v-bind:key="item.title"
  >
    <div class="panel-content">
      <h3 class="panel-title">{{ item.title }}</h3>
      <h3 class="panel-subtitle" v-if="showDate">{{ item.date }}</h3>
      <p class="panel-description">
        <span v-if="Array.isArray(item.description)">
          <ul>
            <li v-for="item in item.description" v-bind:key="item">
              {{ item }}
            </li>
          </ul>
        </span>
        <span v-else>
          {{ item.description }}
        </span>
      </p>
      <a :href="item.url"
        ><button class="panel-button" v-if="item.url">Learn More</button></a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDate: {
      type: Boolean,
      required: false,
      default: false,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>