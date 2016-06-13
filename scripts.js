window.fbAsyncInit = function() {
	FB.init({
		appId      : '520425498126829',
		status	   : true,
		cookie	   : true,
		xfbml      : true,
		version    : 'v2.5'
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function postToFeed(title, customLink, desc){
	var obj = {
		method: 'feed',
		link: customLink, 
		name: title,
		description: desc
	};

	function callback(response){}
		FB.ui(obj, callback);
}

(function($) {
	$(document).ready(function(){
		$('#open').on('click', function(){
			$('.overlay, .modal, #close').fadeIn();
			$('body').css('overflow', 'hidden');
			$('body').css('position', 'fixed');
			$('body').css('width', '100%');
		});

		$('#close').on('click', function(){
			$('.overlay, .modal, #close').fadeOut();
			$('body').removeAttr("style");
		})
	});
})(jQuery);