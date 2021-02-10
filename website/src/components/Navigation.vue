<template>
    <div>
        <div class="navigation">
          <div class="container">
            <div class="holder-navigation">
                <router-link to="/">
                    <div class="logo"></div>
                </router-link>
              
              <div class="holder-links">
                <router-link class="link" to="/">Deelnemers</router-link>
                <router-link class="link" to="/upload">Upload foto</router-link>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .navigation{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        background-color: #fbc652;
        .container{
            .holder-navigation{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 0px;
                .logo{
                    width:36px;
                    height: 36px;
                    background-image: url('../assets/images/logo.svg');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center center;
                }
                .holder-links{
                    display: flex;
                    align-items: center;
                    .link{
                        color: black;
                        text-transform: uppercase;
                        margin-left: 16px;
                        font-size: 14px;
                        font-weight: 500;
                        text-decoration: none;
                        cursor: pointer;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
</style>