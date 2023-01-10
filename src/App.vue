<template>
  <body
    className="grid grid-cols-12 font-source-sans-pro font-normal text-[16px] bg-black text-white min-h-screen scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-white/[10%]"
  >
    <NavigationBlock />
    <FolderBlock />
    <NoteBlock />
  </body>
</template>

<script setup lang="ts">
import NavigationBlock from "./components/navigation/NavigationBlock.vue";
import FolderBlock from "./components/folder/FolderBlock.vue";
import NoteBlock from "./components/note/NoteBlock.vue";
</script>
