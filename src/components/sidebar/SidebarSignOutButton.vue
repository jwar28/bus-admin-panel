<script lang="ts" setup>
const supaAuth = useSupabaseAuthClient().auth;

const logout = async () => {
  const { error } = await supaAuth.signOut();
  if (error) {
    alert(error.message);
  } else {
    return navigateTo("/");
  }
};
</script>

<template>
  <ul class="menu p-4 absolute inset-x-0 bottom-0">
    <div class="divider"></div>
    <li>
      <button
        class="flex items-center p-2 text-xl font-normal text-primary-content transition duration-75 rounded-lg hover:bg-primary group w-full"
        @click="logout"
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
            d="M21.593 10.943c.584.585.584 1.53 0 2.116L18.71 15.95c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41 9.552 9.552 0 0 1 1.689-1.345l.387-.242-.207-.206a10 10 0 0 1-2.24.254H8.998a1 1 0 1 1 0-2h7.921a10 10 0 0 1 2.24.254l.207-.206-.386-.241a9.562 9.562 0 0 1-1.69-1.348.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.883 2.893zM14 16a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.505a1 1 0 1 0 2 0V5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h7a2.5 2.5 0 0 0 2.5-2.5V17a1 1 0 0 0-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <!-- Item description -->
        <span
          class="ml-4 text-base-200 transition duration-75 group-hover:text-primary-content"
          >Cerrar sesion</span
        >
      </button>
    </li>
  </ul>
</template>
