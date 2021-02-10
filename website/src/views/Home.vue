<template>
  <div>
    <div class="home"> 
      <div class="container">
        <div class="holder-users">
          <div class="wrapper">
            <div class="title">Deelnemers:</div>
            <input type="text" class="search" placeholder="Naam werknemer.." v-model="searchTerm">
            <div class="list">
              <div class="user" v-for="item in filterItems" :key="item.id">
                <div class="name">{{item.naam}}</div>
                <div class="function">{{item.afdeling}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      userList: [],
      searchTerm: '' 
    }
  },
  methods: {
    getUserList(){
      let api = 'http://dump.lwdev.nl/vue-cursus-api/deelnemers/'
      this.axios.get(api).then((response) => {
        console.log(response.data)
        // this.deelnemers = response.data;
        this.userList = response.data;
      })
    }      
  },
  computed: {
    filterItems: function(){
      //Kijk of er een search term is ingevuld in de input velden
      if(this.searchTerm){
        //Filter specifiek op naam 

        // NOTE: Ik ben nog niet zon held met filter functies van arrays. Dus dit kan 100% beter genoteerd worden. Nu wordt er een filter gebruikt per type
        // alleen dit moet uiteraard variabel zijn.
        const naam = this.userList.filter((item)=>{return this.searchTerm.toLowerCase().split(' ').every(user => item.naam.toLowerCase().includes(user))});
        const afdeling = this.userList.filter((item)=>{return this.searchTerm.toLowerCase().split(' ').every(user => item.afdeling.toLowerCase().includes(user))})

        if(naam.length !== 0){
          return naam
        } else if(afdeling.length !== 0){
          return afdeling
        } else {
           return this.userList;
        }

      }else{
        return this.userList;
      }
    }
  },
  created(){
    this.getUserList();
  }
}
</script>

<style scoped lang="scss">

  .home{
    padding-top: 140px;
    .container{
      .holder-users{
        .wrapper{
          max-width: 660px;
          margin: 0 auto;
          padding: 24px;
          background-color: white;
          .title{
            font-size: 32px;
            color: #fdc652;
            font-weight: 500;
            margin-bottom: 8px;
            text-transform: uppercase;
          }
          input.search{
            padding: 8px 16px;
            border: solid 1px #e7e7e7;
            border-radius :4px;
            font-size: 18px;
            width: 100%;
            margin-bottom: 16px;
          }
          .list{
            .user{
              width: 100%;
              border: solid 1px orange;
              border-left: solid 4px orange;
              padding: 16px;
              text-transform: uppercase;
              padding-bottom: 48px;
              margin-bottom: 16px;
              .name{
                font-size: 24px;
                color: black;
                font-weight: bold;
                margin-bottom: 8px;
              }
              .function{
                color: black;
                font-weight: 16px;
              }
            }
          }
        }
      }
    }
  }

</style>
