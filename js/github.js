console.log("hello world")

let username = 'mrkpvlvski'
let userObject = {}
let githubAvatar = document.getElementById("githubAvatar");
let githubUsername = document.getElementById("githubUsername").value;
//
// document.getElementById("githubUsername").addEventListener("focus", getUserData("mrkpvlvski"));
//


// $('document').ready(getUserData(user));


function getUserData(username){
  $.getJSON(`https://api.github.com/users/${username}`, githubUser);
}

function githubUser(data) {

  userObject.name = data.name
  userObject.avatar_url = data.avatar_url

  githubAvatar["src"] = data.avatar_url
  console.log(userObject.name)
}

// $( "githubUsername" ).blur(getUserData("mrkpvlvski"));
$( "#githubUsername" ).blur( () => getUserData(document.getElementById("githubUsername").value)
);
