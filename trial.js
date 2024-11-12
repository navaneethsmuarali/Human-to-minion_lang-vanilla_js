const inputelement = document.getElementById('textIn');
const Buttonclick = document.getElementById('translate');
const afterTranslate = document.getElementById('translatedText');

Buttonclick.addEventListener('click', translate);

const url = "https://api.funtranslations.com/translate/minion.json";

function translate() {
    let inputValue = inputelement.value;
    let newUrl = `${url}?text=${encodeURIComponent(inputValue)}`;

    fetch(newUrl)
        .then((response) => response.json())
        .then((data) => {
            const translatedText = data.contents.translated;
            afterTranslate.innerHTML = translatedText;
        })
        .catch((error) => {
            console.error("Error:", error);
            afterTranslate.innerHTML = "Translation failed. Please try again later.";
        });
}