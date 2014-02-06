(function($) {
	Drupal.behaviors.iit_alert_message = {
		attach:function(context) {
			if ($('#iit-alert-message', context).length) {
				$.ajax({
					url: '/api/v1/public/alerts',
					success: function(data) {
						if (data.nid !== '0') {
							// Alert Message is present
							var content = '<div class="inner-container"><div id="iit-alert-message-content">';
							content += '<h1 class="message-title">' + data.title + '</h1>';
							content += '<h3 class="message-updated">' + 'Updated ' + data.updatedDate + '</h3>';
							content += '<div class="message-body">' + data.body_value + '</div>';
							content += '</div></div>';

							$('#iit-alert-message').addClass(data.alert_level.toLowerCase());
							$('#iit-alert-message').html(content);

							if (data.alert_level.toLowerCase() === 'critical') {
								$('#homepage-hero-slideshow').css('display', 'none');
							}
							
						}
					}
				});
			}
		}
	}
})(jQuery);