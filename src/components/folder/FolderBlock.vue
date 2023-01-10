<template>
  <section
    class="col-span-2 h-screen py-[30px] px-[20px] bg-grey overflow-y-auto scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-white/[10%]"
  >
    <h2 class="text-[22px] leading-[28px] font-semibold text-white mb-[30px]">
      {{ selectedFolder.title }}
    </h2>
    <FolderBlockNoteList />
  </section>
</template>

<script setup lang="ts">
import FolderBlockNoteList from "./FolderBlockNoteList.vue";
import { computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const selectedFolder = computed(() => store.state.selectedFolder);
</script>
