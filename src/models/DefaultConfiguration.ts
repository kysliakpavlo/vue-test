import Configuration from './Configuration';

export default class DefaultConfiguration {

    private static instance: DefaultConfiguration;
    private configurations: Array<Configuration>;

    private constructor() {
        this.configurations = new Array<Configuration>;

        // Prebuilt configurations
        let newConfiguration;
        
        newConfiguration = new Configuration;
        newConfiguration.setName('Engine');
        newConfiguration.addOption('V6 2L');
        newConfiguration.addOption('V6 3.5L');
        this.configurations.push(newConfiguration);

        newConfiguration = new Configuration;
        newConfiguration.setName('Color');
        newConfiguration.addOption('Black');
        newConfiguration.addOption('White');
        this.configurations.push(newConfiguration);

        newConfiguration = new Configuration;
        newConfiguration.setName('Signature on Hood');
        this.configurations.push(newConfiguration);
    };

    public static getInstance(): DefaultConfiguration {
        if (!DefaultConfiguration.instance) {
            DefaultConfiguration.instance = new DefaultConfiguration();
        }
        return DefaultConfiguration.instance;
    }

    public getConfigurations(): Array<Configuration> {
        return this.configurations;
    }

    public addConfiguration(configuration: Configuration) {
        this.configurations.push(configuration);
    }
}