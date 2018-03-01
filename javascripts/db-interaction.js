"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let $ = require('jquery'),
  firebase = require("./fb-config"),
  fbUrl = "https://class-projects-fb145.firebaseio.com/songs";


// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getSongs() {
  return $.ajax({
    url: `${fbUrl}.json`
  }).done((songData) => {
    return songData;
  });
}

function addSong(songFormObj) {
  return $.ajax({
    url: `${fbUrl}.json`,
    type: "POST",
    data: JSON.stringify(songFormObj),
    dataType: "json"
  }).done((songID) => {
    return songID;
  });
}
// POST - Submits data to be processed to a specified resource. Takes one parameter.

function deleteSong(songId) {

}

function getSong(songId) {
  return $.ajax({
    url: `${fbUrl}/${songId}.json`,
  }).done((songData)=>{
    return songData;
  }).fail((error)=>{
    return error;
  });
}

// GET - Requests/read data from a specified resource
// PUT - Update data to a specified resource. Takes two parameters.
function editSong(songFormObj, songId) {
  return $.ajax({
    url: `${fbUrl}/${songId}.json`,
    type: "PUT",
    data: JSON.stringify(songFormObj)
  }).done((data)=>{

  });
}

module.exports = {
  getSongs,
  addSong,
  getSong,
  deleteSong,
  editSong
};