//-----Validation-----

function validate() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  if (checkemail(email) && checkpassword(password)) {
    window.location.href = "products.html";
  }
}

function checkemail(email) {
  if (email=='lizzygreen@dummy.com') {
    document.getElementById('email').classList.add('success')
    document.getElementById('email').classList.replace('error', 'success')
    document.getElementById('email_error').innerHTML = ''
    return true
  } else {
    document.getElementById('email').classList.add('error')
    document.getElementById('email_error').innerHTML = 'Incorrect Email'
    return false
  }
}

function checkpassword(password) {
  if (password=='12345678') {
    document.getElementById('password').classList.add('success')
    document.getElementById('password').classList.replace('error', 'success')
    document.getElementById('password_error').innerHTML = ''
    return true
  } else {
    document.getElementById('password').classList.add('error')
    document.getElementById('password_error').innerHTML = 'Incorrect password'
    return false
  }
}


// ------Update-------

function update() {
  var name = document.getElementById('name').value
  var address = document.getElementById('address').value
  var phone = document.getElementById('phone').value
  var gender = document.getElementById('gender').value

  checkname(name)
  checkaddress(address)
  checkphone(phone)
  checkgender(gender)
}

function checkname(name) {
  if (name.length > 7) {
    document.getElementById('name').classList.add('success')
    document.getElementById('name').classList.replace('error', 'success')
    document.getElementById('name_error').innerHTML = ''
  } else {
    document.getElementById('name').classList.add('error')
    document.getElementById('name_error').innerHTML = 'Invalid Name'
  }
}

function checkaddress(address) {
  if (address.length > 10) {
    document.getElementById('address').classList.add('success')
    document.getElementById('address').classList.replace('error', 'success')
    document.getElementById('address_error').innerHTML = ''
  } else {
    document.getElementById('address').classList.add('error')
    document.getElementById('address_error').innerHTML = 'Invalid Address'
  }
}

function checkphone(phone) {
  const num = Number(phone);
  if (Number.isInteger(num) && num > 7000000000 && phone.length==10){
    document.getElementById('phone').classList.add('success')
    document.getElementById('phone').classList.replace('error', 'success')
    document.getElementById('phone_error').innerHTML = ''
  } else {
    document.getElementById('phone').classList.add('error')
    document.getElementById('phone_error').innerHTML = 'Invalid phone'
  }
}

function checkgender(gender) {
  gender=gender.toUpperCase()
  if (gender=='MALE' || gender=='FEMALE') {
    document.getElementById('gender').classList.add('success')
    document.getElementById('gender').classList.replace('error', 'success')
    document.getElementById('gender_error').innerHTML = ''
  } else {
    document.getElementById('gender').classList.add('error')
    document.getElementById('gender_error').innerHTML = 'Invalid gender'
  }
}
