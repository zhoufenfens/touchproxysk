	var scoreArr = [0,1,1,0,1,1,0,1];
	var coordinateArr = [];
	$.each(scoreArr,function(index,item){
	  var x,y;
	  if(item){
	    y = 10;
	  }else{
	    y = 70;
	  }
	  x = 10+ index*70;
	  coordinateArr.push(x+','+y);
	});
	var pathStr ='M'+ coordinateArr.join('L');
	var paper = Raphael('trend_chart',555,90);
	var path = paper.path(pathStr);
	path.attr({
	  'stroke-width':7,
	  'stroke':'#fde9eb'
	});
	var set = paper.set();
	var length = coordinateArr.length;
	$.each(coordinateArr,function(index,item){
	  var x = parseFloat(item.split(',')[0]);
	  var y = parseFloat(item.split(',')[1]);
	  if(index === length - 1 ){
	      set.push(paper.circle(x,y,7).attr({
		    'fill':'#ec2438',
		    'stroke':'#ec2438',
		    'stroke-width':2
	  		}));
	  }else{
	      set.push(paper.circle(x,y,5).attr({
		    'fill':'#fff',
		    'stroke':'#ec2438',
		    'stroke-width':2
	  		}));
	  }
	});
