
const languageCode = 'es';
let greeting;

if (languageCode === 'fr') {
    greeting = 'Bonjour, le monde';
}
else if (languageCode === 'es') {
    greeting = 'Hola Mundo';
}
else if(languageCode === 'de') {
    greeting ='Halo Welt';
}
else {
    greeting = 'Hello, World';

}
console.log(greeting);