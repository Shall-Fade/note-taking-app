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
      correctLink.value = "images/folder-icon.svg";
      break;
    }
    case "open-folder": {
      correctLink.value = "images/open-folder-icon.svg";
      break;
    }
    case "recent": {
      correctLink.value = "images/file-icon.svg";
      break;
    }
    case "favorites": {
      correctLink.value = "images/favorites-icon.svg";
      break;
    }
    case "trash": {
      correctLink.value = "images/trash-icon.svg";
      break;
    }
    case "archived": {
      correctLink.value = "images/archived-notes-icon.svg";
      break;
    }
  }

  return correctLink.value;
}
</script>
