$(".sm-btn").click(function () {
    $('#popups').toggleClass("hide");
});

function openSubscribe() {
    $('#pop').toggleClass("hide");
    $('#pop').addClass("dark");
    $('.content-block').load('subscribe.html');
}
function agree() {
    $('#loadContent').load('agree.html');
}
function loginscreen() {
    $('#background').load('default.html');
}

function startLvl() {
    $('#background').load('default.html');
    $('#loadContent').load('lvl.html');
    $('.lvl').addClass("hide");
    $('#footer').load('footer.html #buttonProfile, #buttonRules');
    $('#pop').toggleClass("hide");
    $('#pop').addClass("dark");
    $('.content-block').load('startscreen.html');
}
function startDiff() {
    $('#pop, .darkpop').toggleClass("hide");
    $('#pop').addClass("dark");
    $('.content-block').load('difficult.html');
}
function startGame() {
    $('.lvl').removeClass("hide");
    $('#pop, .darkpop').toggleClass("hide");
    $('#pop').addClass("dark");
    $('.content-block').load('difficult.html');
    $('#loadContent').load('game-telepat.html');
    $('#title').addClass("hide");
    $('.header').css("top: 0");
    $('#footer').load('footer.html #buttonProfile, #buttonRules');
}
function closeBtn() {
    $('#loadContent').load('lvl.html');
    $('#background').load('default.html');
    $('#footer').load('footer.html #buttonProfile, #buttonRules');
    $('#title').text("");
}
function profileBtn() {
    closePopup();
    $('.sub-header').removeClass("hide");
    $('#background').load('theme.html');
    $('#loadContent').load('profile.html');
    $('#footer').load('footer.html #buttonStore, #buttonCoupon, #buttonAchievements');
    $('#title').text("ПРОФИЛЬ");

}
function coupinBtn() {
    $('.sub-header').removeClass("hide");
    $('#loadContent').load('coupons.html');
    $('#footer').load('footer.html #buttonProfile, #buttonCoupon, #buttonAchievements');
    $('#title').text("ПРОМОКОДЫ");
}
function achievmentsBtn() {
    $('.sub-header').removeClass("hide");
    $('#loadContent').load('achievments.html');
    $('#footer').load('footer.html #buttonProfile, #buttonCoupon, #buttonAchievements');
    $('#title').text("ТИТУЛЫ");
}
function storeBtn() {
    $('.sub-header').removeClass("hide");
    $('#loadContent').load('store.html');
    $('#footer').load('footer.html #buttonProfile, #buttonCoupon, #buttonAchievements');
    $('#title').text("МАГАЗИН");
}
function closePopup() {
    $('#pop, .darkpop').addClass("hide");
    $('#popups').addClass("hide");

}
function loadWin() {
    $('#pop,.darkpop').toggleClass("hide");
    $('.content-block').load('win.html');
}
function loadLose() {
    $('#pop, .darkpop').toggleClass("hide");
    $('.content-block').load('lose.html');
}
function loadRules() {
    $('#pop, .darkpop').removeClass("hide");
    $('#pop').addClass("dark");
    $('.content-block').load('rules.html');
}
function loadLottery() {
    $('#pop, .darkpop').removeClass("hide");
    $('#pop').addClass("dark");
    $('.content-block').load('lottery.html');
}
function loadPuzzle() {
    $('#pop, .darkpop').removeClass("hide");
    $('#pop').addClass("dark");
    $('.content-block').load('puzzle.html');
}

