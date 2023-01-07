<template>
  <button @click="toggleOptions">
    <img
      class="w-[30px] h-[30px]"
      src="../../assets/images/settings-icon.svg"
      alt="Settings"
    />
  </button>
  <div
    v-if="isOptionsVisible"
    class="absolute top-[50px] right-0 z-50 min-w-[200px]"
  >
    <button
      @click="deleteNote"
      class="flex items-center p-[15px] bg-[#333] rounded-[6px] w-full"
    >
      <img
        class="w-[20px] h-[20px] mr-[15px]"
        src="../../assets/images/trash-icon.svg"
        alt="Trash"
      />
      <p class="text-[16px] leading-[20px] text-white">Delete</p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const folders = computed(() => store.state.folders);
const selectedNote = computed(() => store.state.selectedNote);
const recentNotes = computed(() => store.state.recentNotes);
const isNoteBlockVisible = computed(() => store.state.isNoteBlockVisible);
let isOptionsVisible = ref(false);

// Открывать / закрывать опции
function toggleOptions() {
  isOptionsVisible.value = !isOptionsVisible.value;
}

// Удалить заметку
function deleteNote() {
  // Найти и удалить заметку
  for (let i = 0; i < folders.value.length; i++) {
    folders.value[i].notes.forEach(function (item: any) {
      if (item === selectedNote.value) {
        folders.value[i].notes.splice(folders.value[i].notes.indexOf(item), 1);
        store.commit("CHANGE_FOLDER_DATA", folders.value);
      }
    });

    // Найти и удалить заметку из недавних
    if (recentNotes.value[i] === selectedNote.value) {
      recentNotes.value.splice(
        recentNotes.value.indexOf(recentNotes.value[i]),
        1
      );
    }
  }

  store.commit("TOGGLE_NOTE_BLOCK", !isNoteBlockVisible.value);
}
</script>
