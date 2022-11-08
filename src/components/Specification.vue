<script lang="ts">
    import { defineComponent } from 'vue';
    import Specification from '../models/Specification';
    export default defineComponent({
        props: {
            specification: Specification
        },
        data() {
            return {
                isExpanded: false
            }
        },
        methods: {
            addSpecification() {
                
            },
            expand() {
                this.isExpanded = !this.isExpanded;
            }
        }
    });
</script>

<template>
    <button @click="expand()">{{ this.specification.getName() }}</button>
    <div v-show="isExpanded">
        <ul>
            <li v-for="configuration in this.specification.getConfigurations()" :key="configuration.getName()">
                {{ configuration.getName() }} - {{ configuration.getValue() }}
            </li>
        </ul>
    </div>
</template>