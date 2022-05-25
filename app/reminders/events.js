'use strict'
const reminderUi = require('./ui.js')
const reminderApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onReminderCreate = function (event) {
  event.preventDefault()
  // console.log('Im in event!')
  // getting data from form
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)

  reminderApi.reminderCreate(data)
    .then(() => reminderUi.onReminderCreateSuccess())
    .catch(() => reminderUi.onReminderCreateFailure())
}

const onReminderIndex = function (event) {
  event.preventDefault()
  reminderApi
    .reminderIndex()
    .then(reminderUi.onIndexSuccess)
    .catch(reminderUi.onIndexFailure)
}

const onReminderShow = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  reminderApi.reminderShow(data.reminder.id)
    .then(reminderUi.onReminderShowSuccess)
    .catch(reminderUi.onReminderShowFailure)
}

const onReminderDelete = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  reminderApi.reminderDelete(data.reminder.id)
    .then(reminderUi.onReminderDeleteSuccess)
    .then(reminderApi.reminderIndex)
    .catch(reminderUi.onReminderDeleteFailure)
}

const onReminderUpdate = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  const id = formData.reminder.id

  reminderApi.reminderUpdate(id, formData)
    .then(reminderUi.onReminderUpdateSuccess)
    .catch(reminderUi.onReminderUpdateFailure)
}

// Handle clicking the dynamic destroy buttons
const onDynamicDestroyReminder = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target

  // Extract the id from the delete button that was clicked on's data-id attribute
  const reminderId = $(deleteButton).data('id')

  // make API call for deleting one book with the data we grabbed from the form
  reminderApi.reminderDelete(reminderId)

    // if the API call is successful then invoke the onDetroySuccess function
    .then(reminderUi.onReminderDeleteSuccess)

    // if the API call fails then run our onError function
    .catch(reminderUi.onReminderDeleteFailure)
}

// Handle submitting the dynamic update forms
const onDynamicUpdateReminder = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // event.target is the update form that was submitted
  const updateForm = event.target

  // Extract the id from the update form that was submitted's data-id attribute
  const reminderId = $(updateForm).data('id')

  // create a javascript object from the form where the user entered the book
  // information
  const formData = getFormFields(event.target)

  // make API call to update one book with the data we grabbed from the form
  reminderApi.reminderUpdate(reminderId, formData)

    // if the API call is successful then invoke the onUpdateSuccess function
    .then(reminderUi.onReminderUpdateSuccess)

    // if the API call fails then run our onError function
    .catch(reminderUi.onReminderUpdateFailure)
}

module.exports = {
  onReminderCreate,
  onReminderIndex,
  onReminderShow,
  onReminderDelete,
  onReminderUpdate,
  onDynamicDestroyReminder,
  onDynamicUpdateReminder
}
