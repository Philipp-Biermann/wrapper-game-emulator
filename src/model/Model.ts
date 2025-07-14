import { TModel } from '../types';

export class Model
{
    protected static data: TModel = {
        initResponse: null,
        gameDiv: null,
        autoFinishSpin: false,
        autoResetGame: false
    };

    static update( obj: Partial<typeof this.data> ): void
    {
        Object.assign( this.data, obj );
    };

    static get(): typeof this.data
    {
        return this.data;
    }

    static getKey<T>( key: keyof typeof this.data ): T
    {
        return this.data[key] as T;
    }
};
