<template>
  <div>
    <div class="flex items-center mb-[15px]">
      <img
        class="w-[18px] h-[18px] mr-[20px]"
        src="/images/date-icon.svg"
        alt="Date"
      />
      <h6
        class="text-[14px] font-semibold leading-[18px] text-white/60 w-[100px]"
      >
        Date
      </h6>
      <p class="text-[14px] font-semibold leading-[18px] text-white underline">
        {{ selectedNote.date }}
      </p>
    </div>
    <div class="bg-white/10 h-[1px] mb-[15px]"></div>
    <div class="flex items-center mb-[30px]">
      <img
        class="w-[18px] h-[18px] mr-[20px]"
        src="/images/folder-icon.svg"
        alt="Folder"
      />
      <h6
        class="text-[14px] font-semibold leading-[18px] text-white/60 w-[100px]"
      >
        Folder
      </h6>
      <p class="text-[14px] font-semibold leading-[18px] text-white underline">
        {{ selectedNote.folder }}
      </p>
    </div>
    <textarea
      v-model="selectedNote.text"
      class="text-[16px] leading-[28px] bg-black border-white/10 border-[1px] w-full min-h-[600px] h-full p-[15px] outline-none resize-none rounded-[6px] mb-[15px] scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-white/[10%]"
    ></textarea>
    <button
      @click="saveText"
      class="text-[18px] font-semibold leading-[24px] text-white bg-blue hover:bg-blue/50 py-[10px] px-[25px] rounded-[6px]"
    >
      Save
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Note from "../../types/Note";

// Переменные
const store = useStore();
const folders = computed(() => store.state.folders);
const selectedNote = computed(() => store.state.selectedNote);

// FIX функция saveText не сохраняет изменения
// Сохранить текст
function saveText() {
  // Найти и заменить выбранную заметку
  for (let i = 0; i < folders.value.length; i++) {
    folders.value[i].notes.forEach(function (item: Note) {
      if (item === selectedNote.value) {
        folders.value[i].notes.splice(
          folders.value[i].notes.indexOf(item),
          selectedNote.value
        );
      }
    });
  }
}
</script>
