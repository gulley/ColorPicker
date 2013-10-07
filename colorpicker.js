javascript:(
  function(){
    colorDivList = $('div.g');
    text = "makeColorMap([";
    for (i=0; i<6; i++) {
		str = colorDivList[i].getAttribute('style');
	    pat = /(\d+)/g;
	    colors = str.match(pat);
	    text += "'#";
	    for (j=0; j<3; j++) {
		    hexstr = parseInt(colors[j]).toString(16);
		    hexstr = hexstr.length == 1 ? "0" + hexstr : hexstr;
		    text += hexstr;
	    }
	    text += "';";
    }
    text += "]);";
    window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
  }
)()
