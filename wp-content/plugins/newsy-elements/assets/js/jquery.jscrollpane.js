!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(me){me.fn.jScrollPane=function(o){function i(b,e){var w,y,k,C,T,P,B,S,A,W,Y,z,M,D,X,R,x,I,F,t,L,q,O,E,V,G,N,K,Q,U,$,J,Z,_,H=this,s=!0,n=!0,r=!1,a=!1,o=b.clone(!1,!1).empty(),ee=me.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";function te(e){var p,d,t,o,i,u,f,s,h,n,r,a,j,l,c,g=!1,v=!1;if(w=e,void 0===y)t=b.scrollTop(),o=b.scrollLeft(),b.css({overflow:"hidden",padding:0}),k=b.innerWidth()+Z,C=b.innerHeight(),b.width(k),y=me('<div class="jspPane" />').css("padding",J).append(b.children()),T=me('<div class="jspContainer" />').css({width:k+"px",height:C+"px"}).append(y).appendTo(b);else{if(b.css("width",""),g=w.stickToBottom&&20<(c=B-C)&&c-ge()<10,v=w.stickToRight&&20<(i=P-k)&&i-je()<10,(c=b.innerWidth()+Z!=k||b.outerHeight()!=C)&&(k=b.innerWidth()+Z,C=b.innerHeight(),T.css({width:k+"px",height:C+"px"})),!c&&_==P&&y.outerHeight()==B)return b.width(k),0;_=P,y.css("width",""),b.width(k),T.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}function m(){var e=x,t=D;switch(a){case 40:H.scrollByY(w.keyboardSpeed,!1);break;case 38:H.scrollByY(-w.keyboardSpeed,!1);break;case 34:case 32:H.scrollByY(C*w.scrollPagePercent,!1);break;case 33:H.scrollByY(-C*w.scrollPagePercent,!1);break;case 39:H.scrollByX(w.keyboardSpeed,!1);break;case 37:H.scrollByX(-w.keyboardSpeed,!1)}return j=e!=x||t!=D}y.css("overflow","auto"),P=e.contentWidth||y.width(),B=y[0].scrollHeight,y.css("overflow",""),W=1<(A=B/C),(Y=1<(S=P/k))||W?(b.addClass("jspScrollable"),(i=w.maintainPosition&&(D||x))&&(p=je(),d=ge()),W&&(T.append(me('<div class="jspVerticalBar" />').append(me('<div class="jspCap jspCapTop" />'),me('<div class="jspTrack" />').append(me('<div class="jspDrag" />').append(me('<div class="jspDragTop" />'),me('<div class="jspDragBottom" />'))),me('<div class="jspCap jspCapBottom" />'))),I=T.find(">.jspVerticalBar"),F=I.find(">.jspTrack"),z=F.find(">.jspDrag"),w.showArrows&&(O=me('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",ne(0,-1)).bind("click.jsp",ve),E=me('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",ne(0,1)).bind("click.jsp",ve),w.arrowScrollOnHover&&(O.bind("mouseover.jsp",ne(0,-1,O)),E.bind("mouseover.jsp",ne(0,1,E))),se(F,w.verticalArrowPositions,O,E)),L=C,T.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){L-=me(this).outerHeight()}),z.hover(function(){z.addClass("jspHover")},function(){z.removeClass("jspHover")}).bind("mousedown.jsp",function(e){me("html").bind("dragstart.jsp selectstart.jsp",ve),z.addClass("jspActive");var t=e.pageY-z.position().top;return me("html").bind("mousemove.jsp",function(e){le(e.pageY-t,!1)}).bind("mouseup.jsp mouseleave.jsp",ae),!1}),oe()),Y&&(T.append(me('<div class="jspHorizontalBar" />').append(me('<div class="jspCap jspCapLeft" />'),me('<div class="jspTrack" />').append(me('<div class="jspDrag" />').append(me('<div class="jspDragLeft" />'),me('<div class="jspDragRight" />'))),me('<div class="jspCap jspCapRight" />'))),V=T.find(">.jspHorizontalBar"),G=V.find(">.jspTrack"),X=G.find(">.jspDrag"),w.showArrows&&(Q=me('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",ne(-1,0)).bind("click.jsp",ve),U=me('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",ne(1,0)).bind("click.jsp",ve),w.arrowScrollOnHover&&(Q.bind("mouseover.jsp",ne(-1,0,Q)),U.bind("mouseover.jsp",ne(1,0,U))),se(G,w.horizontalArrowPositions,Q,U)),X.hover(function(){X.addClass("jspHover")},function(){X.removeClass("jspHover")}).bind("mousedown.jsp",function(e){me("html").bind("dragstart.jsp selectstart.jsp",ve),X.addClass("jspActive");var t=e.pageX-X.position().left;return me("html").bind("mousemove.jsp",function(e){pe(e.pageX-t,!1)}).bind("mouseup.jsp mouseleave.jsp",ae),!1}),N=T.innerWidth(),ie()),Y&&W&&(c=G.outerHeight(),e=F.outerWidth(),L-=c,me(V).find(">.jspCap:visible,>.jspArrow").each(function(){N+=me(this).outerWidth()}),N-=e,C-=e,k-=c,G.parent().append(me('<div class="jspCorner" />').css("width",c+"px")),oe(),ie()),Y&&y.width(T.outerWidth()-Z+"px"),B=y.outerHeight(),A=B/C,Y&&((K=Math.ceil(1/S*N))>w.horizontalDragMaxWidth?K=w.horizontalDragMaxWidth:K<w.horizontalDragMinWidth&&(K=w.horizontalDragMinWidth),X.width(K+"px"),R=N-K,de(x)),W&&((q=Math.ceil(1/A*L))>w.verticalDragMaxHeight?q=w.verticalDragMaxHeight:q<w.verticalDragMinHeight&&(q=w.verticalDragMinHeight),z.height(q+"px"),M=L-q,ce(D)),i&&(fe(v?P-k:p,!1),ue(g?B-C:d,!1)),y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(e){he(e.target,!1)}),T.unbind(ee).bind(ee,function(e,t,o,i){var s=x=x||0,n=D=D||0,e=e.deltaFactor||w.mouseWheelSpeed;return H.scrollBy(o*e,-i*e,!1),s==x&&n==D}),r=!1,T.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(e){e=e.originalEvent.touches[0];u=je(),f=ge(),s=e.pageX,h=e.pageY,r=!(n=!1)}).bind("touchmove.jsp",function(e){var t,o;if(r)return e=e.originalEvent.touches[0],t=x,o=D,H.scrollTo(u+s-e.pageX,f+h-e.pageY),n=n||5<Math.abs(s-e.pageX)||5<Math.abs(h-e.pageY),t==x&&o==D}).bind("touchend.jsp",function(e){r=!1}).bind("click.jsp-touchclick",function(e){if(n)return n=!1}),w.enableKeyboardNavigation&&(l=[],Y&&l.push(V[0]),W&&l.push(I[0]),y.bind("focus.jsp",function(){b.focus()}),b.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(e){if(e.target===this||l.length&&me(e.target).closest(l).length){var t=x,o=D;switch(e.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:a=e.keyCode,m();break;case 35:ue(B-C),a=null;break;case 36:ue(0),a=null}return!(j=e.keyCode==a&&t!=x||o!=D)}}).bind("keypress.jsp",function(e){if(e.keyCode==a&&m(),e.target===this||l.length&&me(e.target).closest(l).length)return!j}),w.hideFocus?(b.css("outline","none"),"hideFocus"in T[0]&&b.attr("hideFocus",!0)):(b.css("outline",""),"hideFocus"in T[0]&&b.attr("hideFocus",!1))),w.clickOnTrack&&(re(),W&&F.bind("mousedown.jsp",function(i){var s,n,e,r,a,l,c;if(void 0===i.originalTarget||i.originalTarget==i.currentTarget)return e=(n=me(this)).offset(),r=i.pageY-e.top-D,a=!0,c=function(){s&&clearTimeout(s),s=null,me(document).unbind("mouseup.jsp",c)},(l=function(){var e=n.offset(),e=i.pageY-e.top-q/2,t=C*w.scrollPagePercent,o=M*t/(B-C);if(r<0)e<D-o?H.scrollByY(-t):le(e);else{if(!(0<r))return void c();D+o<e?H.scrollByY(t):le(e)}s=setTimeout(l,a?w.initialDelay:w.trackClickRepeatFreq),a=!1})(),me(document).bind("mouseup.jsp",c),!1}),Y&&G.bind("mousedown.jsp",function(i){var s,n,e,r,a,l,c;if(void 0===i.originalTarget||i.originalTarget==i.currentTarget)return e=(n=me(this)).offset(),r=i.pageX-e.left-x,a=!0,c=function(){s&&clearTimeout(s),s=null,me(document).unbind("mouseup.jsp",c)},(l=function(){var e=n.offset(),e=i.pageX-e.left-K/2,t=k*w.scrollPagePercent,o=R*t/(P-k);if(r<0)e<x-o?H.scrollByX(-t):pe(e);else{if(!(0<r))return void c();x+o<e?H.scrollByX(t):pe(e)}s=setTimeout(l,a?w.initialDelay:w.trackClickRepeatFreq),a=!1})(),me(document).bind("mouseup.jsp",c),!1})),function(){if(location.hash&&1<location.hash.length){var e,t,o=escape(location.hash.substr(1));try{e=me("#"+o+', a[name="'+o+'"]')}catch(e){return}e.length&&y.find(o)&&(0===T.scrollTop()?t=setInterval(function(){0<T.scrollTop()&&(he(e,!0),me(document).scrollTop(T.position().top),clearInterval(t))},50):(he(e,!0),me(document).scrollTop(T.position().top)))}}(),w.hijackInternalLinks&&(me(document.body).data("jspHijack")||(me(document.body).data("jspHijack",!0),me(document.body).delegate('a[href*="#"]',"click",function(e){var t,o=this.href.substr(0,this.href.indexOf("#")),i=location.href;if(o===(i=-1!==location.href.indexOf("#")?location.href.substr(0,location.href.indexOf("#")):i)){o=escape(this.href.substr(this.href.indexOf("#")+1));try{t=me("#"+o+', a[name="'+o+'"]')}catch(e){return}t.length&&((i=t.closest(".jspScrollable")).data("jsp").scrollToElement(t,!0),i[0].scrollIntoView&&(o=me(window).scrollTop(),((t=t.offset().top)<o||t>o+me(window).height())&&i[0].scrollIntoView()),e.preventDefault())}})))):(b.removeClass("jspScrollable"),y.css({top:0,left:0,width:T.width()-Z}),T.unbind(ee),y.find(":input,a").unbind("focus.jsp"),b.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),y.unbind(".jsp"),re()),w.autoReinitialise&&!$?$=setInterval(function(){te(w)},w.autoReinitialiseDelay):!w.autoReinitialise&&$&&clearInterval($),t&&b.scrollTop(0)&&ue(t,!1),o&&b.scrollLeft(0)&&fe(o,!1),b.trigger("jsp-initialised",[Y||W])}function oe(){F.height(L+"px"),D=0,t=w.verticalGutter+F.outerWidth(),y.width(k-t-Z);try{0===I.position().left&&y.css("margin-left",t+"px")}catch(e){}}function ie(){T.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){N-=me(this).outerWidth()}),G.width(N+"px"),x=0}function se(e,t,o,i){var s="before",n="after";(t="os"==t?/Mac/.test(navigator.platform)?"after":"split":t)==s?n=t:t==n&&(s=t,t=o,o=i,i=t),e[s](o)[n](i)}function ne(l,c,p){return function(){return e=l,t=c,i=p,o=me(o=this).addClass("jspActive"),r=!0,(a=function(){0!==e&&H.scrollByX(e*w.arrowButtonSpeed),0!==t&&H.scrollByY(t*w.arrowButtonSpeed),n=setTimeout(a,r?w.initialDelay:w.arrowRepeatFreq),r=!1})(),s=i?"mouseout.jsp":"mouseup.jsp",(i=i||me("html")).bind(s,function(){o.removeClass("jspActive"),n&&clearTimeout(n),n=null,i.unbind(s)}),this.blur(),!1;var e,t,o,i,s,n,r,a}}function re(){G&&G.unbind("mousedown.jsp"),F&&F.unbind("mousedown.jsp")}function ae(){me("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),z&&z.removeClass("jspActive"),X&&X.removeClass("jspActive")}function le(e,t){var o,i,s,n;W&&(e<0?e=0:M<e&&(e=M),o=new me.Event("jsp-will-scroll-y"),b.trigger(o,[e]),o.isDefaultPrevented()||(i=0===(o=e||0),s=o==M,n=-e/M*(B-C),(t=void 0===t?w.animateScroll:t)?H.animate(z,"top",e,ce,function(){b.trigger("jsp-user-scroll-y",[-n,i,s])}):(z.css("top",e),ce(e),b.trigger("jsp-user-scroll-y",[-n,i,s]))))}function ce(e){void 0===e&&(e=z.position().top),T.scrollTop(0);var t,o=0===(D=e||0),i=D==M,e=-e/M*(B-C);s==o&&r==i||(s=o,r=i,b.trigger("jsp-arrow-change",[s,r,n,a])),t=i,w.showArrows&&(O[o?"addClass":"removeClass"]("jspDisabled"),E[t?"addClass":"removeClass"]("jspDisabled")),y.css("top",e),b.trigger("jsp-scroll-y",[-e,o,i]).trigger("scroll")}function pe(e,t){var o,i,s,n;Y&&(e<0?e=0:R<e&&(e=R),o=new me.Event("jsp-will-scroll-x"),b.trigger(o,[e]),o.isDefaultPrevented()||(i=0===(o=e||0),s=o==R,n=-e/R*(P-k),(t=void 0===t?w.animateScroll:t)?H.animate(X,"left",e,de,function(){b.trigger("jsp-user-scroll-x",[-n,i,s])}):(X.css("left",e),de(e),b.trigger("jsp-user-scroll-x",[-n,i,s]))))}function de(e){void 0===e&&(e=X.position().left),T.scrollTop(0);var t,o=0===(x=e||0),i=x==R,e=-e/R*(P-k);n==o&&a==i||(n=o,a=i,b.trigger("jsp-arrow-change",[s,r,n,a])),t=i,w.showArrows&&(Q[o?"addClass":"removeClass"]("jspDisabled"),U[t?"addClass":"removeClass"]("jspDisabled")),y.css("left",e),b.trigger("jsp-scroll-x",[-e,o,i]).trigger("scroll")}function ue(e,t){le(e/(B-C)*M,t)}function fe(e,t){pe(e/(P-k)*R,t)}function he(e,t,p){var o,i,s,n,r,a,l=0,c=0;try{o=me(e)}catch(e){return}for(e=o.outerHeight(),i=o.outerWidth(),T.scrollTop(0),T.scrollLeft(0);!o.is(".jspPane");)if(l+=o.position().top,c+=o.position().left,o=o.offsetParent(),/^body|html$/i.test(o[0].nodeName))return;n=(s=ge())+C,l<s||t?r=l-w.horizontalGutter:n<l+e&&(r=l-C+e+w.horizontalGutter),isNaN(r)||ue(r,p),n=(s=je())+k,c<s||t?a=c-w.horizontalGutter:n<c+i&&(a=c-k+i+w.horizontalGutter),isNaN(a)||fe(a,p)}function je(){return-y.position().left}function ge(){return-y.position().top}function ve(){return!1}Z="border-box"===b.css("box-sizing")?J=0:(J=b.css("paddingTop")+" "+b.css("paddingRight")+" "+b.css("paddingBottom")+" "+b.css("paddingLeft"),(parseInt(b.css("paddingLeft"),10)||0)+(parseInt(b.css("paddingRight"),10)||0)),me.extend(H,{reinitialise:function(e){te(e=me.extend({},w,e))},scrollToElement:function(e,t,o){he(e,t,o)},scrollTo:function(e,t,o){fe(e,o),ue(t,o)},scrollToX:function(e,t){fe(e,t)},scrollToY:function(e,t){ue(e,t)},scrollToPercentX:function(e,t){fe(e*(P-k),t)},scrollToPercentY:function(e,t){ue(e*(B-C),t)},scrollBy:function(e,t,o){H.scrollByX(e,o),H.scrollByY(t,o)},scrollByX:function(e,t){pe((je()+Math[e<0?"floor":"ceil"](e))/(P-k)*R,t)},scrollByY:function(e,t){le((ge()+Math[e<0?"floor":"ceil"](e))/(B-C)*M,t)},positionDragX:function(e,t){pe(e,t)},positionDragY:function(e,t){le(e,t)},animate:function(e,t,o,i,s){var n={};n[t]=o,e.animate(n,{duration:w.animateDuration,easing:w.animateEase,queue:!1,step:i,complete:s})},getContentPositionX:je,getContentPositionY:ge,getContentWidth:function(){return P},getContentHeight:function(){return B},getPercentScrolledX:function(){return je()/(P-k)},getPercentScrolledY:function(){return ge()/(B-C)},getIsScrollableH:function(){return Y},getIsScrollableV:function(){return W},getContentPane:function(){return y},scrollToBottom:function(e){le(M,e)},hijackInternalLinks:me.noop,destroy:function(){var e=ge(),t=je();b.removeClass("jspScrollable").unbind(".jsp"),y.unbind(".jsp"),b.replaceWith(o.append(y.children())),o.scrollTop(e),o.scrollLeft(t),$&&clearInterval($)}}),te(e)}return o=me.extend({},me.fn.jScrollPane.defaults,o),me.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){o[this]=o[this]||o.speed}),this.each(function(){var e=me(this),t=e.data("jsp");t?t.reinitialise(o):(me("script",e).filter('[type="text/javascript"],:not([type])').remove(),t=new i(e,o),e.data("jsp",t))})},me.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}});