<template>
  <FrontEnd>
    <template v-slot:nav> 
      <Nav></Nav>
    </template>
    <template v-slot:main>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <h1 class="text-center">Sign up</h1>
            <form @submit.prevent="signUpHandler">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  id="name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  id="exampleInputEmail1"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  id="exampleInputPassword1"
                />
              </div>

            <div class="d-grid">
                <button type="submit" class="d-block btn btn-primary">Sign Up</button>
            </div>
            <div class="text-center">
              <router-link to="/signIn">
                <button class="btn ">Sign In</button>
              </router-link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </template>
  </FrontEnd>
</template>

<script>
import axios from "axios";
import FrontEnd from "../../layouts/frontEnd/FrontEnd.vue";
import Nav from "../../includes/Nav.vue";

export default {
  name: "SignUp",
  components: {
    FrontEnd,Nav
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  beforeRouteEnter (to, from,next) {
    const user = localStorage.getItem('user-info')
    if (user) {
      next(from.path)
    }
    else{
      next()
    }
  },
  // mounted(){
  //    const user = localStorage.getItem('user-info')
  //    if (user) {
  //       this.$router.push({name: 'Home'})
  //    }
  // }
  
  methods: {
    async signUpHandler() {
      const response = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (response.status === 201) {
        localStorage.setItem('user-info',JSON.stringify(response.data))
        this.$router.push({name: 'Home'})
      }
    },
  },
};
</script>

<style></style>
