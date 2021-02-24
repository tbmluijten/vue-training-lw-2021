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

                <!-- NOTE: MOET DEZE NOG OPHALEN VANUIT DE API --> 
                <select name="names" id="" v-model="selectedUserId">
                    <option value="62">mark</option>
                    <option value="64">tom</option>
                    <option value="63">pim</option>
                    <option value="66">jeffrey</option>
                    <option value="65">nick</option>
                    <option value="67">dennis</option>
                </select>
                <div class="subtitle">Geselecteerde ID: {{this.selectedUserId}}</div>
                <vue-dropzone ref="myVueDropzone" id="dropzone" :useCustomSlot=true :options="dropzoneOptions" v-on:vdropzone-sending="sendDropzoneData">
                  <div class="dropzone-custom-content">
                    <h3 class="dropzone-custom-title">
                      Pleur hier een leuk plaatje op!
                    </h3>
                  </div>
                </vue-dropzone>
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
  name: 'fileUpload',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      selectedUserId: "",
      dropzoneOptions: {
          url: 'http://dump.lwdev.nl/vue-cursus-api/uploadFoto/upload.php',
          thumbnailWidth: 150,
          maxFilesize: 0.5
      }
    }
  },
  methods: {
    getUserList(){
      let api = 'http://dump.lwdev.nl/vue-cursus-api/deelnemers/'
      this.axios.get(api).then((response) => {
        this.userList = response.data;
      })
    },

    sendDropzoneData(file, xhr, formData){
      // ADD data to formdate before sending it with dropzone
      formData.append("id", this.selectedUserId)
    }
  },
  created(){
    this.getUserList();
  },
  
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