<template lang="pug">
#settings
  router-link(to='/')
    img(src="./../assets/svg/arrow-left-solid.svg")
  .pomodoro-container
    .page-title
      h1 RINGTONES
      .line
    .row
      .col-12
        h1.setting-title WORK
        b-form-select(v-model="workSelected" :options="options" @input="selectWork" )
      .col-12
        h1.setting-title BREAK
        b-form-select(v-model="breakSelected" :options="options" @input="selectBreak")
      .value
        img(src="./../assets/svg/value.svg")
        p {{ value }}%
      .volume
        img.volume-off(src="./../assets/svg/volume-off-solid.svg")
        b-form-input(v-model='value' type='range' min='0' max='' @input="setVolume")
        img.volume-up(src="./../assets/svg/volume-up-solid.svg")
</template>

<script>
export default {
  data () {
    return {
      workSelected: this.$store.state.sounds.work,
      breakSelected: this.$store.state.sounds.break,
      options: [
        { value: 'alarm.mp3', text: 'Alarm' },
        { value: 'yay.mp3', text: 'Yay' }
      ],
      value: this.$store.state.sounds.volume * 100
    }
  },
  methods: {
    selectWork (value) {
      this.$store.commit('selectWorkSound', value)
    },
    selectBreak (value) {
      this.$store.commit('selectBreakSound', value)
    },
    setVolume (value) {
      console.log(value)
      const audio = new Audio()
      audio.src = require('@/assets/ringtones/' + this.$store.state.sounds.work)
      audio.currentTime = 2.5
      audio.play()
      const volume = value / 100
      audio.volume = volume
      this.$store.commit('setSoundVolume', volume)
    }
  },
  computed: {
    sound () {
      return this.$store.state.sound
    }
  }
}
</script>
