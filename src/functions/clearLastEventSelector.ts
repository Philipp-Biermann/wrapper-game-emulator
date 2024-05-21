export function clearLastEventSelector(): void
{
    const selector = document.getElementById( 'WGE_LAST_EVENTS_SELECTOR' );
    if ( !selector )
    {
        return;
    }
    selector.innerHTML = '';
}