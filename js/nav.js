"use strict";

// ========================================================================
function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}
$body.on("click", "#nav-all", navAllStories);

// ========================================================================
function navSubmitStoryClick(evt) {
  console.debug("navSubmitStoryClick", evt)
  hidePageComponents()
  $allStoriesList.show()
  $submitForm.show()
}
$navSubmit.on("click", navSubmitStoryClick)

// ========================================================================
function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents()
  showFavorites()
}
$body.on("click", "#nav-favorites", navFavoritesClick)

// ========================================================================
function navMyStories(evt) {
  console.debug("navMyStories", evt)
  hidePageComponents()
  putUserStoriesOnPage()
  $ownStories.show()
}
$body.on("click", "#nav-my-stories", navMyStories)

// ========================================================================
function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}
$navLogin.on("click", navLoginClick);

// ========================================================================
function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}