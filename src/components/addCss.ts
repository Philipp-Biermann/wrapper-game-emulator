export function addCss(): void
{
    const styleSheet = document.createElement( 'style' );
    styleSheet.innerHTML = cssText;
    document.head.appendChild( styleSheet );
}

const cssText: string = `
.main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50px;
    width: fit-content;
    background-color: lightgray;
    z-index: 9999;
    border: 2px solid black;
    resize: both;
    overflow: hidden;
    gap: 0.5em;
    min-width: 300px;
    min-height: 550px;
}

.finishSpinContainer {
    width: 100%;
    gap: 0.5em;
    margin-top: 0.5em;

    flex-basis: auto;
    flex-direction: column;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
}

.eventInputContainer {
    width: 100%;

    display: flex;
    flex-basis: auto;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.5em;
    border-bottom: 1px solid black;
}

.eventOutputContainer {
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-grow: 5;

    flex-basis: auto;
    flex-direction: column;
    align-items: center;


    gap: 0.5em;
}

h4 {
    font-weight: bolder;
    text-align: center;
    white-space: nowrap;
    margin: 0.5em;
}

.eventBtn {
    width: 96%;
    height: 40px;
    border-radius: 20px;
    margin-left: 2%;
    display: inline-block;
    font-weight: bolder;
}

.autoCheckboxContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    height: 2em;
    flex-wrap: wrap;
}

.finishSpinCheckboxContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    height: 2em;
}

.eventSelectContainer {
    display: flex;
    justify-content: center;
    width: 96%;
    gap: 1em;
    align-items: center;
    margin-left: 2%;
    margin-right: 2%;
}

.eventSelectDescription {
    flex-basis: auto;
    font-weight: 700;
    text-align: center;
}

.eventInputBox {
    border: 2px solid black;
    width: 96%;
    height: max-content;
    margin: 2%;
}

.eventSelector {
    height: 2em;
    flex-grow: 2;
    text-align: center;
    align-self: center;
}

.eventOutputBox {
    flex-grow: 2;
    margin: 2%;
    width: 96%;
    min-width: 50%;

    background-color: white;
    border: 2px solid black;

    text-wrap: pretty;
    word-wrap: break-word;

    overflow: auto;
    resize: both;
    font-size: 0.9em;
}
`;