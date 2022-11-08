export default class Configuration {
    
    private name: string;
    private value: any;
    private options: Array<any>;

    public constructor() {
        this.options = new Array<any>;
    }

    public getName(): string {
        return this.name;
    }

    public getValue(): any {
        return this.value;
    }

    public getOptions(): Array<any> {
        return this.options;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setValue(value: any) {
        this.value = value;
    }

    public addOption(option: any) {
        this.options.push(option);
    }
}