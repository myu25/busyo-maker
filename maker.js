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

		jQuery("#skillName1").change(function() {
			jQuery(".skillName1").text(jQuery(this).val());
		});
		jQuery("#skill1").change(function() {
			jQuery(".skill1").text(jQuery(this).val());
		});
		jQuery("#skillName2").change(function() {
			jQuery(".skillName2").text(jQuery(this).val());
		});
		jQuery("#skill2").change(function() {
			jQuery(".skill2").text(jQuery(this).val());
		});
		jQuery("#skill3").change(function() {
			jQuery(".skill3").text(jQuery(this).val());
		});
		jQuery("#skillName3").change(function() {
			jQuery(".skillName3").text(jQuery(this).val());
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
		jQuery("#skillName1").change();
		jQuery("#skill1").change();
		jQuery("#skillName2").change();
		jQuery("#skill2").change();
		jQuery("#skillName3").change();
		jQuery("#skill3").change();
	});
})();
