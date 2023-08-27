function anagrams(str1, str2) {
    // Remove whitespace and convert to lowercase
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();


    // Convert strings to arrays, sort them, and then join back
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const string1 = "Astronomer";
const string2 = "Moon starer";

console.log(anagrams(string1, string2));

