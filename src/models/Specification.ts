import type Configuration from './Configuration';
import DefaultConfiguration from './DefaultConfiguration';

export default class Specification {
    
    private name: string;
    private configurations: Array<Configuration>;

    public constructor() {
        const defaultConfiguration = DefaultConfiguration.getInstance();
        this.configurations = defaultConfiguration.getConfigurations();
    }

    public getName(): string {
        return this.name;
    }

    public getConfigurations(): Array<Configuration> {
        return this.configurations;
    }

    public setName(name: string) {
        this.name = name;
    }

    public addConfiguration(configuration: Configuration) {
        this.configurations.push(configuration);
    }
}