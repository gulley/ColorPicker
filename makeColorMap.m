function colors = makeColorMap(colorList,n)
    if nargin < 2
        n = 64;
    end
inPts  = linspace(0,1,size(colorList,1))';
outPts = linspace(0,1,n)';
colors = interp1(inPts,colorList,outPts)
colormap(colors)
