<template>
  <div>
    <welcome></welcome>
    <h2>{{message}}</h2>
    <deep-component></deep-component>
  </div>
</template>
<script>
import Welcome from '@@/components/welcome'
import msg from '@/msg'
import DeepComponent from '@/another/nested/component'
export default {
  data(){
    return {
      message: msg.welcome
    }
  },
  components: {
    Welcome,
    DeepComponent
  }
}
</script>