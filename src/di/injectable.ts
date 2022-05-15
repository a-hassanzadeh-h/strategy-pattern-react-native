import { container } from './container';

export function Injectable(token: string): Function {
    console.log('injectable',container.id)
    return function(target: { // @ts-ignore
        new () }): void {
        container.providers[token] = new target();
    };
}
