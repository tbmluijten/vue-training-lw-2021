<template>
  <div>
    <h1>Home</h1>
    <p>Welkom {{name}} bij de cursus!</p>
    <div id="user-list">
      <div class="holder-users">
        <div class="user" v-for="item in deelnemers" :key="item.id">
          <div class="holder-details">
            <div class="name">{{ item.naam }}</div>
            <div class="residence">{{item.afdeling}}</div>
          </div>
          <div class="close" @click="deleteUser(item.id)" v-bind:data-id="item.id"></div>
        </div>
      </div>
      
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
  export default {
    name: 'Home',
    data(){
      return  {
        name: 'Tom',
        idCount: 6,
        newUser: '',
        newFunction: '',
        deelnemers: [
          { id: 1, naam: "Mark van Lit", afdeling: "Platforms" },
          { id: 2, naam: "Pim Willems", afdeling: "Platforms" },
          { id: 3, naam: "Tom Luijten", afdeling: "Platforms" },
          { id: 4, naam: "Jeffrey Happel", afdeling: "Engagement" },
          { id: 5, naam: "Nick Goossens", afdeling: "Engagement" },
          { id: 6, naam: "Dennis Leenders", afdeling: "Engagement" },
        ]
      }
    },
    methods: {
      addUser(){
        if(this.newUser && this.newFunction){
          this.deelnemers.push({
            id: (this.idCount + 1),
            naam: this.newUser,
            afdeling: this.newFunction
          })
          this.idCount++
          this.newUser= '';
          this.newFunction= '';
        }
      },

      deleteUser(id){
        console.log(id)
        for(let i = 0; i < this.deelnemers.length; i++){
          if(this.deelnemers[i].id == id){
            this.deelnemers.splice(i, 1)
          }
        }

        //NOTE: Om een of andere reden kreeg ik als ik een "let items in this.deelnemers" functie deed geen objecten terug maar index waardes wanneer ik console.log(items) deed.
        //Ik heb nog niet heel vaak met de nieuwe for loops gewerkt alleen dit "issue" ben ik eerder tegen gekomen. Weet alleen niet hoe ik het beter kan noteren zodat ik als result
        //een object terug krijg uit de array.

        //Ook heb ik het idee dat het targeten van de "data-id" attribute beter kan dan hoe ik het nu heb gedaan.
      }
    }
  }
</script>