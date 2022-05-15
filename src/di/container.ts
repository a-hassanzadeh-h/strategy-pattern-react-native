import { find } from 'lodash';

export interface IContainerProvider {
    useValue: any;
    token: string;
}

export class Container {
    public id:number;

    constructor() {
        this.id = Math.random();
    }
    public providers: { [key: string]: any } = {};

    public resolve(token: string) {
        const matchedProvider = find(
            this.providers,
            (_provider:any, key:any) => key === token
        );

        if (matchedProvider) {
            return matchedProvider;
        } else {
            throw new Error(`No provider found for ${token}!`);
        }
    }

    public provide(details: IContainerProvider): void {
        this.providers[details.token] = details.useValue;
    }
}


export const container = new Container();