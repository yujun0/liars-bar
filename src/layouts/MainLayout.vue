<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="text-h5 text-weight-bold"> Liar's Bar</q-toolbar-title>
        <q-btn
          flat
          round
          dense
          :icon="soundEnabled ? 'volume_up' : 'volume_off'"
          @click="toggleSound"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-scroll-area class="fit">
        <q-item-label header>遊戲選單</q-item-label>
        <q-list class="cursor-pointer">
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item v-ripple @click="emitResetGame" clickable >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view :sound-enabled="soundEnabled"/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref } from "vue";
import {useQuasar} from "quasar";

defineOptions({
  name: "MainLayout",
});

const $q = useQuasar();

const soundEnabled = ref(true);
const toggleSound = () => {
  soundEnabled.value = !soundEnabled.value;
  $q.notify({
    color: soundEnabled.value ? "positive" : "negative",
    message: soundEnabled.value ? "音效已開啟" : "音效已關閉",
    icon: soundEnabled.value ? "volume_up" : "volume_off",
  });
};

const emit = defineEmits(['reset-game']);

const emitResetGame = () => {
  console.log("emitResetGame")
  emit('reset-game');
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const menuList = [
  {
    icon: 'rotate_right',
    label: 'Restart Game',
    separator: false
  }
]
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
