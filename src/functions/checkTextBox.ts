import { Model } from '../model/Model';

export function checkTextBox()
{
    //@ts-ignore
    const id = ( this as HTMLInputElement ).id;
    //@ts-ignore
    const checked: boolean = ( this as HTMLInputElement ).checked || false;

    switch ( id )
    {
        case 'WGE_AUTO_FINISH_CHECKBOX':
            Model.update( { autoFinishSpin: checked } );
            break;
        case 'WGE_AUTO_RESET_CHECKBOX':
            Model.update( { autoResetGame: checked } );
            break;
        default:
            console.warn( `Unknown checkbox id: ${ id }` );
    }
    Model.update( { autoFinishSpin: checked } );
}