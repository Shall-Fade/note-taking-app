<template>
  <div class="bg-white/[3%] p-[20px] rounded-[3px] cursor-pointer w-full">
    <h3
      class="text-[18px] font-semibold leading-[28px] text-white mb-[10px] truncate"
    >
      <slot name="title"></slot>
    </h3>
    <div class="flex items-center">
      <p class="text-[16px] text-white/40 leading-[20px] mr-[10px]">
        <slot name="date"></slot>
      </p>
      <p class="text-[16px] text-white/60 leading-[20px] truncate">
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>
