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
	let time = 2000;
	let aEl = $(getList()[a]).find('.item');
	let bEl = $(getList()[b]).find('.item');

	let offsetLeft = parseInt(bEl.offset().left) - parseInt(aEl.offset().left);
	let offsetTop = parseInt(bEl.offset().top) - parseInt(aEl.offset().top);
	aEl.animate({top: '+=' + offsetTop + 'px', left: '+=' + offsetLeft + 'px'}, time, 'swing');
	bEl.animate({top: '-=' + offsetTop + 'px', left: '-=' + offsetLeft + 'px'}, time, 'swing', () => swapItemsDom(a, b));
}

function swap(a, b) {
	$('').delay(2000).promise().done(() => {
		console.log(a, b);
		var temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	});

	swapItemsAnimate(a, b);
}

function bubbleSort(a) {
	var swapped;
	do {
		swapped = false;
		for (var i=0; i < a.length-1; i++) {
			if (a[i] > a[i+1]) {
				swap(i, i+1);
				swapped = true;
			}
		}
	} while (swapped);
}

createList(arr);

setTimeout(() => {	
	bubbleSort(arr);
}, 2000);
