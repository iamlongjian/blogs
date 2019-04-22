<template></template>

<script>
export default {
  props: ["msg"],
  created() {
    const h = this.$createElement;
    this.$notify({
      title: "删除",
      message: h("l", { style: "color: teal" }, this.msg),
      position: "top-right"
    });
  }
};
</script>

<style>

</style>
