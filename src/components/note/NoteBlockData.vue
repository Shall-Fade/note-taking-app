<template>
  <div class="relative flex items-center justify-between mb-[30px]">
    <h1 class="text-[32px] leading-[40px] font-semibold text-white truncate">
      {{ selectedNote.title }}
    </h1>
    <NoteBlockDataOptions />
  </div>
  <NoteBlockDataInfo />
</template>

<script setup lang="ts">
import NoteBlockDataInfo from "./NoteBlockDataInfo.vue";
import NoteBlockDataOptions from "./NoteBlockDataOptions.vue";
import { computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const selectedNote = computed(() => store.state.selectedNote);
</script>
