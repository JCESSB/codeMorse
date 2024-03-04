const chequeador = document.querySelector(`.checkbox`);
const textarea = document.getElementById(`textarea`);
const buttomOfSubmit = document.querySelector(`.buttom`)
const respuesta = document.querySelector(`.respuesta`);

const borrador = document.querySelector(`#borrador`)




buttomOfSubmit.addEventListener(`click`, () => {

    if (chequeador.checked) {

        transformToNorm(textarea.value)

        respuesta.textContent = result.join(` `);

        textarea.value = null
    }
    else {
        TransformToMorseCode(textarea.value)

        respuesta.textContent = result.join(`/`);

        textarea.value = null
    }
})



borrador.addEventListener(`click`, () => {
    respuesta.textContent = ``;
    result = [];
})
