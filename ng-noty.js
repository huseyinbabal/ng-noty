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
                    noty: function(settings) {
                        _noty(settings);
                    },
                    show: function (message, type) {
                        _noty({text: message , type: type});
                    },
                    showAlert: function (message) {
                        _noty({text: message, type: "alert"});
                    },

                    showSuccess: function (message) {
                        _noty({text: message, type: "success"});
                    },

                    showError: function (message) {
                        _noty({text: message, type: "error"});
                    },
                    showInfo: function(message) {
                        _noty({text: message, type: "information"})
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