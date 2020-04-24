<template>
  <div id="app">
    <HelloWorld msg="Meme Maker 2020"/>
    <ImageUpload v-model="file"/>
     <p v-if="file">{{file.name}}</p>
    <div contenteditable="true">
        <svg height="100">
            <rect width="40" height="50" style="fill:blue;" />
            <rect width="20" height="80" style="fill:red;" />
            <circle r="20" cx="50" cy="50" style="fill:yellow;" />
        </svg>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ImageUpload from './components/ImageUpload.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ImageUpload
  },
  data() {
    return {
      file: null
    }
  },
  computed: {
     loadFile: function() {
        //const preview = document.querySelector('img');
        const reader = new FileReader();

        // reader.addEventListener("load", function () {
        //     // convert image file to base64 string
        //     preview.src = reader.result;
        // }, false);

        return this.file? reader.readAsDataURL(this.file):this.file ;
    }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
