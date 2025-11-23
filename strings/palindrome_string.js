let s = "madam";
s = s.trim();

let last = s.length - 1;

function palindrome(s, last) {
  for (let i = 0; i < last; i++) {
    if (s[i] === s[last]) {
      last--;
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(palindrome(s, last));
