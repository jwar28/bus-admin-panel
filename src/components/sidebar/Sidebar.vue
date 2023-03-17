<script lang="ts" setup>
const sidebarMainItems = [
  {
    link: "/dashboard",
    description: "Dashboard",
    svgPath:
      "M5.497 3.017A2.5 2.5 0 0 0 3 5.517V18.5A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5V5.503a2.5 2.5 0 0 0-2.503-2.5l-13 .014zM5 11V5.517a.5.5 0 0 1 .5-.5l5.5-.006V11H5zm0 2v5.5a.5.5 0 0 0 .5.5H11v-6H5zm8 6V5.009l5.5-.006a.5.5 0 0 1 .5.5V18.5a.5.5 0 0 1-.5.5H13z",
  },
  {
    link: "/buses",
    description: "Buses",
    svgPath:
      "M3 21.25c0 .414.336.75.75.75h1.615a.75.75 0 0 0 .74-.627L6.5 19h11l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75V10l.78-.78a.75.75 0 0 0 .22-.53V6.75a.75.75 0 0 0-.75-.75H21v-.995c0-1.171-.814-2.183-1.97-2.373C17.299 2.347 14.65 2 12 2c-2.65 0-5.299.347-7.03.632C3.814 2.822 3 3.834 3 5.005V6h-.25a.75.75 0 0 0-.75.75v1.94c0 .198.079.389.22.53L3 10v11.25zm5-6.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5 5.145V11h14V5.145c0-.37-.27-.685-.638-.732-1.166-.15-3.764-.442-6.362-.442-2.598 0-5.196.291-6.362.442A.734.734 0 0 0 5 5.145z",
  },
  {
    link: "/locations",
    description: "Paradas",
    svgPath:
      "M12 23.5c-1 0 .183-1.579-4.747-4.035a7.857 7.857 0 0 1-.785-.45C4.015 17.419 2.5 14.5 2.5 11.358 2.5 6.19 6.753 2 12 2s9.5 4.19 9.5 9.357c0 3.462-1.844 6.657-4.745 8.104C11.82 21.92 13 23.5 12 23.5zm0-8.39c2.111 0 3.8-1.672 3.8-3.705C15.8 9.372 14.111 7.7 12 7.7c-2.111 0-3.8 1.672-3.8 3.705 0 2.033 1.689 3.705 3.8 3.705z",
  },
  {
    link: "/users",
    description: "Usuarios",
    svgPath:
      "M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z",
  },
];
</script>

<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-square btn-ghost lg:hidden"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path></svg
      ></label>
      <slot />
    </div>

    <!-- Sidebar -->
    <div class="drawer-side">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <div class="w-80 h-screen bg-neutral-focus">
        <SidebarLogo />
        <ul class="menu p-4 text-base-content space-y-5">
          <li v-for="item in sidebarMainItems">
            <!-- Item link -->
            <a
              :href="item.link"
              class="flex items-center p-2 text-xl font-normal text-primary-content transition duration-75 rounded-lg hover:bg-primary group"
            >
              <!-- Item Svg -->
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-base-200 transition duration-75 group-hover:text-primary-content"
                fill="currentColor"
              >
                <path></path>
                <path
                  fill-rule="evenodd"
                  :d="item.svgPath"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <!-- Item description -->
              <span
                class="ml-4 text-base-200 transition duration-75 group-hover:text-primary-content"
                >{{ item.description }}</span
              >
            </a>
          </li>
        </ul>
        <!-- Sign out button -->
        <SidebarSignOutButton />
      </div>
    </div>
  </div>
</template>
