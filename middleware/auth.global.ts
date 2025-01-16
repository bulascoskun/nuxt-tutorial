export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = true;
  if (isLoggedIn || to.name === 'login') {
    return;
  }
  return navigateTo('/login');
});
