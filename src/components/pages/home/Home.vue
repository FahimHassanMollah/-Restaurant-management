<template>
  <div>
      <FrontEnd >
         <template v-slot:nav>
             <Nav></Nav>
         </template>
         <template v-slot:main>
              <div>
                  home contents
              </div>
          </template>
      </FrontEnd>
     
  </div>
</template>

<script>
import Nav from '../../includes/Nav.vue'
import FrontEnd from '../../layouts/frontEnd/FrontEnd.vue'

export default {
    name:"Home",
    components:{
        FrontEnd,Nav
    }
    
}
</script>

<style>

</style>