<template>
    <div>
        <div class="holder-users">
            <h1>User list:</h1>
            <div class="user" v-for="item in allUsers" :key="item.id">
            <div class="holder-details">
              <div class="name">{{ item.naam }}</div>
              <div class="residence">{{item.afdeling}}</div>
            </div>
            <div class="close" @click="deleteUser(item.id)" v-bind:data-id="item.id"></div>
          </div>
        </div>
    </div>
</template>

<style lang="scss">

  .holder-users{
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
  }

</style>

<script>
export default {
  name: 'UserList',
  props: {
      allUsers: Array
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

    deleteUser(id){
      console.log('delete')
      let api = 'http://dump.lwdev.nl/vue-cursus-api/deleteDeelnemer/';
      this.axios.post(api, {
        id: id,
      }).then(response => {
        console.log('succes!')
        this.getAllDeelnemers();
      });
    },

    getAllDeelnemers(){
      let api = 'http://dump.lwdev.nl/vue-cursus-api/deelnemers/'
      this.axios.get(api).then((response) => {
        console.log(response.data)
        this.allUsers = response.data;
      })
    }

  },
  created(){
    console.log(' here')
    console.log(this.allUsers)
    // this.getAllDeelnemers();
  }
}


</script>