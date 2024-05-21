import { WrapperEvents } from '../events';
import { clearLastEventSelector } from './clearLastEventSelector';

export function setupWrapperEventsSelector( eventArray: { event: WrapperEvents, data: any, }[] ): HTMLOptionElement
{
    const selector = document.getElementById( 'WGE_LAST_EVENTS_SELECTOR' );
    if ( !selector )
    {
        return;
    }
    clearLastEventSelector();

    for ( let index = 0; index < eventArray.length; index++ )
    {
        const option = document.createElement( 'option' );
        option.value = index.toString();
        option.innerHTML = eventArray[index].event;
        selector.appendChild( option );
    }



}