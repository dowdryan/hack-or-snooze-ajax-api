"use strict";
// ========================================================================
const $allStoriesList = $("#all-stories-list");
const $body = $("body");
const $favoritedStories = $("#favorited-stories");
const $loginForm = $("#login-form");
const $navSubmit = $("#nav-submit");
const $navLogin = $("#nav-login");
const $navUserProfile = $("#nav-user-profile");
const $navLogOut = $("#nav-logout");
const $ownStories = $("#my-stories");
const $signupForm = $("#signup-form");
const $storiesLists = $(".stories-list");
const $storiesLoadingMsg = $("#stories-loading-msg");
const $submitForm = $("#submit-form");
const $userProfile = $("#user-profile");

// ========================================================================
function hidePageComponents() {
  const components = [
    $allStoriesList,
    $loginForm,
    $signupForm,
  ];
  components.forEach(c => c.hide());
}

// ========================================================================
async function start() {
  console.debug("start");
  // "Remember logged-in user" and log in, if credentials in localStorage
  await checkForRememberedUser();
  await getAndShowStoriesOnStart();
  if (currentUser) updateUIOnUserLogin();// if we got a logged-in user
}

console.warn("HEY STUDENT: This program sends many debug messages to" +
  " the console. If you don't see the message 'start' below this, you're not" +
  " seeing those helpful debug messages. In your browser console, click on" +
  " menu 'Default Levels' and add Verbose");
$(start);