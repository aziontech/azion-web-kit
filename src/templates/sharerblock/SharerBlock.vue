<template>
  <div class="flex gap-3">
    <div id="clipboard" tabindex="-1" v-tooltip.focus.top="{ value: tooltipText, showDelay: 200 }">
      <Button severity="primary" id="clipboardButton" icon="pi pi-link" @click="copyToClipboard" outlined
        v-tooltip.top="{ value: 'Clipboard', showDelay: 200 }" aria-label="clipboard"  />
    </div>
    <LinkIconButton v-for="({ link, icon, title }, index) in data" :aria-label="title" :link="link" :icon="icon" :key="index"
      :tooltipText="title" />
  </div>
</template>

<script setup>
import Button from 'primevue/button';
import LinkIconButton from '../linkiconbutton/LinkIconButton.vue';

/** interface Data {
 link: string,
   icon: string
 } */

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  tooltipText: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: "Share this post"
  },
  sharedURL: {
    type: URL,
    required: true
  },
});

const { sharedURL } = props;

const copyToClipboard = () => {
  navigator.clipboard.writeText(sharedURL)
    .then(() => {
      const tooltipElement = document.getElementById('clipboard')
      tooltipElement.focus()

      setTimeout(() => {
        if (tooltipElement == document.activeElement) {
          document.getElementById('clipboardButton').focus()
        }
      }, 2000)
    })
}
</script>
