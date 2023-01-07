<template>
  <button class="py-[10px] text-left w-full">
    <div class="flex items-center px-[20px]">
      <img
        class="w-[20px] h-[20px] mr-[15px]"
        :src="createCorrectLink()"
        :alt="props.currentSection"
      />
      <p class="text-[16px] leading-[20px] font-semibold">
        <slot name="title"></slot>
      </p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Переменные
const correctLink = ref();
const props = defineProps<{
  currentSection: string;
}>();

// Сделать корректные ссылки на изображения
function createCorrectLink(): string {
  switch (props.currentSection) {
    case "folder": {
      correctLink.value = "./../../../src/assets/images/folder-icon.svg";
      break;
    }
    case "open-folder": {
      correctLink.value = "./../../../src/assets/images/open-folder-icon.svg";
      break;
    }
    case "recent": {
      correctLink.value = "./../../../src/assets/images/file-icon.svg";
      break;
    }
    case "favorites": {
      correctLink.value = "./../../../src/assets/images/favorites-icon.svg";
      break;
    }
    case "trash": {
      correctLink.value = "./../../../src/assets/images/trash-icon.svg";
      break;
    }
    case "archived": {
      correctLink.value =
        "./../../../src/assets/images/archived-notes-icon.svg";
      break;
    }
  }

  return correctLink.value;
}
</script>
