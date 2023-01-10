<template>
  <div
    v-if="isFolderModalVisible"
    class="fixed z-[9999] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/60"
  >
    <div class="bg-[#333] p-[20px] rounded-[3px]">
      <header class="flex items-center justify-between mb-[30px]">
        <h5 class="text-[22px] text-white leading-[28px] font-semibold">
          Create New Folder
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
          @keypress.enter="createFolder"
          v-model="folderTitle"
          class="w-[300px] outline-none rounded-[3px] px-[12px] py-[8px] placeholder:text-black text-black mb-[10px]"
          type="text"
          placeholder="Write a folder title"
        />
        <button
          @click="createFolder"
          class="flex items-center justify-center text-[16px] leading-[26px] bg-blue hover:bg-blue/80 w-full py-[8px] rounded-[3px]"
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
import Folder from "../../types/Folder";

// Переменные
const store = useStore();
const isFolderModalVisible = computed(() => store.state.isFolderModalVisible);
const folderTitle = ref("");

// Создать папку
function createFolder() {
  let folder: Folder = {
    title: folderTitle.value,
    notes: [],
  };

  store.commit("ADD_FOLDER", folder);
  store.commit("TOGGLE_FOLDER_MODAL", !isFolderModalVisible);
  folderTitle.value = "";
}

// Закрыть модалку
function closeModal() {
  store.commit("TOGGLE_FOLDER_MODAL", !isFolderModalVisible);
}
</script>
