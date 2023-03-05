
function renderLevelScreen() {
    if (container != null) {
        container.textContent = "";
    }
    const divContent = document.createElement('div');
    divContent.classList.add('content');
    const title = document.createElement('h1');
    title.textContent = 'Выбери сложность';
    title.classList.add('level__title');
    const divLevels = document.createElement('div');
    divLevels.classList.add('level__div');
    const divOne = document.createElement('div');
    divOne.textContent = '1';
    divOne.classList.add('level_div-one');
    const divTwo = document.createElement('div');
    divTwo.textContent = '2';
    divTwo.classList.add('level_div-one');
    const divThree = document.createElement('div');
    divThree.textContent = '3';
    divThree.classList.add('level_div-one');
    const buttonStart = document.createElement('button');
    buttonStart.textContent = 'Старт';
    buttonStart.classList.add('level__button');
    container.appendChild(divContent);
    divContent.appendChild(title);
    divContent.appendChild(divLevels);
    divLevels.appendChild(divOne);
    divLevels.appendChild(divTwo);
    divLevels.appendChild(divThree);
    divContent.appendChild(buttonStart);
    buttonStart.addEventListener("click", function (event) {
        event.preventDefault();
        renderGameScreen();
        console.log("click");
    });
}

window.application.screens['levels'] = renderLevelScreen;

window.application.renderScreen('levels');

function renderGameScreen() {

}

