import { GameEvents } from '../events';

export function setupGameEventSelector(): void
{
    const selector = document.getElementById( 'WGE_EVENT_SELECTOR' );

    Object.keys( GameEvents ).forEach( event =>
    {
        const option = document.createElement( 'option' );
        option.value = event;
        option.innerHTML = event;
        selector.appendChild( option );
    } );
}