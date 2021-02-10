<template>
    <div>
        <div class="upload"> 
          <div class="container">
            <div class="holder-upload">
              <div class="wrapper">
                  <router-link class="return" to="/">
                      Terug
                  </router-link>
                <div class="title">Upload foto</div>
                <div class="subtitle">Voeg een nieuwe foto toe voor:</div>
                <select name="names" id="">
                    <option value="mark">mark</option>
                    <option value="tom">tom</option>
                    <option value="pim">pim</option>
                    <option value="jeffrey">jeffrey</option>
                    <option value="nick">nick</option>
                    <option value="dennis">dennis</option>
                </select>
                <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  name: 'app',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    }
  }
}
</script>


<style scoped lang="scss">

  .upload{
    padding-top: 140px;
    .container{
      .holder-upload{
        .wrapper{
          max-width: 660px;
          margin: 0 auto;
          padding: 24px;
          background-color: white;
          .return{
              color: #fdc652;
              margin-bottom: 16px;
              display: block;
          }
          .title{
            font-size: 32px;
            color: #fdc652;
            font-weight: 500;
            margin-bottom: 32px;
            text-transform: uppercase;
          }
          .subtitle{
              font-weight: bold;
              font-size: 24px;
              margin-bottom: 8px;
          }
          select{
              margin-bottom: 16px;
          }
        }
      }
    }
  }

</style>