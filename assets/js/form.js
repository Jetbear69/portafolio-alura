/*animated input*/
var inputs = document.querySelectorAll(".contact__form___input");

inputs.forEach(input => {
    input.onfocus = () => {
        input.previousElementSibling.classList.remove("contact__form___label--disable");
        input.previousElementSibling.classList.add("contact__form___label--enable");
    }
    input.onblur = () => {
        input.value = input.value.trim();
        if (input.value.trim().length == 0) {
            input.previousElementSibling.classList.remove("contact__form___label--enable");
        }
        input.previousElementSibling.classList.add("contact__form___label--disable");
    }
});