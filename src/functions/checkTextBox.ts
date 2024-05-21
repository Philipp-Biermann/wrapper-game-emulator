import { Model } from '../model/Model';

export function checkTextBox()
{
    //@ts-ignore
    const checked: boolean = ( this as HTMLInputElement ).checked || false;
    Model.update( { autoFinishSpin: checked } );
}