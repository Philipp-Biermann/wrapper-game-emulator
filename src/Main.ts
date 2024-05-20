import { GameEvents, WrapperEvents } from './events';
import { TWrapperFunction } from './types';

export class Main
{
    private static _instance: Main;

    static get(): Main
    {
        if ( !this._instance )
        {
            this._instance = new Main();
        }
        return this._instance;
    }

    private _wmw: TWrapperFunction;

    private constructor()
    {
    }

    public async init(): Promise<void>
    {
        await this.connectWmw();
        this.setupLayout();
    }

    private async connectWmw(): Promise<void>
    {
        await new Promise( resolve =>
        {
            const wmwInterval = setInterval( () =>
            {
                if ( ( window as any ).wmw == null )
                {
                    return;
                }
                clearInterval( wmwInterval );
                resolve( null );
            }, 100 );
        } );

        this._wmw = ( window as any ).wmw;
        this._wmw( GameEvents.REGISTER_GAME, {
            callback: this.wmwEventListener.bind( this )
        } );
    }

    public async setupLayout(): Promise<void>
    {

    }


    private async wmwEventListener( event: WrapperEvents, data: any ): Promise<void>
    {
        switch ( event )
        {
            case WrapperEvents.START_GAME:
                this._wmw( GameEvents.PRELOADING_START );
                this._wmw( GameEvents.PRELOADING_PROGRESS, { progress: 1 } );
                this._wmw( GameEvents.PRELOADING_DONE, { gameName: 'Game-Emulator', gameVersion: 'v1.0.0' } );
                break;
            case WrapperEvents.PRELOADING_COMPLETE:
                this._wmw( GameEvents.GAME_STARTED );
                break;
            case WrapperEvents.UPDATE_SETTINGS:
            case WrapperEvents.UPDATE_BAR_SIZES:
            case WrapperEvents.START_SPIN:
            case WrapperEvents.STOP_SPIN:
            case WrapperEvents.FAILED_SPIN:
            case WrapperEvents.SEND_MONEY_FORMATTER:
            case WrapperEvents.EVENT_TRIGGERED:
            case WrapperEvents.EVENT_TRIGGERED_FAILED:
            case WrapperEvents.EVENT_TRIGGERED_SPIN:
            case WrapperEvents.EVENT_TRIGGERED_WEBSOCKET:
            case WrapperEvents.OPEN_HISTORY:
            case WrapperEvents.UPDATE_HISTORY:
            case WrapperEvents.START_GAMBLE:
            case WrapperEvents.EVENT_TRIGGERED_GAMBLE:
            case WrapperEvents.END_GAMBLE:
        }
    }
}

Main.get().init();