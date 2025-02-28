import {defineStore} from "pinia";
import {ref} from "vue";

export const useNavigationStore = defineStore('navigation', () => {
    const left = ref<LeftNavigation[]>();
    return {left};
})