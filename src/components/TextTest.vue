<template>
    <div style="min-height: 35vw; min-width: 80vw; border: 2px solid black; background-color: #e6e6e6;" class="m-5">
        <div>
            <h1 class="container d-flex flex-column justify-content-center align-items-center m-2" style="color: black;">LEARNING STYLE TEST</h1>
            <h1 class="container d-flex flex-column justify-content-left align-items-center m-4" style="color: white; background-color: #637bb0; width: 2rem;">1.</h1>
        </div>
        <div v-html="renderedMarkdown" class="m-4"></div>
        <div class="d-flex justify-content-center align-items-center mb-4" style="margin-top: 5rem;">
        <button
            style="width: 10rem; height: 3rem"
            type="button"
            class="btn btn-lg btn-custom mx-2"
        >
            NEXT
        </button>
    </div>
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

