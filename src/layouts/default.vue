<template>
  <Sidebar>
    <div class="h-full w-full p-5 sm:max-w-screen bg-base-100">
      <slot />
    </div>
  </Sidebar>
</template>

<style>
.custom-table {
  --easy-table-header-font-size: 16px;
  --easy-table-header-height: 60px;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-row-height: 60px;
  --easy-table-body-row-font-size: 15px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
