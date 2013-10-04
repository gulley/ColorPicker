javascript:(
  function(){
    var str = $('div.g')[0].getAttribute('style');
    var pat = /(\d+)/g;
    var colors = str.match(pat);
    var red   = colors[0]/255;
    var green = colors[1]/255;
    var blue  = colors[2]/255;
    var text = '[' + red.toFixed(3) + ' ' + green.toFixed(3) + ' ' + blue.toFixed(3) + ']';
    window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
  }
)()

