javascript:(
  function(){
    colorDivList = $('div.g');
    text = 'makeColorMap([';
    for (i=0;i<6;i++)
    {
		str = colorDivList[i].getAttribute('style');
	    pat = /(\d+)/g;
	    colors = str.match(pat);
	    red   = colors[0]/255;
	    green = colors[1]/255;
	    blue  = colors[2]/255;
	    text += red.toFixed(3) + ',' + green.toFixed(3) + ',' + blue.toFixed(3) + ';';   
    }
    text += ']);';
    window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
  }
)()
