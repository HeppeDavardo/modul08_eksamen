<template>
    <img :src="`./assets/img/menuImg/${src}`" alt="menu image">
</template>

<script>
export default {
  name: "menuImg",
  // This component takes a prop called imgSrc of type String and use it as the src of the <img...
  props: {
    src: String,
  },
};
</script>