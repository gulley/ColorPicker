function colors = makeColorMap(hexColorList,n)
    if nargin < 2
        n = 64;
    end
    
    colorList = zeros(size(hexColorList,1),3);
    for i = 1:size(hexColorList)
        colorList(i,:) = sscanf(hexColorList(i,:),'%*1s %2x %2x %2x')'/255;
    end
    inPts  = linspace(0,1,size(colorList,1))';
    outPts = linspace(0,1,n)';
    colors = interp1(inPts,colorList,outPts);
    
    if nargout < 1
        colormap(colors)
    end
 end

