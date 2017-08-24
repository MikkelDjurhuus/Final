<template>
  <form>
      <form-input v-for="(input,index) in inputs" :data="input" :template="template" :key="index"></form-input>
  </form>
</template>

<script>
import FormInput from './input/FormInput'
export default {
    props:["inputs", "template"],
    components:{
        "form-input":FormInput
    }
}
</script>

<style>
  
</style>
