(function() {
	jQuery(document).ready(function() {
		jQuery("#rarerity").change(function() {
			var r = $(this).val();
			jQuery("#card")
				.removeClass("status_rarerity_ur status_rarerity_sr status_rarerity_r status_rarerity_uc status_rerarity_c")
				.addClass("status_rarerity_" + r);
		});

		jQuery("#name").change(function() {
			jQuery(".name").text(jQuery(this).val());
		});

		jQuery("#cost").change(function() {
			jQuery(".cost").text(jQuery(this).val());
		});

		jQuery("#level").change(function() {
			jQuery(".level").text(jQuery(this).val());
		});

		jQuery("#att").change(function() {
			jQuery(".status_att").text(jQuery(this).val());
		});
		jQuery("#int").change(function() {
			jQuery(".status_int").text(jQuery(this).val());
		});
		jQuery("#sdef").change(function() {
			jQuery(".status_sdef").text(jQuery(this).val());
		});
		jQuery("#bdef").change(function() {
			jQuery(".status_bdef").text(jQuery(this).val());
		});
		jQuery("#wdef").change(function() {
			jQuery(".status_wdef").text(jQuery(this).val());
		});
		jQuery("#rdef").change(function() {
			jQuery(".status_rdef").text(jQuery(this).val());
		});
		jQuery("#speed").change(function() {
			jQuery(".status_speed").text(jQuery(this).val());
		});


		jQuery("#rarerity").change();
		jQuery("#name").change();
		jQuery("#cost").change();
		jQuery("#level").change();
		jQuery("#att").change();
		jQuery("#int").change();
		jQuery("#sdef").change();
		jQuery("#bdef").change();
		jQuery("#wdef").change();
		jQuery("#rdef").change();
		jQuery("#speed").change();
	});
})();
