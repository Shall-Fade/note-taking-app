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
    <div class="flex items-center mb-[15px]">
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
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

// Переменные
const store = useStore();
const selectedNote = computed(() => store.state.selectedNote);
</script>
