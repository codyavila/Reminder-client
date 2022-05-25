
const store = require('../store.js')
const config = require('../config')

// Create Game Review
const reminderCreate = function (data) {
  console.log(store)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/reminder',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

// Index Game Review
const reminderIndex = function () {
  console.log(store)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/reminder',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Show One Game Review
const reminderShow = function (id) {
//  console.log(store)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/reminder/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Delete Game Review
const reminderDelete = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/reminder/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Update Game Review
const reminderUpdate = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/reminder/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}
module.exports = {
  reminderCreate,
  reminderIndex,
  reminderShow,
  reminderDelete,
  reminderUpdate
}
