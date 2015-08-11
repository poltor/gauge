!function(t,i){function e(t){if(this.options=s,t)for(var i in t)this.options[i]=t[i];this._init()}var s={width:500,height:500,maxRangeAngle:230,rangeRadius:180,indicatorSpindleRadius:10,indicatorArrowLength:8,indicatorArrowWidth:200,scaleMin:2,scaleMax:9,scalePosition:"outside",scaleMajorTickInterval:1,scaleMajorTickOffset:-10,scaleMajorTickLength:-5,scaleMinorTickLength:-2,scaleMinorTickInterval:.1,scaleTextTickOffsetTop:-5,scaleTextTickOffsetLeft:0,scaleDefaultColor:"#666",scaleText:{},scaleColors:[]};e.prototype._init=function(){this.element=i.getElementById("container"),this.render()},e.prototype.getPointOnCircle=function(t,i,e,s){return{x:t+e*Math.sin(Math.PI*s/180),y:i+e*Math.cos(Math.PI*s/180)}},e.prototype.render=function(){{var t={x:this.options.width.toFixed(6)/2,y:this.options.height.toFixed(6)/2},e=this.options.maxRangeAngle/2-180-this.options.maxRangeAngle;e+this.options.maxRangeAngle}this.svg=i.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttributeNS(null,"width",this.options.width),this.svg.setAttributeNS(null,"height",this.options.height),this.svg.setAttributeNS(null,"class","gauge");var s=this.options.maxRangeAngle/(this.options.scaleMax-this.options.scaleMin).toFixed(6),o=this.options.scaleMajorTickInterval*s,n=this.options.scaleMinorTickInterval*s,r=this.options.scaleMajorTickOffset,a=this.options.scaleMajorTickLength,l=30;if("outside"!=this.options.scalePosition)var r=-this.options.scaleMajorTickOffset,a=-this.options.scaleMajorTickLength,l=-30;for(var h=0,c=e,p=this.options.scaleMin;p.toFixed(6)<=this.options.scaleMax.toFixed(6);p+=this.options.scaleMinorTickInterval){p=+p.toFixed(6);var u=e+h*o;if((p.toFixed(6)-this.options.scaleMin).toFixed(6)%this.options.scaleMajorTickInterval.toFixed(6)==0){var d=-u*Math.PI/180;text=Math.round(100*p)/100,this.options.scaleText[p.toFixed(6)]&&(text=this.options.scaleText[p.toFixed(6)]),this.drawLine(t.x,t.y-this.options.rangeRadius+r,t.x,t.y-this.options.rangeRadius+r+a,"rotate("+(u-180)+","+t.x+","+t.y+")",this.svg).setAttribute("class","major-thick"),this.drawText(t.x+(this.options.rangeRadius+l)*Math.sin(d)-this.options.scaleTextTickOffsetLeft,t.y+(this.options.rangeRadius+l)*Math.cos(d)-this.options.scaleTextTickOffsetTop,text,this.svg).setAttribute("class","text");var g=this.options.scaleColors.filter(function(t){return p.toFixed(6)>=t.from&&p.toFixed(6)<t.till}),x=this.options.scaleDefaultColor;if(g.length>0)var x=g[0].color;p.toFixed(6)!=this.options.scaleMax.toFixed(6)&&this.drawPartOfCircle(t.x,t.y,this.options.rangeRadius,-u,-u-o,x,this.svg),h++}else{var w=this.getPointOnCircle(t.x,t.y,this.options.rangeRadius-r,-c);this.drawLine(w.x,w.y,w.x,w.y+this.options.scaleMinorTickLength,"",this.svg).setAttribute("class","minor-thick")}c+=n}this.drawIndicator(t.x,t.y,this.svg),this.element.appendChild(this.svg)},e.prototype.drawIndicator=function(t,e,s){var o=i.createElementNS("http://www.w3.org/2000/svg","g");o.setAttributeNS(null,"class","indicator-group"),o.setAttributeNS(null,"transform","translate(0, 0) rotate("+(-this.options.maxRangeAngle/2).toFixed(6)+","+t+","+e+")"),this.drawCircle(t,e,this.options.indicatorSpindleRadius,o).setAttribute("class","spindle");var n=i.createElementNS("http://www.w3.org/2000/svg","path"),r="M"+(t-this.options.indicatorArrowLength/2).toFixed(6)+" "+e+" ";return r+="L"+t+" "+(e-this.options.indicatorArrowWidth).toFixed(6)+" ",r+="L"+(t+this.options.indicatorArrowLength/2).toFixed(6)+" "+e+" ",r+="z",n.setAttributeNS(null,"d",r),n.setAttributeNS(null,"class","arrow"),s.appendChild(n),s.appendChild(o),this},e.prototype.drawPartOfCircle=function(t,i,e,s,o,n,r){var a=this.getPointOnCircle(t,i,e,s),l=this.getPointOnCircle(t,i,e,o);this.drawArc(a,l,e,n,r).setAttributeNS(null,"classname","stroke-section")},e.prototype.drawArc=function(t,e,s,o,n){var r;return r=i.createElementNS("http://www.w3.org/2000/svg","path"),r.setAttributeNS(null,"d","M"+t.x+","+t.y+" A"+s+","+s+" 1 0,1 "+e.x+","+e.y),r.setAttributeNS(null,"stroke-width",3),r.setAttributeNS(null,"opacity",1),r.setAttributeNS(null,"fill","none"),r.setAttributeNS(null,"stroke",o),n.appendChild(r),r},e.prototype.drawCircle=function(t,e,s,o){var n=i.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttributeNS(null,"cx",t),n.setAttributeNS(null,"cy",e),n.setAttributeNS(null,"r",s),o.appendChild(n),n},e.prototype.drawLine=function(t,e,s,o,n,r){var a=i.createElementNS("http://www.w3.org/2000/svg","line");return a.setAttributeNS(null,"x1",t),a.setAttributeNS(null,"y1",e),a.setAttributeNS(null,"x2",s),a.setAttributeNS(null,"y2",o),a.setAttributeNS(null,"transform",n),r.appendChild(a),a},e.prototype.drawText=function(t,e,s,o){var n=i.createElementNS("http://www.w3.org/2000/svg","text");return n.setAttributeNS(null,"x",t),n.setAttributeNS(null,"y",e),o.appendChild(n).textContent=s,n},e.prototype.setValue=function(t){var i={x:this.options.width.toFixed(6)/2,y:this.options.height.toFixed(6)/2};t>this.options.scaleMax&&(t=this.options.scaleMax),t<this.options.scaleMin&&(t=this.options.scaleMin);var e=this.options.scaleMax-this.options.scaleMin,s=this.options.maxRangeAngle*(t-this.options.scaleMin)/e,o=this.svg.getElementsByClassName("indicator-group");o.length>0&&o[0].setAttributeNS(null,"transform","translate(0, 0) rotate("+(-this.options.maxRangeAngle/2+s)+","+i.x+","+i.y+")"),this.render()},e.prototype.empty=function(){return this.element.childNodes.length>0&&this.element.removeChild(this.svg),this.svg=null,this},t.Gauge=e}(window,document);