<template>
  <div>{{message}}</div>
</template>
  <script>
import msg from '@/msg'
export default {
  data() {
    return {
      message: msg.foo
    }
  }
}
</script>