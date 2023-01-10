<template>
  <div class="mb-[30px]">
    <h5
      class="text-[14px] font-semibold leading-[18px] text-white/60 mb-[8px] px-[20px]"
    >
      Recents
    </h5>
    <base-tab
      v-for="(note, index) in recentNotes"
      :key="index"
      @click="selectNote(note)"
      :class="[
        note === selectedNote ? 'bg-blue text-white' : 'hover:bg-blue/50',
      ]"
      currentSection="recent"
    >
      <template v-slot:title>{{ note.title }}</template>
    </base-tab>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Note from "../../types/Note";

// Переменные
const store = useStore();
const selectedNote = computed(() => store.state.selectedNote);
const recentNotes = computed(() => store.state.recentNotes);

// Выбрать заметку
function selectNote(note: Note) {
  store.commit("TOGGLE_SELECTED_NOTE", note);
  // Отобразить блок с заметкой
  store.commit("TOGGLE_NOTE_BLOCK", true);
}
</script>
