jQuery(document).ready(function(){
	var count = 1;
	if(count == 1){	
		jQuery("#block-views-block-menu-badge-block-1-2").hide();
		console.log(count);
		console.log('here 3242');
		var pinpic_noti_val = jQuery("#block-pinpics-custom-theme-account-menu .pinpic_noti").html();
		console.log("pinpic_noti_val:", pinpic_noti_val);
		jQuery("#rid-leaderboard li#menu-name--account__messages").append("<div class='pinpic_noti'>"+pinpic_noti_val+"</div>");
	
		jQuery('#block-views-block-menu-badge-block-1-2 .view-menu-badge .views-row a').on('click', function(e){
			e.preventDefault();
			var mid = jQuery(this).attr('data-id');
			
			console.log(mid);
		});
		
		jQuery('.user-logged-in #rid-leaderboard li.menu__item.menu__item-title--messages a').on('click', function(e){
			e.preventDefault();
			jQuery('#block-views-block-menu-badge-block-1-2').toggle();
		});
	}
	count++;
});