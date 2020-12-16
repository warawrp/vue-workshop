
<template>
  <div id="app" :class="{'theme-dark': nightMode}">
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-3 text-left" id="nav">
            <p v-if="nightMode" @click="nightMode = !nightMode">Dark</p>
            <p v-else @click="nightMode = !nightMode">Light</p>
          <div class="row">
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
</template>

<script>
    export default {
      name: 'App',
      data() {
        return{
          nightMode: false
        }
      }
    }
</script>


<style>
  @import './assets/css/darktheme.css';
  #app{
      transition: all 0.5 ease-in-out;
      color: #333;
      background-color: #fff;
  } 
  .theme-dark{
      color: #fff;
      background-color: #333;
  }

  i{
    font-size: 30px;
    cursor: pointer;
  }
</style>