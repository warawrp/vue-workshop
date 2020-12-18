import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
import Comment from "../views/Comment.vue";
import LimitMessage from "../views/LimitMessage.vue";
import PreviewImage from "../views/PreviewImage.vue";
import CalculatePrice from "../views/CalculatePrice.vue";
import ShoppingBasket from "../views/ShoppingBasket.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import VueSlickCarousel from "../views/ImageSlide.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/comment",
    name: "Comment",
    component: Comment
  },
  {
    path: "/limitmessage",
    name: "LimitMessage",
    component: LimitMessage
  },
  {
      path: "/previewimage",
      name: "PreviewImage",
      component: PreviewImage
  }
  ,
  {
      path: "/calculateprice",
      name: "CalculatePrice",
      component: CalculatePrice
  },
  {
    path: "/shoppingbasket",
    name: "ShoppingBasket",
    component: ShoppingBasket
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  }
  ,
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/imageslide",
    name: "ImageSlide",
    component: VueSlickCarousel
  }
];

const router = new VueRouter({
  mode:"history",
  routes
});

export default router;
