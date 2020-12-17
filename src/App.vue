
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
              <div class="col-12 my-1"><p class="headerMenu">Workshop</p></div>
              <div class="col-12 my-1"><router-link class="routerLink" to="/limitmessage">Limit Message</router-link></div>
              <div class="col-12 my-1"><router-link class="routerLink" to="/previewimage">Preview Image</router-link></div>
              <div class="col-12 my-1"><router-link class="routerLink" to="/calculateprice">Calculate Price</router-link></div>
              <div class="col-12 my-1"><router-link class="routerLink" to="/shoppingbasket">Shopping Basket</router-link></div>
              <div class="col-12 my-1"><p class="headerMenu">Firebase Realtime Database</p></div>
              <div class="col-12 my-1"><router-link class="routerLink" to="/comment">Comment</router-link></div>
              <div class="col-12 my-1"><p class="headerMenu">Example</p></div>
              <div class="col-12 my-1"><router-link class="routerLink" to="/register">Register</router-link></div>
              <div class="col-12 my-1"><router-link class="routerLink" to="/login">Login</router-link></div>
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
  @import './assets/css/darktheme.css';
.iconTheme{
  cursor: pointer;
  padding-left: 20px;
}
</style>