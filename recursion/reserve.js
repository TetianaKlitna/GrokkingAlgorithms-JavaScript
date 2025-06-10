const reverse = (str) => {
    return str.length === 0? '': reverse(str.slice(1)) + str[0];
}

console.log(reverse('abc') === 'cba');
console.log(reverse('awesome') === 'emosewa');
console.log(reverse('rithmschool') === 'loohcsmhtir');
// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.