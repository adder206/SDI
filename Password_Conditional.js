function passwordLongEnough(password) {
    // if password length is greater than 8
    if (password.length > 8) {
        return 'Password is long enough';
    } else {
            return 'Please enter a password of at least 9 characters';
        }
    }
      // return 'Password is long enough'
    // otherwise
      // return 'Please enter a password of at least 9 characters'
  var result1 = passwordLongEnough('passafassaword');
console.log('should log "Password is long enough":', result1);