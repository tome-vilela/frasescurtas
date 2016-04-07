
var enableGoogleAnalytics = true;

var __fbInit = window.fbAsyncInit;
window.fbAsyncInit = function () {
    __fbInit();

    FB.Event.subscribe('edge.create', function () {
        ga('send', 'event', 'Social', 'Like+1', 'Facebook');
    });

    FB.Event.subscribe('edge.remove', function () {
        ga('send', 'event', 'Social', 'Like-1', 'Facebook');
    });
};

function randomPhrase() {
    var vector = [18, 17, 49, 25, 28, 4, 9, 8, 32, 25, 28, 9, 16, 8, 28, 23, 9, 16, 5, 26, 15, 6, 8, 18, 8, 17, 16, 17, 10, 6, 20, 18, 6, 8, 10, 9, 16, 15, 46, 15, 8, 25, 26, 8, 7, 14, 6, 15, 26, 8, 7, 5, 24, 7, 47, 20, 22, 17, 36, 4, 14, 6, 5, 16, 13, 34, 55, 36, 20, 15, 23, 24, 6, 19];
    var r1 = Math.floor(Math.random() * vector.length);
    var r2 = Math.floor(Math.random() * vector[r1]);
    location.href = '../' + (r1 + 1) + '/' + (r2 + 1) + '.html';
}

function sendViaWhatsApp(e) {
    ga('send', 'event', 'Social', 'Share', 'WhatsApp');
    location.href = "whatsapp://send?text=" + location.href;
    e.preventDefault();
}

function getMetaTag(property) {
    var metas = document.getElementsByTagName('meta');

    for (var i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute("property") == property) {
            return metas[i].getAttribute("content");
        }
    }

    return "";
}
