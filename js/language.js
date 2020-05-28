/**
 *
 */

function language_ch_select(value){
	switch (value) {
		case "en":
			window.location.href = 'content_en.html';
			break;
		default:
			break;
	}
}

function language_en_select(value){
	switch (value) {
	case "ch":
		window.location.href = 'content_ch.html';
		break;
	default:
		break;
	}
}