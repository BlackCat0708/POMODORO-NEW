import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const time = parseInt(process.env.VUE_APP_TIME)
const timebreak = parseInt(process.env.VUE_APP_TIMEBREAK)

export default new Vuex.Store({
  state: {
    sounds: {
      work: 'alarm.mp3',
      break: 'alarm.mp3',
      volume: 0.5
    },
    items: [],
    current: '',
    finished: [],
    timeleft: time,
    break: false,
    id: 0
  },
  mutations: {
    selectWorkSound (state, data) {
      state.sounds.work = data
    },
    selectBreakSound (state, data) {
      state.sounds.break = data
    },
    setSoundVolume (state, data) {
      state.sounds.volume = data
    },
    additem (state, data) {
      state.items.push({
        name: data,
        edit: false,
        model: data,
        finished: false,
        id: state.id
      })
      state.id++
    },
    edititem (state, data) {
      state.items[data].edit = true
    },
    delitem (state, data) {
      state.items.splice(data, 1)
    },
    submitedit (state, data) {
      state.items[data].name = state.items[data].model
      state.items[data].edit = false
    },
    canceledit (state, data) {
      state.items[data].model = state.items[data].name
      state.items[data].edit = false
    },
    start (state) {
      state.current = state.break ? 'take a break' : state.items.shift().name
    },
    countdown (state) {
      state.timeleft--
    },
    finish (state) {
      if (!state.break) {
        state.finished.push({
          name: state.current,
          finished: true
        })
      }
      state.current = ''
      if (state.items.length > 0) {
        state.break = !state.break
      }
      state.timeleft = state.break ? timebreak : time
    },
    delfinish (state, data) {
      state.finished.splice(data, 1)
    },
    finishWork (state, data) {
      const idx = state.items.findIndex(item => {
        return item.id === data
      })
      state.finished.push({
        name: state.items[idx].name,
        finished: true
      })
      state.items.splice(idx, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({ key: 'pomodoro' })
  ]
})
