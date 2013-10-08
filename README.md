ColorPicker
===========

Bookmarklet to export colormaps from Gregor Aisch's colorvis tool to MATLAB.

The idea is to click on the bookmarklet and generate a MATLAB command based on the chosen colors.

Installation
------------

Usage
------------

Start with one of these color generators

* http://vis4.net/labs/colorvis/embed.html?m=hcl&gradients=6
* http://vis4.net/labs/colorvis/embed.html?m=lab&gradients=6
* http://vis4.net/labs/colorvis/embed.html?m=hsv&gradients=6
* http://vis4.net/labs/colorvis/embed.html?m=hsl&gradients=6
 
Execute the bookmarklet code. It will prompt you with some code that you can then paste into MATLAB.
Run it in MATLAB, and assuming you have the associated M-file (makeColorMap.m) ready to run, it will 
create a color map based on what you chose in the Javascript color picker.

Other links
------------

Here are some other color pickers that we could work with.

* http://tristen.ca/hcl-picker/#/hlc/6/1/21313E/EFEE69
* https://vis4.net/labs/multihue/#colors=lemonchiffon,red,midnightblue|steps=9|bez=1|coL=1
 
