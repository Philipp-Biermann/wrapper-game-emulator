export function updateLastEventTextbox( data: any ): void
{
    const eventDataDiv = document.getElementById( 'WGE_LAST_EVENTDATA' );
    if ( !eventDataDiv )
    {
        return;
    }


    const text = data ? JSON.stringify( data, undefined, 2 ) : '';

    eventDataDiv.innerHTML = text;
}