<template>
  <div
    v-if="isNoteModalVisible"
    class="fixed z-[9999] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/60"
  >
    <div class="bg-[#333] p-[20px] rounded-[3px]">
      <header class="flex items-center justify-between mb-[30px]">
        <h5 class="text-[22px] text-white leading-[28px] font-semibold">
          Create New Note
        </h5>
        <button @click="closeModal">
          <img
            class="w-[30px] h-[30px]"
            src="/images/close-icon.svg"
            alt="Close"
          />
        </button>
      </header>
      <main>
        <input
          @keypress.enter="createNote"
          class="w-[300px] outline-none rounded-[3px] px-[12px] py-[8px] placeholder:text-black text-black mb-[10px]"
          type="text"
          placeholder="Write a note title"
          v-model="noteTitle"
        />
        <button
          class="flex items-center justify-center text-[16px] leading-[26px] bg-blue hover:bg-blue/80 w-full py-[8px] rounded-[3px]"
          @click="createNote"
        >
          Create
        </button>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const folders = computed(() => store.state.folders);
const isNoteModalVisible = computed(() => store.state.isNoteModalVisible);
const selectedFolder = computed(() => store.state.selectedFolder);
const noteTitle = ref("");

// Типы
type Note = {
  title: string;
  date: string;
  folder: string;
  text: string;
};

// Создать заметку
function createNote() {
  // Дата
  const fullDate = new Date();
  let date: number = fullDate.getDate();
  let month: number = fullDate.getMonth() + 1;
  let year: number = fullDate.getFullYear();

  // Заметка
  let note: Note = {
    title: noteTitle.value,
    date: `${date}/${month}/${year}`,
    folder: selectedFolder.value.title,
    text: "",
  };

  // Отправить заметку в выбранную папку
  for (let i = 0; i < folders.value.length; i++) {
    if (folders.value[i] === selectedFolder.value) {
      folders.value[i].notes.unshift(note);
    }
  }

  // Закрыть модалку
  closeModal();
  noteTitle.value = "";
}

// Закрыть модалку
function closeModal() {
  store.commit("TOGGLE_NOTE_MODAL", !isNoteModalVisible);
  noteTitle.value = "";
}
</script>
