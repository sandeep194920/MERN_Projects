function check_locker() {
	let data = {
		c: locker.c,
		//unique: locker.unique,
		type: locker.type,
		title: locker.title,
		//conversions_required: locker.conversions_required
	};
	$.ajax({
		url: '/get_redirect_url.php',
		data: data,
		success: function(res) {
			if (locker.type == 'reward') {
				if (Number.isInteger(+res)) {
					$('#rl_total_points').text(res);
					setTimeout(check_locker, 10000);
				} else {
					$('#rl_btn').removeClass("disabled", false);
					$('#rl_btn').attr("href", res);
				}
			} else {
				if (res == '0') {
					setTimeout(check_locker, 10000);
				} else {
					$('.unchecked').addClass('d-none');
					$('.checked').removeClass('d-none');
					$('.checked a').attr("href", res);
				}
			}
		}
	});
}

function get_offers() {
	let data = locker;
	$.ajax({
		url: '/getoffers.php',
		data: data,
		async: false,
		beforeSend: function() {
			$('.container_theme .unchecked').html('<img class="loader" src="/images/loader.svg">');
		},
		success: function(res) {
			offers = JSON.parse(res);
			// let offers_count = locker.offers_count;
			offers = offers.slice(0, locker.offers_count);
			setTimeout(check_locker, 10000);
		}
	});
}