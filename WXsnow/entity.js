function DropAnimation(snow){
  this.ctx = snow.ctx
  this.speed = snow.speed
  this.count = snow.count
  this.systemW=snow.systemW
  this.systemH=snow.systemH
  this.dropArr=[]

  this.init()
  this.animation()
}

//初始化
DropAnimation.prototype.init=function(){
  
  for(var i=0;i<this.count;i++){

      this.size=this.rand(5,10),
       this.dur=this.size/2
      this.alpha=this.rand(0.25,0.75)
      if(i<this.count/18.5){
        this.size=this.rand(120,170)
        this.dur=this.dur*4
        this.alpha=this.alpha/3.3
      }else if(i<this.count/3){
        this.size=this.rand(20,35)
        this.dur=this.dur*2.5
        this.alpha=this.alpha/2
      }else{
        this.alpha=this.alpha/1.3
      }
   
     
      this.dropArr.push({
          size:this.size,
          dur:this.dur,
          alpha:this.alpha,
          x:this.rand(-2*this.systemW,2*this.systemW),
          y: Math.random() * (-this.systemH),

      })
    
    
  }

}

//运动动画
DropAnimation.prototype.animation=function(){
 

  this.dropArr.map((item) => {
   
    
    if (item.y > this.systemH || item.x >this.systemW) {
      item.y = 0
      item.x=this.rand(-2*this.systemW,2*this.systemW);
    }

    this.ctx.beginPath()
    this.ctx.setGlobalAlpha(item.alpha)
    this.ctx.drawImage("/pages/image/index.png",item.x,item.y,item.size,item.size)

    
    item.x=item.x+item.dur*this.speed
    item.y=item.y+this.rand(0.6,1.3)*item.dur*this.speed



    
  })
  
  this.ctx.draw()

  this.timer =  setTimeout(() => {
    this.animation()
  }, 1000/60)

}

//随机得到（min,max）之间的数
DropAnimation.prototype.rand=function(min=0,max=1){
  return min+(max-min)*Math.random();
}


module.exports = DropAnimation;