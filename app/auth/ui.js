'use strict'

const store = require('../store.js')

const onSignUpSuccess = function (response) {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('.sign-out').show()
  // $('#auth-display').html('<p>User signed in successfully</p>')
  $('#auth-display').html(`<p>Hello, ${response.user.email}</p>`)

  // reset all forms
  $('form').trigger('reset')

  $('.logged-in').show()
  $('.logged-out').hide()
  $('.all-game-review').show()
  $('#change-password-form').show()

  store.user = response.user

  // console.log(response)
  // store data from the response in my store object
  // store.user = response.user

  // reset single form
  $('#sign-in-form').trigger('reset')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
  $('.sign-out').hide()
  $('#change-password-form').hide()
  $('.logged-out').show()
  $('.logged-in').hide()
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display').html('<p>Changed Password Successfully</p>')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error While Changing Password</p>')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure,
  onSignUpFailure,
  onSignUpSuccess,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
