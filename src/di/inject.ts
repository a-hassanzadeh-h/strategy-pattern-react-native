import {container} from './container';

export function Inject(token: string) {
    console.log('inject',container.id)
    return function (target: any, key: string) {
        Object.defineProperty(target, key, {
            get: () => container.resolve(token),
            enumerable: true,
            configurable: true
        });
    };
}
