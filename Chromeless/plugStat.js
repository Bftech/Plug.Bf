API.on(API.DJ_ADVANCE, stat);
function stat(obj)
{
if (obj == null) return; // no dj
 
  var lastPlay = obj.lastPlay;
  var lastVid = lastPlay.media;
  var lastStat = lastPlay.score;
  var msg = '/me ';
  msg += lastVid.author;
  msg += ' - ';
  msg += lastVid.title;
  msg += ' : ';
  msg += lastStat.positive;
  msg += ' Woots | ';
  msg += lastStat.negative;
  msg += ' Mehs | ';
  msg += lastStat.curates;
  msg += ' Curates';
  
  API.sendChat(msg);
}
alert('PlugStat by Bftech enabled');
