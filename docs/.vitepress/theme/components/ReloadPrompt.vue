<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
const start = 10;
const offlineReady = ref(false);
const needRefresh = ref(false);
const counter = ref(start);

const count = () => {
  counter.value -= 1;
  if (counter.value > 0) setTimeout(count, 1000);
  else updateServiceWorker?.();
};
if (needRefresh.value) setTimeout(count, 1000);

let updateServiceWorker: (() => Promise<void>) | undefined;

const onOfflineReady = () => {
  offlineReady.value = true;
};
const onNeedRefresh = () => {
  needRefresh.value = true;
  setTimeout(count, 1000);
};
const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};

onBeforeMount(async () => {
  const { registerSW } = await import("virtual:pwa-register");
  updateServiceWorker = registerSW({
    immediate: true,
    onOfflineReady,
    onNeedRefresh,
    onRegistered() {
      console.info("Service Worker registered");
    },
    onRegisterError(e) {
      console.error("Service Worker registration error!", e);
    },
  });
});
</script>

<template>
  <template v-if="offlineReady || needRefresh">
    <div class="pwa-toast" role="alertdialog" aria-labelledby="pwa-message">
      <div id="pwa-message" class="mb-3">
        {{ offlineReady ? "App ready to work offline" : "New content available, click the reload button to update." }}
      </div>
      <div id="pwa-control">
        <button v-if="needRefresh" type="button" class="pwa-refresh" @click="updateServiceWorker?.()">Reload</button>
        <button type="button" class="pwa-cancel" @click="close">Close</button>
        <div id="pwa-reload-counter" v-if="needRefresh">{{ counter }}</div>
      </div>
      <div id="pwa-reload-count" v-if="needRefresh" :style="{ width: `${(counter / start) * 100}%` }"></div>
    </div>
  </template>
</template>

<style lang="stylus">
.pwa-toast
  position fixed
  right 0
  bottom 0
  margin 16px
  padding 12px
  border 1px solid #8885
  border-radius 4px
  z-index 100
  text-align left
  background-color var(--vp-c-bg)
  box-shadow var(--vp-shadow-1)
.pwa-toast #pwa-message
  margin-bottom 8px
.pwa-toast button
  border 1px solid #8885
  outline none
  margin-right 5px
  border-radius 2px
  padding 3px 10px
.pwa-toast #pwa-control
  display flex
.pwa-toast #pwa-reload-counter
  margin-left auto
  line-height 2rem
  margin-right 0.25rem
.pwa-toast #pwa-reload-count
  position absolute
  bottom 0
  left 0
  transition width 1s linear
  background var(--vp-c-brand)
  height 0.2rem
  &:after
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%)
    z-index 1
</style>
