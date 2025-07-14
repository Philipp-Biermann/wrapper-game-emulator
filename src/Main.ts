import json5 from 'json5';
import { addCss, addHtml } from './components';
import { GameEvents, WrapperEvents } from './events';
import { checkTextBox, clearLastEventSelector, setupGameEventSelector, setupWrapperEventsSelector, updateLastEventTextbox } from './functions';
import { Model } from './model';
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

    private eventHistory: { event: WrapperEvents, data: any, }[] = [];

    private constructor()
    {
        ( window as any ).WGE = this; // Expose the instance globally for debugging purposes
    }

    public async init(): Promise<void>
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

    private async wmwEventListener( event: WrapperEvents, data: any ): Promise<void>
    {
        if ( event != WrapperEvents.UPDATE_BAR_SIZES )
        {
            this.updateEventHistory( event, data );
        }

        switch ( event )
        {
            case WrapperEvents.START_GAME:
                Model.update( {
                    initResponse: data.initResponse,
                    gameDiv: data.div
                } );
                this._wmw( GameEvents.PRELOADING_START );
                this._wmw( GameEvents.PRELOADING_PROGRESS, { progress: 1 } );
                this._wmw( GameEvents.PRELOADING_DONE, { gameName: 'Game-Emulator', gameVersion: 'v1.0.0' } );
                break;
            case WrapperEvents.PRELOADING_COMPLETE:
                this.setupLayout();
                this._wmw( GameEvents.GAME_STARTED );
                break;
            case WrapperEvents.UPDATE_SETTINGS:
                break;
            case WrapperEvents.UPDATE_BAR_SIZES:
                break;
            case WrapperEvents.START_SPIN:
                break;
            case WrapperEvents.STOP_SPIN:
                if ( Model.getKey<boolean>( 'autoFinishSpin' ) )
                {
                    this._wmw( GameEvents.FINISH_SPIN );
                }
                break;
            case WrapperEvents.SEND_MONEY_FORMATTER:
                break;
            case WrapperEvents.EVENT_TRIGGERED:
                break;
            case WrapperEvents.EVENT_TRIGGERED_FAILED:
                break;
            case WrapperEvents.EVENT_TRIGGERED_SPIN:
                break;
            case WrapperEvents.OPEN_HISTORY:
                break;
            case WrapperEvents.UPDATE_HISTORY:
                break;
            case WrapperEvents.START_GAMBLE:
                break;
            case WrapperEvents.EVENT_TRIGGERED_GAMBLE:
                break;
            case WrapperEvents.END_GAMBLE:
                break;
            case WrapperEvents.START_PLAY:
            case WrapperEvents.RESET_GAME:
                if ( Model.getKey<boolean>( 'autoResetGame' ) )
                {
                    this._wmw( GameEvents.GAME_RESET );
                }
                else
                {
                    setTimeout( () =>
                    {
                        this._wmw( GameEvents.GAME_RESET );
                    }, 10000 );
                }
                break;
            case WrapperEvents.BONUS_BUY_OPENED:
            case WrapperEvents.PAUSE_GAME:
            case WrapperEvents.UNPAUSE_GAME:
            case WrapperEvents.WEBSOCKET_ACTIVATED:
            case WrapperEvents.WEBSOCKET_OPEN_HISTORY:
            case WrapperEvents.WEBSOCKET_OPEN_PLAYERS:
            case WrapperEvents.WEBSOCKET_SHOW_REALITYCHECK:
        }
    }

    public async setupLayout(): Promise<void>
    {
        addCss();
        addHtml();
        setupGameEventSelector();

        document.getElementById( 'WGE_AUTO_FINISH_CHECKBOX' ).addEventListener( 'click', checkTextBox );
        document.getElementById( 'WGE_AUTO_RESET_CHECKBOX' ).addEventListener( 'click', checkTextBox );
        document.getElementById( 'WGE_FINISH_SPIN_BTN' ).addEventListener( 'click', this._wmw.bind( this, GameEvents.FINISH_SPIN ) );
        document.getElementById( 'WGE_SEND_BTN' ).addEventListener( 'click', this.sendEvent.bind( this ) );

        document.getElementById( 'WGE_LAST_EVENTS_SELECTOR' ).addEventListener( 'change', this.lastSelectedEventChanged.bind( this ) );
        document.getElementById( 'WGE_CLEAR_LAST_EVENTS' ).addEventListener( 'click', this.clearLastEvents.bind( this ) );

        setupWrapperEventsSelector( this.eventHistory );

        this.updateLastEventData( 0 );
    }

    private sendEvent(): void
    {
        const event: string = ( document.getElementById( 'WGE_EVENT_SELECTOR' ) as HTMLSelectElement ).value;

        const inputString: string = ( document.getElementById( 'WGE_INPUTAREA' ) as HTMLInputElement ).value;

        const data: object = inputString ? json5.parse( inputString ) : null;

        this._wmw( event, data );
    }

    private updateEventHistory( event: WrapperEvents, data: any ): void
    {
        if ( this.eventHistory.length > 10 )
        {
            this.eventHistory.pop();
        }

        this.eventHistory.unshift( { event, data } );
        setupWrapperEventsSelector( this.eventHistory );

        this.updateLastEventData( 0 );
    }

    private lastSelectedEventChanged(): void
    {
        const eventIndex = parseInt( ( document.getElementById( 'WGE_LAST_EVENTS_SELECTOR' ) as HTMLSelectElement ).value );
        this.updateLastEventData( eventIndex );
    }

    private updateLastEventData( index: number ): void
    {
        const eventData = this.eventHistory[index]?.data;
        if ( !eventData )
        {
            return;
        }
        updateLastEventTextbox( eventData );
    }

    private clearLastEvents(): void
    {
        clearLastEventSelector();
        updateLastEventTextbox( null );
        this.eventHistory.forEach( element => element = null );
        this.eventHistory = [];
    }

}

Main.get().init();