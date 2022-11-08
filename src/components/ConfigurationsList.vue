<script lang="ts">
    import { defineComponent } from 'vue';
    import Configuration from '../models/Configuration';
    import Specification from '../models/Specification';
    import DefaultConfiguration from '../models/DefaultConfiguration';
    import ConfigurationElement from './Configuration.vue';
    import NewConfigurationWindow from './NewConfigurationWindow.vue';
    export default defineComponent({
        props: {
            specification: Specification,
        },
        data() {
            return {
                newConfigurationWindowVisible: false,
                newConfiguration: new Configuration()
            }
        },
        methods: {
            addConfiguration() {
                this.newConfigurationWindowVisible = true;
                this.newConfiguration = new Configuration();
            },
            saveConfiguration(configuration) {
                const defaultConfiguration = DefaultConfiguration.getInstance();
                this.specification.addConfiguration(configuration);
                defaultConfiguration.addConfiguration(configuration);
            }
        }
    });
</script>

<template>
    <ul>
        <ConfigurationElement v-for="configuration in this.specification.getConfigurations()" 
                            :key="configuration.getName()" 
                            configuration="configuration"/>
    </ul>
    <button @click="addConfiguration()">New Configuration Option</button>
    <button @click="$emit('saveSpecification', this.specification)">Save</button>
    <NewConfigurationWindow v-if="this.newConfigurationWindowVisible"
                            configuration="this.newConfiguration"
                            @save-configuration="saveConfiguration"/>
</template>
