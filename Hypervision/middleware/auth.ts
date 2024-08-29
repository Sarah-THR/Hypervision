export default defineNuxtRouteMiddleware((to, from) => {
    if (isAuthenticated() === false) {
        return navigateTo('/login')
    }
    function isAuthenticated(): boolean {
        return false;
    }

})