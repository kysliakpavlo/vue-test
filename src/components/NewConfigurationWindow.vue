<script lang="ts">
    import { defineComponent } from 'vue';
    import Configuration from '../models/Configuration';
    export default defineComponent({
        props: {
            configuration: Configuration
        },
        methods: {
            setInputName(event) {
                const element = event.target as HTMLInputElement;
                this.configuration.setName(element.value);
            }
        }
    });
</script>

<template>
    <label>Name</label>
    <input :value="this.configuration.getName()"
            @input="setInputName($event)"/>
    <button @click="$emit('saveConfiguration', this.configuration)">Save</button>
</template>
