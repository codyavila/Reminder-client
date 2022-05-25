'use strict'

const onReminderCreateSuccess = function () {
  $('#reminder-display').html('<p>Reminder Created Successfully</p>')

  $('form').trigger('reset')
}

const onReminderCreateFailure = function () {
  $('#reminder-display').html('<p>Error while making reminder</p>')
}

const onIndexSuccess = function (response) {
  const reminder = response.reminder

  let reminderHtml = ''

  reminder.forEach(reminder => {
    reminderHtml += `
        <h4>Title: ${reminder.title}</h4>
        <p>Description: ${reminder.description}</p>
        <p>ID: ${reminder._id}</p>
        <p>Date: ${reminder.date}</p>
        <form class="reminder-update-dynamic" data-id=${reminder._id}>
        <input type="text" name="reminder[title]" placeholder="Game Title Here" required>
        <input type="text" name="reminder[description]" placeholder="Game Description Here" required>
        <input type="date" name="reminder[time]" placeholder="Number Rating Here">
        <button type="submit">Update Review</button>
        </form>
        <button class='reminder-destroy-dynamic' data-id=${reminder._id}>Delete Review</button>
      <br>
    `
  })
  $('#reminders').html(reminderHtml)

  $('#reminder-display').html('<p>Success</p>')
  $('form').trigger('reset')

  console.log(response)
}

const onIndexFailure = function () {
  $('#reminder-display').html('<p>Failure</p>')
}

const onReminderShowSuccess = function (response) {
  $('#game-reviews').html(`
        <h4>Title: ${response.game.title}</h4>
        <p>Description: ${response.game.description}</p>
        <p>ID: ${response.game._id}</p>
        <p>Rating: ${response.game.rating}</p>
        <form class="reminder-update-dynamic" data-id=${response.game._id}>
        <input type="text" name="game[title]" placeholder="Game Title Here" required>
        <input type="text" name="game[description]" placeholder="Game Description Here" required>
        <input type="text" name="game[rating]" placeholder="Number Rating Here">
        <button type="submit">Update Review</button>
        </form>
      <button class='reminder-destroy-dynamic' data-id=${response.game._id}>Delete Review</button>
      
      <br>`)

  $('#game-display').html('<p>Success</p>')
  $('form').trigger('reset')

// console.log(response)
}

const onReminderShowFailure = function () {
  $('#game-display').html('<p>Failure</p>')
}

const onReminderDeleteSuccess = function () {
  $('#game-display').html('<p>Success</p>')
  $('form').trigger('reset')
}

const onReminderDeleteFailure = function () {
  $('#game-display').html('<p>Failure</p>')
}

module.exports = {
  onReminderCreateSuccess,
  onReminderCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onReminderShowSuccess,
  onReminderShowFailure,
  onReminderDeleteSuccess,
  onReminderDeleteFailure
}
