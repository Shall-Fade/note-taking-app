<template>
  <div class="mb-[30px]">
    <div class="flex items-center justify-between px-[20px]">
      <h5
        class="text-[14px] font-semibold leading-[18px] text-white/60 mb-[8px]"
      >
        Folders
      </h5>
      <button @click="openModal">
        <img
          class="w-[20px] h-[20px]"
          src="/images/add-folder-icon.svg"
          alt="Add Folder"
        />
      </button>
    </div>
    <base-tab
      v-for="(folder, index) in folders"
      :key="index"
      @click="selectFolder(folder)"
      :class="[
        folder === selectedFolder
          ? 'bg-white/[3%] text-white'
          : 'text-white/60 hover:text-white/80',
      ]"
      :currentSection="toggleFolder(folder)"
    >
      <template v-slot:title>{{ folder.title }}</template>
    </base-tab>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const isFolderModalVisible = store.state.isFolderModalVisible;
const selectedFolder = computed(() => store.state.selectedFolder);
const folders = computed(() => store.state.folders);

// Выбрать папку
function selectFolder(folder: string) {
  store.commit("TOGGLE_SELECTED_FOLDER", folder);
}

// Открыть / закрыть папку
function toggleFolder(folder: string): string {
  if (selectedFolder.value === folder) {
    return "open-folder";
  } else {
    return "folder";
  }
}

// Открыть модалку
function openModal() {
  store.commit("TOGGLE_FOLDER_MODAL", !isFolderModalVisible);
}
</script>
