(function (angular, $) {
    return angular.module('ngNoty', []).provider('noty', function () {
        var notySettings = $.noty.defaults;

        return {
            settings: function(settings) {
                 notySettings = settings;
            },
            $get: function () {
                var _noty = function (newSettings) {
                    angular.extend(notySettings, newSettings);
                    return noty(notySettings);
                };

                return {
                    show: function (message, type) {
                        _noty({text: message || settings.text, type: type || settings.type});
                    },

                    showAlert: function (message) {
                        _noty({text: message || settings.text, type: "alert"});
                    },

                    showSuccess: function (message) {
                        _noty({text: message || settings.text, type: "success"});
                    },

                    showError: function (message) {
                        _noty({text: message, type: "error"});
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