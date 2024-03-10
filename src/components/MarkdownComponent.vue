<template>
  <div>
    <div v-html="renderedMarkdown"></div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      markdownContent: '',
      renderedMarkdown: '',
      lectureParams: {
        ime_lekcije: "Instalacija Fluttera i podešavanje razvojnog okruženja",
        vrstaUcenja: "klasicno"
      },
    };
  },
  mounted() {
    this.fetchMarkdownContent();
  },
  watch: {
    lectureParams: 'fetchMarkdownContent',
  },
  methods: {
    async fetchMarkdownContent() {
      try {
        const response = await fetch('http://localhost:3000/generateLecture', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.lectureParams),
        });

        const data = await response.json();
        const markdown = data['data'];
        this.markdownContent = markdown;
        this.renderMarkdown();
      } catch (error) {
        console.error('Error fetching Markdown content:', error);
      }
    },
    renderMarkdown() {
      const md = new MarkdownIt();
      this.renderedMarkdown = md.render(this.markdownContent);
    },
  },
};
</script>
