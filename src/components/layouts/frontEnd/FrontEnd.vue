<template>
  <div>
     <nav>
         <slot name="nav"></slot>
     </nav>
     <section>
         <slot name="main"></slot>
     </section>
      
  </div>
</template>

<script>
// import Nav from "../../includes/Nav.vue"

export default {
    name:'FrontEnd',
    components:{
       
    }
}
</script>

<style>

</style>