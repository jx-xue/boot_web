<script setup lang="ts">
    import {useNavigationStore} from "@/stores/navigation.ts";
    
    const navigationStore = useNavigationStore();
</script>

<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="nav in navigationStore.left" :key="nav.id">
            <h2 class="accordion-header" :id="'head' + nav.id">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#coll'+ nav.id"
                        aria-expanded="false" :aria-controls="'coll' + nav.id">
                    {{ nav.description }}
                </button>
            </h2>
            <div :id="'coll' + nav.id" class="accordion-collapse collapse" :aria-labelledby="'head' + nav.id"
                 data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action list-group-item-dark" v-for="child in nav.children" :key="child.id">
                            {{ child.description }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.accordion-header:focus {
    box-shadow: none;
}

.accordion-button {
    &:focus {
        box-shadow: none;
    }
    
    &:not(.collapsed) {
        background-color: whitesmoke;
    }
}

.accordion {
    height: 100%;
    border: 1px solid #dee2e6;
}

.accordion-body {
    padding: 0;
}

.accordion-item {
    border-left: 0;
    border-right: 0;
}

.list-group {
    border-radius: 0;
}

.accordion-item:first-of-type {
    border-top-right-radius: 0;
}

.accordion-item:last-of-type {
    border-bottom-right-radius: 0;
}
</style>