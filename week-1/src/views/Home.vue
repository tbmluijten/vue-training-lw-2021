<template>
  <div>
    <h1>Home</h1>
    <p>Welkom {{name}} bij de cursus!</p>
    <div class="holder-buttons">
      <VcButton/>
      <!-- <div class="button" @click="getParticipantsList();">Haal deelnemers op</div> -->
    </div>
    <div id="user-list">
      <UserList :allUsers="deelnemers"/>
      
      <div class="manual">
        <div class="title">Wil je iemand toevoegen?</div>
        <div class="holder-input">
          <input type="text" v-model="newUser" placeholder="Naam">
          <input type="text" v-model="newFunction" placeholder="Functie">
        </div>
        <div class="button" @click="addUser()">Toevoegen</div>
      </div>
      
      
      
    </div>
  </div>
</template>

<style lang="scss">
h1{
  text-align: center;
}
p{
  text-align :center;
  max-width: 660px;
  margin: 0 auto;
  margin-bottom: 24px;
}
.holder-buttons{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  .button{
    padding: 6px 12px;
    display: inline-block;
    background-color: #255C99;
    color: white;
    cursor: pointer;
    border-radius :3px;
    transition: opacity 0.4s;
    &:hover{
      opacity: 0.8;
    }
  }
}
#user-list{
  max-width:500px;
  margin: 0 auto;
  .holder-users{
    margin-bottom:24px;
  }
  .user{
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border: solid 2px rgba(0,0,0,0.8);
    margin-bottom: 4px;
    
    .holder-details{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .close{
      width: 24px;
      height: 24px;
      margin-left: 16px;
      border-radius :4px;
      background-color: white;
      border: solid 1px black;
      background-image: url('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png');
      background-size: 80%;
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;
      transition: opacity 0.2s;
      &:hover{
        opacity: 0.6;
      }
    }
    
  }
  .manual{
    width: 100%;
    .title{
      margin-bottom: 8px;
    }
    .holder-input{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: 16px;
      input{
        width: calc( 50% - 56px);
        padding: 12px 24px;
        border: solid 1px rgba(0,0,0,0.4);
        font-size: 16px;
        border-radius: 4px;
      }
    }
    .button{
      padding: 6px 12px;
      display: inline-block;
      background-color: #255C99;
      color: white;
      cursor: pointer;
      border-radius :3px;
      transition: opacity 0.4s;
      &:hover{
        opacity: 0.8;
      }
    }
  }
}
</style>

<script>

import VcButton from "@/components/Button.vue"
import UserList from "@/components/Users.vue"

  export default {
    name: 'Home',
    components: {
      VcButton,
      UserList
    },
    data(){
      return  {
        name: 'Tom',
        idCount: 6,
        newUser: '',
        newFunction: '',
        deelnemers: []
      }
    },
    methods: {
      addUser(){
        let api = 'http://dump.lwdev.nl/vue-cursus-api/addDeelnemer/'
        if(this.newUser && this.newFunction){ 
          this.axios.post(api, {
            naam: this.newUser,
            afdeling: this.newFunction
          }).then(response => {
            console.log('succes!')
            this.newUser= '';
            this.newFunction= '';
            this.getAllDeelnemers();
          });
        }
      },
      
      addUserLocal(){
        this.deelnemers.push({
          id: (this.idCount + 1),
          naam: this.newUser,
          afdeling: this.newFunction
        })
        this.idCount++
        this.newUser= '';
        this.newFunction= '';
      },

      deleteUserLocal(id){
        console.log(id)
        for(let i = 0; i < this.deelnemers.length; i++){
          if(this.deelnemers[i].id == id){
            this.deelnemers.splice(i, 1)
          }
        }
      },

      getAllDeelnemers(){
        let api = 'http://dump.lwdev.nl/vue-cursus-api/deelnemers/'
        this.axios.get(api).then((response) => {
          console.log(response.data)
          this.deelnemers = response.data;
        })
      }


    },

    created(){
      console.log('called')
      this.getAllDeelnemers();
    }
  }
</script>