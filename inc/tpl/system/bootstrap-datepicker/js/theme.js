/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	1.4.1
*/

window.theme = {};

// Datepicker
(function(theme, $) {

	theme = theme || {};

	var instanceName = '__datepicker';

	var PluginDatePicker = function($el, opts) {
		return this.initialize($el, opts);
	};

	PluginDatePicker.defaults = {
	};

	PluginDatePicker.prototype = {
		initialize: function($el, opts) {
			if ( $el.data( instanceName ) ) {
				return this;
			}

			this.$el = $el;

			this
				.setVars()
				.setData()
				.setOptions(opts)
				.build();

			return this;
		},

		setVars: function() {
			this.skin = this.$el.data( 'plugin-skin' );

			return this;
		},

		setData: function() {
			this.$el.data(instanceName, this);

			return this;
		},

		setOptions: function(opts) {
			this.options = $.extend( true, {}, PluginDatePicker.defaults, opts );

			return this;
		},

		build: function() {
			this.$el.datepicker( this.options );

			if ( !!this.skin ) {
				this.$el.data('datepicker').picker.addClass( 'datepicker-' + this.skin );
			}

			return this;
		}
	};

	// expose to scope
	$.extend(theme, {
		PluginDatePicker: PluginDatePicker
	});

	// jquery plugin
	$.fn.themePluginDatePicker = function(opts) {
		return this.each(function() {
			var $this = $(this);

			if ($this.data(instanceName)) {
				return $this.data(instanceName);
			} else {
				return new PluginDatePicker($this, opts);
			}

		});
	}

}).apply(this, [ window.theme, jQuery ]);


// Datepicker
(function( $ ) {

	'use strict';
	
	if ( $.isFunction($.fn[ 'datepicker' ]) ) {

			
		$(function() {		
			$('[data-plugin-datepicker]').each(function() {				


				var $this = $( this ),
					opts = {
						format: 'yyyy-mm-dd'
					};
				var pluginOptions = $this.data('plugin-options');
				
				if (pluginOptions)
					opts = pluginOptions;							
				$this.themePluginDatePicker(opts);
			});
		
		
		});

	}

}).apply(this, [ jQuery ]);

