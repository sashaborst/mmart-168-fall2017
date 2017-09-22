// Alexandra Lukinicheva
// What you think the *setLanguage* function does?
let language
let languageCode

//Edit the ***setLanguage*** function so that it handles the new language codes and
// displays the correct message to the span element (inside the h1 element).

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'zh') {
        language = 'Chinese'
    } else if (code === 'cs') {
        language = 'Czech'
    } else {
        language = 'Croatian'
    }
    document.getElementById('language').innerHTML = language
}
