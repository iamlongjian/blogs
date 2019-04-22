<template>
  
</template>

<script>
  export default {
    props:['msg'],
    created() {
      const h = this.$createElement;

        this.$notify({
          title: '提示信息',
          message: h('b', { style: 'color: teal'}, this.msg)
        });
    },
  }
</script>

<style lang="scss" scoped>

</style>
