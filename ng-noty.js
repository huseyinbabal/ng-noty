(function (angular, $) {
    return angular.module('ngNoty', []).provider('noty', function () {
        var nottySettings = $.noty.defaults;

        return {
            settings: function(settings) {
                 nottySettings = settings;
            },
            $get: function () {
                var _noty = function (newSettings) {
                    angular.extend(settings, newSettings);
                    return noty(settings);
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