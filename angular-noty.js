(function (angular, $) {
	return angular.module('notyModule', []).provider('noty', function () {
		var settings = {
      template: '<div class="noty_message">' +
      '<span class="noty_text"></span>' +
      '<h2 class="margin-top-10"><i class="fa fa-warning pull-left"></i></h2>' +
      '<span class="pull-left">This Content Is Preparing</span>' +
      '<div class="closeNoty text-white pull-right"><i class="fa fa-times"></i></div>' +
      '</div>',
        timeout: 5000,
      animation: {
      open: 'animated fadeInDown', // Animate.css class names
        close: 'animated fadeOutUp', // Animate.css class names
    },
      theme: 'reaktorNoty',
        killer: true,
      type: 'alert',
      layout: 'topCenter'
    };

		return {
			settings: settings,
			$get: function () {
				var callNoty = function (newSettings) {
          angular.extend(settings, newSettings);
					return noty(settings);
				};

				return {
					show: function (message, type) {
						callNoty({text: message || settings.text, type: type || settings.type});
					},

					showAlert: function (message) {
						callNoty({text: message || settings.text, type: "alert"});
					},

					showSuccess: function (message) {
						callNoty({text: message || settings.text, type: "success"});
					},

					showError: function (message) {
						callNoty({text: message, type: "error"});
					},

					closeAll: function () {
						return $.noty.closeAll()
					},
					clearShowQueue: function () {
						return $.noty.clearQueue();
					}.bind(this)
				}
			}

		};
	})
}(angular, jQuery));
