<template>
  <div>
    <nav>
      <div class="container">
        <div class="holder-navigation">
            <router-link  class="link" to="/">Home</router-link>
            <router-link  class="link" to="/about">About</router-link>
        </div>
      </div>
        
      
    </nav>
    
    <router-view/>

    <footer>
      <div class="container">
        <div class="holder-details">
          <div class="title">Vue training 2021</div>
          <div class="name">Tom Luijten</div>
        </div>
      </div>
    </footer>

    
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap');
  body{
    margin: 0;
    padding-bottom: 103px;
    font-family: 'Roboto', sans-serif;
  }

  page{
    min-height: 100vh;
  }

  .container{
    max-width: 1200px;
    padding: 0px 16px;
    margin: 0 auto;
  }
  nav{
    background-color: #7EA3CC;
    .holder-navigation{
      padding: 8px 0px;
      .link{
        display: inline-block;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        padding: 16px;
        border-radius: 4px;
        transition: background-color 0.4s;
        &:hover{
          background-color: #255C99;  
        }
      }
    }
  }

  footer{
    padding: 32px 0px;
    background-color: #262626;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .container{
      .holder-details{
        .title{
          color: white;
          text-align: center;
          font-size: 12px;
          margin-bottom: 6px;
        }
        .name{
          color: white;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
</style>