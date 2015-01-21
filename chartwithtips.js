var scoreArr = [0,1,1,0,1,1,1,0,1];
var coordinateArr = [];
$.each(scoreArr,function(index,item){
  var x,y;
  if(item){
    y = 10;
  }else{
    y = 80;
  }
  x = 10+ index*60;
  coordinateArr.push(x+','+y);  
});
console.log(coordinateArr);
var pathStr ='M'+ coordinateArr.join('L');

var paper = Raphael('trend_chart',600,155);
var path = paper.path(pathStr);
path.attr({
  'stroke-width':7,
  'stroke':'#fde9eb'
});
var set = paper.set();
var label = paper.set();
label.push(paper.text(60,12,'猜对').attr({'stroke':'white','font-family':'arial'}));
label.hide();
        var frame = paper.popup(480, 15, label, "left").attr({fill: "#000", stroke: "#666", "stroke-width": 2, "fill-opacity":0.7}).hide();
var length = coordinateArr.length;
$.each(coordinateArr,function(index,item){
  var x = parseFloat(item.split(',')[0]);
  var y = parseFloat(item.split(',')[1]);
  if(index === length -1 ){
      set.push(paper.circle(x,y,7).attr({
        'fill':'#ec2438',
        'stroke':'#ec2438',
        'stroke-width':2
  }).hover(
      function(){
        frame.show();
        label.show();
      },
      function(){
        frame.hide();
        label.hide();
      }
    ));
  }else{
      set.push(paper.circle(x,y,5).attr({
        'fill':'#fff',
        'stroke':'#ec2438',
        'stroke-width':2
      }).hover(
        function(){
          this.attr({
            'fill':"#ec2438",
            'r':7
          });
      },
      function(){
          this.attr({
            'fill':"white",
            'r':5
        });
      }         
      ));
  }
});
