!(function(name,factory){
  if(typeof define === 'funciton'){
    define(facotry)
  }else if(typeof module !=='undefined' && module.exports){
     module.exports = factory(require('debug')('touchproxysk'));
  }else{
    this.name = factory();
  }
}('touchproxysk');
