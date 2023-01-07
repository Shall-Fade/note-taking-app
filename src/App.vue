<template>
  <div
    className="grid grid-cols-12 font-source-sans-pro font-normal text-[16px] bg-black text-white h-screen"
  >
    <NavigationBlock />
    <FolderBlock />
    <NoteBlock />
  </div>
</template>

<script setup lang="ts">
import NavigationBlock from "./components/navigation/NavigationBlock.vue";
import FolderBlock from "./components/folder/FolderBlock.vue";
import NoteBlock from "./components/note/NoteBlock.vue";
</script>
