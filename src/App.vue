<template lang="pug">
#app
  keep-alive
    router-view(v-if="$route.meta.keepAlive")
  router-view(v-if="!$route.meta.keepAlive")
  .menu
    b-link(to='/list' active)
      img(src="./assets/svg/th-list-solid.svg")
    b-link(to='/chart')
      img(src="./assets/svg/chart.svg")
    b-link(to='/settings')
      img(src="./assets/svg/ring.svg")
</template>
