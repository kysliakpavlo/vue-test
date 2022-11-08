<script lang="ts">
    import { defineComponent } from 'vue';
    import Configuration from '../models/Configuration';
    export default defineComponent({
        props: {
            configuration: Configuration
        },
        methods: {
            setInputValue(event) {
                const element = event.target as HTMLInputElement;
                this.configuration.setValue(element.value);
            },
            setSelectValue(event) {
                const element = event.target as HTMLSelectElement;
                this.configuration.setValue(element.value);
            }
        }
    });
</script>

<template>
    <label>{{ this.configuration.getName() }}</label>
    <input v-if="this.configuration.getOptions().length == 0"
            :value="this.configuration.getValue()"
            @input="setInputValue($event)"/>
    <select v-if="this.configuration.getOptions().length > 0"
            @select="setSelectValue($event)">
        <option v-for="option in this.configuration.getOptions()" 
                :key="option" 
                :selected="option == this.configuration.getValue()">{{ option }}</option>
    </select>
</template>