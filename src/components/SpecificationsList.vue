<script lang="ts">
    import { defineComponent } from 'vue';
    import Specification from '../models/Specification';
    import SpecificationElement from './Specification.vue';
    import ConfigurationsList from './ConfigurationsList.vue';
    export default defineComponent({
        props: {
            specifications: Array<Specification>
        },
        data() {
            return {
                configurationsListVisible: false,
                newSpecification: new Specification()
            }
        },
        methods: {
            addSpecification() {
                this.configurationsListVisible = true;
                this.newSpecification = new Specification();
            },
            saveSpecification(specification) {
                this.specifications.push(specification);
            }
        }
    });
</script>

<template>
    <ul>
        <SpecificationElement v-for="specification in specifications" 
                            :key="specification.getName()" 
                            specification="specification"/>
    </ul>
    <button @click="addSpecification()">Add New Specification</button>
    <ConfigurationsList v-if="this.configurationsListVisible" 
                        specification="this.newSpecification"
                        @save-specification="saveSpecification"/>
</template>