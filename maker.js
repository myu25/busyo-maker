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

		jQuery("#rarerity").change();
		jQuery("#name").change();
		jQuery("#cost").change();
	});
})();
