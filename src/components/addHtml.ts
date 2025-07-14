import { Model } from '../model/Model';

export function addHtml(): void
{
    const html = document.createElement( 'div' );
    html.style.height = "100%";
    html.innerHTML = htmlText;
    Model.getKey<HTMLElement>( 'gameDiv' ).appendChild( html );
}

export const htmlText: string = `
<div class="main">
        <div class="finishSpinContainer">
            <button id="WGE_FINISH_SPIN_BTN" class="eventBtn">Finish Spin</button>
            <div class="autoCheckboxContainer">
                <div class="finishSpinCheckboxContainer">
                    <h4>Auto Finish:</h4>
                    <input id="WGE_AUTO_FINISH_CHECKBOX" type="checkbox">
                </div>
                <div class="finishSpinCheckboxContainer">
                    <h4>Auto Reset:</h4>
                    <input id="WGE_AUTO_RESET_CHECKBOX" type="checkbox">
                </div>
            </div>
        </div>

        <div class="eventInputContainer">
            <div class="eventSelectContainer">
                <div class="eventSelectDescription">Game-Events:</div>
                <select id="WGE_EVENT_SELECTOR" class="eventSelector" name="events">
                </select>
            </div>

            <textarea id="WGE_INPUTAREA" class="eventInputBox" spellcheck="false" rows="6" cols="50"></textarea>

            <button id="WGE_SEND_BTN" class="eventBtn">Send Event</button>
        </div>

        <div class="eventOutputContainer">
            <div class="eventSelectContainer">
                <div class="eventSelectDescription">Last Events:</div>
                <select id="WGE_LAST_EVENTS_SELECTOR" class="eventSelector" name="events"></select>
            </div>

            <pre class="eventOutputBox" id="WGE_LAST_EVENTDATA"></pre>

            <button id="WGE_CLEAR_LAST_EVENTS" class="eventBtn">Clear Events</button>
            <div></div>
        </div>


    </div>
`;