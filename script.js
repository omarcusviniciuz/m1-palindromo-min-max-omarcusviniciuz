function isPalindrome(frase) {
  let reverse = " ";
  let lowerCase = frase.toLowerCase().replaceAll(" ", "");

  for (let i = lowerCase.length; i > 0; i--) {
    reverse = reverse += lowerCase[i];
    
    return true;
  }
  return false;
}

function arrayMaxMin(arr) {
  let maxnum = arr[0];
  let minnum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minnum) {
      minnum = arr[i];
    }
    if (arr[i] > maxnum) {
      maxnum = arr[i];
    }
  }
  return [minnum, maxnum];
}
