function palidromi(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(palidromi("Annapuu"));
console.log(palidromi("Roma tibi subito motibus ibit amor"));