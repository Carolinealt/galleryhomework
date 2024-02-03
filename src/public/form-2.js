const STORAGE_KEY = "feedback-form-state"

const refForm = document.querySelector(".feedback-form")
const refEmail = refForm.querySelector("input")
const refTextArea = refForm.querySelector("textarea")
console.log(refTextArea);
popText()

refForm.addEventListener("submit", onFormSubmint)
refForm.addEventListener("input", textInput)

function onFormSubmint(event){
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}

function textInput(event){
    const email = event.currentTarget.email.value
    const text = event.currentTarget.elements.message.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email:email,text:text}))
}
function popText(){
    const saveMessage = localStorage.getItem(STORAGE_KEY)
    const curretnMessage = JSON.parse(saveMessage)
    if(saveMessage){
        refTextArea.value = curretnMessage.text
        refEmail.value = curretnMessage.email
    }
}
