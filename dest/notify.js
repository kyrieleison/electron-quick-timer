var remote = require('remote');
var shell = remote.require('shell');

function notificationTest() {
  var n = new Notification('Electron', {
                              body: '5秒経ちました！秒報の時間ですよ！'
                            });
  //n.onclick = function () {
  //    shell.openExternal('http://electron.atom.io/docs/v0.29.0/');
  //};
}
var time  = 5000;
var timer = setInterval(notificationTest, time);

document.getElementById('timer-btn').addEventListener('click', function() {
    clearInterval(timer);
}, false);
