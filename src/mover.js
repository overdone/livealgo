let arr = [5, 6, 3, 2, 9];

let root = $('#root').addClass('root');

function createList(arr) {
	arr.forEach(item => {
		let cont = $('<div>', {'class': 'itemContainer'});
		let listItem = cont.append($('<div>', {'class': 'item', html: item}));
		root.append(listItem);
	});
}

function getList() {
	return $('#root').find('.itemContainer');
}

function swapItemsDom(a, b) {	
	let aEl = $(getList()[a]).find('.item');
	let bCon = $(getList()[b]);
	let bEl = $(getList()[b]).find('.item');

	if (!aEl || !bEl) return;

	aEl.removeAttr("style");
	bEl.removeAttr("style");

	let tmp = aEl;
	aEl.replaceWith(bEl);
	bCon.append(tmp);
}

function swapItemsAnimate(a, b) {
	let time = 500;
	let aEl = $(getList()[a]).find('.item');
	let bEl = $(getList()[b]).find('.item');

	let offsetLeft = parseInt(bEl.offset().left) - parseInt(aEl.offset().left);
	let offsetTop = parseInt(bEl.offset().top) - parseInt(aEl.offset().top);
	aEl.animate({top: '+=' + offsetTop + 'px', left: '+=' + offsetLeft + 'px'}, time, 'swing');
	bEl.animate({top: '-=' + offsetTop + 'px', left: '-=' + offsetLeft + 'px'}, time, 'swing', () => swapItemsDom(a, b));
}

createList(arr);

setTimeout(() => {	
	swapItemsAnimate(0, 3)
}, 2000);
