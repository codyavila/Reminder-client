// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const reminderEvents = require('./reminders/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth events
  $('.logged-in').hide()
  $('.sign-out').hide()
  $('#change-password-form').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  // reminder events
  $('.all-game-review').hide()
  $('#create-reminder-form').on('submit', reminderEvents.onReminderCreate)
  $('#reminder-index').on('click', reminderEvents.onReminderIndex)
  $('#show-reminder-form').on('submit', reminderEvents.onReminderShow)
  $('#delete-reminder-form').on('submit', reminderEvents.onReminderDelete)
  $('#update-reminder-form').on('submit', reminderEvents.onReminderUpdate)
  $('#reminders').on('click', '.reminder-destroy-dynamic', reminderEvents.onDynamicDestroyReminder)
  $('#reminders').on('submit', '.reminder-update-dynamic', reminderEvents.onDynamicUpdateReminder)
})
