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
    flex-wrap: wrap;
    align-items: center;
    top: 50px;
    width: fit-content;
    background-color: lightgray;
    z-index: 9999;
}

.eventBtn {
    width: 80%;
    height: 40px;
    border-radius: 20px;
    display: inline-block;
}

.eventMain {
    display: flex;
    gap: 1em
}

.finishSpinContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height:120px;
}

.eventInputContainer{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    align-items: center;
    width: 500px;
    height:240px;
}

.eventSelectDescription{
    font-weight: 700;
    text-align: center;
}

.eventSelectContainer{
    display: flex;
    gap: 1em;
    align-items: center;
}

.eventSelector {
    height: 2em;
    width: 12em;
    text-align: center;
    align-self: center;
}

.eventInputBox {
    width: 80%;
    border: 2px solid black;
}

.eventOutputContainer{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    align-items: center;
    width: 500px;
    height:300px;
}

.eventOutputBox{
    width: 80%;
    height: 60%;
    background-color: white;
    border: 2px solid black;
    text-wrap: pretty;
    word-wrap: break-word;
    overflow: auto;
    font-size: 0.9em;
    
}

.line {
    border-bottom: 1px solid black;
    width: 100%
}


`;