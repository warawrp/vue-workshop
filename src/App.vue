
<template>
  <div id="app" class="app">
    <div :class="{'theme-dark' : nightMode}">
      <div class="container-fluid pt-3">
        <div class="row">
          <div class="col-3 text-left" id="nav">
            <div class="row">
              <div class="switch">
                <input type="checkbox"  id="theme-toggle" v-model="nightMode">
                <label for="theme-toggle" class="slider round"></label>
              </div>

              <!-- <div class="iconTheme" v-if="nightMode" @click="nightMode = !nightMode">
                <i class="fas fa-moon mr-2" ></i>Light Mode
              </div>
              <div class="iconTheme" v-else @click="nightMode = !nightMode">
                <i class="fas fa-moon mr-2"></i>Dark Mode
              </div> -->

              <div class="col-12 my-1"><router-link class="routerLink" to="/">Home</router-link></div>
              <!-- <div class="col-12"><router-link to="/about">About</router-link></div> -->
              <div class="col-12 my-1">

                <div id="accordion">
                  <div>
                    <div id="headingOne">
                      <h5 class="mb-0">
                        <label data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <p class="headerMenu">Workshop</p>
                        </label>
                      </h5>
                    </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="col-12 my-1"><router-link class="routerLink" to="/limitmessage">Limit Message</router-link></div>
                      <div class="col-12 my-1"><router-link class="routerLink" to="/previewimage">Preview Image</router-link></div>
                      <div class="col-12 my-1"><router-link class="routerLink" to="/calculateprice">Calculate Price</router-link></div>
                      <div class="col-12 my-1"><router-link class="routerLink" to="/shoppingbasket">Shopping Basket</router-link></div>
                    </div>
                  </div>

                  <div>
                    <div id="headingTwo">
                      <h5 class="mb-0">
                        <label class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          <p class="headerMenu">Firebase Realtime Database</p>
                        </label>
                      </h5>
                    </div>
                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div class="col-12 my-1"><router-link class="routerLink" to="/comment">Comment</router-link></div>
                    </div>
                  </div>

                  <div>
                    <div id="headingTree">
                      <h5 class="mb-0">
                        <label class="collapsed" data-toggle="collapse" data-target="#collapseTree" aria-expanded="true" aria-controls="collapseTree">
                          <p class="headerMenu">Example</p>
                        </label>
                      </h5>
                    </div>
                    <div id="collapseTree" class="collapse show" aria-labelledby="headingTree" data-parent="#accordion">
                      <div class="col-12 my-1"><router-link class="routerLink" to="/register">Register</router-link></div>
                      <div class="col-12 my-1"><router-link class="routerLink" to="/login">Login</router-link></div>
                      <div class="col-12 my-1"><router-link class="routerLink" to="/imageSlide">ImageSlide</router-link></div>
                    </div>
                  </div>

                  <div>
                    <div id="headingFour">
                      <h5 class="mb-0">
                        <label class="collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                          <p class="headerMenu">PHP & Vue.js</p>
                        </label>
                      </h5>
                    </div>
                    <div id="collapseFour" class="collapse show" aria-labelledby="headingFour" data-parent="#accordion">
                      <div class="col-12 my-1"><router-link class="routerLink" to="/index">Index</router-link></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="col-9">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'App',
      data() {
        return{
          nightMode: false
        }
      },
      watch:{
        nightMode:function(){
          localStorage.setItem("nightMode",JSON.stringify(this.nightMode));
        }
      },
      created(){
        this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
      }
    }
</script>


<style>
  @import './css/darktheme.css';
  @import './css/lighttheme.css';
.iconTheme{
  cursor: pointer;
  padding-left: 20px;
}

.card{
  background: none;
  border:#fff 1px solid;
}

.card .card-header{
  background: none;
  border:none;
}
</style>