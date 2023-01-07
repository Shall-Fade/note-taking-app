<template>
  <div class="flex flex-col gap-y-[20px]">
    <base-note-file
      @click="selectNote(note)"
      v-for="(note, index) in selectedFolder.notes"
      :key="index"
      :class="[
        note === selectedNote
          ? 'bg-white/10 hover:bg-none'
          : 'hover:bg-white/5',
      ]"
    >
      <template v-slot:title>{{ note.title }}</template>
      <template v-slot:date>{{ note.date }}</template>
      <template v-slot:text>{{ note.text }}</template>
    </base-note-file>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const selectedFolder = computed(() => store.state.selectedFolder);
const recentNotes = computed(() => store.state.recentNotes);
const selectedNote = computed(() => store.state.selectedNote);

// Выбрать заметку
function selectNote(note: any) {
  store.commit("TOGGLE_SELECTED_NOTE", note);
  // Отобразить блок с заметкой
  store.commit("TOGGLE_NOTE_BLOCK", true);

  // Ограничить число недавних заметок
  if (recentNotes.value.length <= 3) {
    if (recentNotes.value.every((item: any) => item !== note)) {
      recentNotes.value.unshift(note);
      store.commit("ADD_RECENT_NOTES", recentNotes.value);
    }
    recentNotes.value.splice(3);
  }
}
</script>
