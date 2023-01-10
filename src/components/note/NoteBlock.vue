<template>
  <section
    class="col-span-8 w-full h-screen py-[50px] px-[50px] bg-black"
  >
    <NoteBlockData v-if="isNoteBlockVisible" />
    <NoteBlockEmptyState v-else />
  </section>
</template>

<script setup lang="ts">
import NoteBlockData from "./NoteBlockData.vue";
import NoteBlockEmptyState from "./NoteBlockEmptyState.vue";
import { computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const isNoteBlockVisible = computed(() => store.state.isNoteBlockVisible);
</script>
