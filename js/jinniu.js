(function($, doc) {

				$.init({
					swipeBack: true, //启用右滑关闭功能
					gestureConfig: {
						doubletap: true
					}

				});

				var contentWebview = null;
				if(document.querySelector('header')){
				document.querySelector('header').addEventListener('doubletap', function() {
					if(contentWebview == null) {
						contentWebview = plus.webview.currentWebview().children()[0];
					}
					contentWebview.evalJS("mui('#pullrefresh').pullRefresh().scrollTo(0,0,100)");
				});
				};

				$('body').on('tap', 'a:not(.mui-control-item)', function() {
					var id = this.getAttribute("href");
                    var href = this.href;
               if(!id){
               		mui.trigger(this,'click');
						
					}else{
						mui.openWindow({
						id: id,
						url: href

					});
						
					}
			
				});

				$('.mui-scroll-wrapper').scroll({
					scrollX: false, //是否横向滚动
					deceleration: 0.0034, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
					indicators: true, //是否显示滚动条
					bounce: false //是否启用回弹
				});
				//焦点图
				(function(){
				var slider = $("#slider");
				slider.slider({
					interval: 5000
				});
 
                var notice = $("#notice");
				notice.slider({
					interval: 4000
				});
					
				})();


//




})(mui, document);
		