(function() {
	'use strict';

	let linkAll = [...document.querySelectorAll('[data-link]')];
	
	linkAll.forEach(item => {
		item.addEventListener('click', () => {
			let valAttr = item.getAttribute('data-link');
			let contBlock = document.querySelector('[data-practice="' + valAttr + '"]');
			hideDiv(valAttr);
			contBlock.classList.toggle('hidden');
		});
	});

	/**
	 * Назначает всем div, чей атрибут data-practice не равен val, класс hidden
	 * @param  {string} val Значение атрибута data-link
	 * @return {object}
	 */
	function hideDiv(val) {
		let divContent = [...document.querySelectorAll('[data-practice]')];
		divContent.forEach(item => {
			if (item.getAttribute('data-practice') != val) {
				item.classList.add('hidden');
			}
		});
	}

	hideDiv();

	let fraTest = {
		practice_3: {
			src: 'http://improve-memory.net/shult/1/?iframe=1',
			height: '888',
			width: '502'
		}
	};
	// console.log(fraTest.practice_3);
	// let x = Object.keys(fraTest);
	// console.log(x);

	function iframeOpenHide(val) {
		let key = val;
		let test = document.querySelector('[data-practice="' + val + '"]');
		// console.log(test);
		let frame = document.createElement('iframe');
		frame.className = 'iframe';
		for (let item in fraTest) {
			if (item == key) {
				console.log(item);
				frame.src = fraTest[key].src;
				frame.height = fraTest[key].height;
				frame.width = fraTest[key].width;
			}
		}
		let p = document.createElement('p');
		p.innerHTML = 'Ваш браузер не поддерживает фреймы!';
		frame.appendChild(p);
		test.appendChild(frame);
		setTimeout(() => {
			test.removeChild(frame);
		}, 10000);
	}

	iframeOpenHide('practice_3');














	let iframeList = {
		practice_3: {
			src: 'http://improve-memory.net/shult/1/?iframe=1',
			height: '888',
			width: '502'
		},
		practice_4: {
			src:'http://improve-memory.net/smb_pairs/1/?iframe=1',
			height: '774',
			width: '410'
		},
		practice_6: {
			src: 'http://improve-memory.net/matches/1/?iframe=1',
			height: '837',
			width: '505'
		},
		practice_7: {
			src: 'http://improve-memory.net/letters/1/?iframe=1', 
			height: '698',
			width: '470'
		},
		practice_8: {
			src: 'http://improve-memory.net/dices/1/?iframe=1', 
			height: '711',
			width: '505'
		},
		practice_10: {
			src: 'http://improve-memory.net/items/1/?iframe=1', 
			height: '1146',
			 width: '670'
		},
		practice_11: {
			src: 'http://improve-memory.net/chess/9/?iframe=1', 
			height: '868',
			width: '410'
		},
		practice_15: {
			src: 'http://improve-memory.net/cells/1/?iframe=1', 
			height: '734',
			width: '420'
		},
		practice_16: {
			src: 'http://improve-memory.net/dices/2/?iframe=1', 
			height: '801',
			width: '505'
		},
		practice_17: {
			src: 'http://improve-memory.net/cells/2/?iframe=1', 
			height: '672',
			width: '502'
		},
		practice_18: {
			src: 'http://improve-memory.net/smb_pairs/2/?iframe=1', 
			height: '554',
			width: '420'
		},
		practice_20: {
			src: 'http://improve-memory.net/chess/10/?iframe=1', 
			height: '706',
			width: '500'
		},
		practice_22: {
			src: 'http://improve-memory.net/words_pairs/1/?iframe=1', 
			height: '786',
			width: '580'
		},
		practice_25: {
			src: 'http://improve-memory.net/words_pairs/2/?iframe=1', 
			height: '732',
			width: '580'
		},
		practice_26: {
			src: 'http://improve-memory.net/words_pairs/3/?iframe=1', 
			height: '732',
			width: '580'
		},
		practice_27: {
			src: 'http://improve-memory.net/chess/11/?iframe=1', 
			height: '652',
			width: '500'
		},
		practice_28: {
			src: 'http://improve-memory.net/words_list/1/?iframe=1', 
			height: '828',
			width: '640'
		},
		practice_31: {
			src: 'http://improve-memory.net/words_list/3/?iframe=1', 
			height: '756',
			width: '640'
		},
		practice_32: {
			src: 'http://improve-memory.net/words_pairs/4/?iframe=1', 
			height: '696',
			width: '580'
		},
		practice_34: {
			src: 'http://improve-memory.net/words_pairs/5/?iframe=1', 
			height: '778',
			width: '680'
		},
		practice_35: {
			src: 'http://improve-memory.net/words_list/4/?iframe=1', 
			height: '756',
			width: '640'
		},
		practice_37: {
			src: 'http://improve-memory.net/items/2/?iframe=1', 
			height: '804',
			width: '670'
		},
		practice_38: {
			src: 'http://improve-memory.net/words_dict/1/?iframe=1', 
			height: '792',
			width: '640'
		},
		practice_40: {
			src: 'http://improve-memory.net/cells/3/?iframe=1', 
			height: '744',
			width: '592'
		},
		practice_41: {
			src: 'http://improve-memory.net/shult/2/?iframe=1', 
			height: '798',
			width: '502'
		},
		practice_42: {
			src: 'http://improve-memory.net/matches/2/?iframe=1', 
			height: '639',
			width: '505'
		},
		practice_43: {
			src: 'http://improve-memory.net/dices/3/?iframe=1', 
			height: '621',
			width: '505'
		},
		practice_44: {
			src: 'http://improve-memory.net/matches/3/?iframe=1', 
			height: '693',
			width: '505'
		},
		practice_45: {
			src: 'http://improve-memory.net/words_dict/3/?iframe=1', 
			height: '756',
			width: '640'
		},
		practice_46: {
			src: 'http://improve-memory.net/chess/12/?iframe=1', 
			height: '724',
			width: '590'
		},
		practice_47: {
			src: 'http://improve-memory.net/words_list/2/?iframe=1', 
			height: '810',
			width: '640'
		},
		practice_51: {
			src: 'http://improve-memory.net/words_list/5/?iframe=1', 
			height: '738',
			width: '640'
		},
		practice_52: {
			src: 'http://improve-memory.net/words_dict/2/?iframe=1', 
			height: '756',
			width: '640'
		},
		practice_53: {
			src: 'http://improve-memory.net/words_dict/4/?iframe=1', 
			height: '774',
			width: '640'
		},
		practice_55: {
			src: 'http://improve-memory.net/words_list/6/?iframe=1', 
			height: '774',
			width: '640'
		},
		practice_56: {
			src: 'http://improve-memory.net/smb_pairs/3/?iframe=1', 
			height: '518',
			width: '470'
		},
		practice_57: {
			src: 'http://improve-memory.net/words_dict/5/?iframe=1', 
			height: '738',
			width: '640'
		},
		practice_58: {
			src: 'http://improve-memory.net/dices/4/?iframe=1', 
			height: '639',
			width: '505'
		},
		practice_61: {
			src: 'http://improve-memory.net/maps/1/?iframe=1', 
			height: '764',
			width: '648'
		},
		practice_62: {
			src: 'http://improve-memory.net/matches/4/?iframe=1', 
			height: '603',
			width: '505'
		},
		practice_63: {
			src: 'http://improve-memory.net/chess/1/?iframe=1', 
			height: '616',
			width: '500'
		},
		practice_64: {
			src: 'http://improve-memory.net/letters/2/?iframe=1', 
			height: '633',
			width: '559'
		},
		practice_65: {
			src: 'http://improve-memory.net/chess/2/?iframe=1', 
			height: '742',
			width: '590'
		},
		practice_66: {
			src: 'http://improve-memory.net/chess/3/?iframe=1', 
			height: '688',
			width: '590'
		},
		practice_71: {
			src: 'http://improve-memory.net/maps/2/?iframe=1', 
			height: '782',
			width: '648'
		},
		practice_72: {
			src: 'http://improve-memory.net/words_list/7/?iframe=1', 
			height: '828',
			width: '640'
		},
		practice_73: {
			src: 'http://improve-memory.net/shult/3/?iframe=1', 
			height: '837',
			width: '685'
		},
		practice_74: {
			src: 'http://improve-memory.net/chess/5/?iframe=1', 
			height: '652',
			width: '500'
		},
		practice_75: {
			src: 'http://improve-memory.net/words_list/8/?iframe=1', 
			height: '778',
			width: '680'
		},
		practice_76: {
			src: 'http://improve-memory.net/matches/5/?iframe=1', 
			height: '693',
			width: '505'
		},
		practice_78: {
			src: 'http://improve-memory.net/letters/3/?iframe=1', 
			height: '700',
			width: '629'
		},
		practice_80: {
			src: 'http://improve-memory.net/chess/6/?iframe=1', 
			height: '742',
			width: '590'
		},
		practice_82: {
			src: 'http://improve-memory.net/letters/4/?iframe=1', 
			height: '700',
			width: '699'
		},
		practice_83: {
			src: 'http://improve-memory.net/words_dict/6/?iframe=1', 
			height: '756',
			width: '640'
		},
		practice_84: {
			src: 'http://improve-memory.net/words_dict/7/?iframe=1', 
			height: '792',
			width: '640'
		},
		practice_85: {
			src: 'http://improve-memory.net/chess/4/?iframe=1', 
			height: '909',
			width: '775'
		},
		practice_87: {
			src: 'http://improve-memory.net/letters/5/?iframe=1', 
			height: '833',
			width: '699'
		},
		practice_88: {
			src: 'http://improve-memory.net/faces/1/?iframe=1', 
			height: '873',
			width: '775'
		},
		practice_90: {
			src: 'http://improve-memory.net/faces/2/?iframe=1', 
			height: '945',
			width: '775'
		},
		practice_93: {
			src: 'http://improve-memory.net/items/3/?iframe=1', 
			height: '804',
			width: '670'
		},
		practice_94: {
			src: 'http://improve-memory.net/faces/3/?iframe=1', 
			height: '855',
			width: '775'
		},
		practice_96: {
			src: 'http://improve-memory.net/items/4/?iframe=1', 
			height: '927',
			width: '775'
		},
		practice_97: {
			src: 'http://improve-memory.net/words_dict/8/?iframe=1', 
			height: '778',
			width: '680'
		},
		practice_98: {
			src: 'http://improve-memory.net/maps/3/?iframe=1', 
			height: '782',
			width: '648'
		},
		practice_100: {
			src: 'http://improve-memory.net/maps/4/?utm_source=qr&utm_medium=qr?iframe=1', 
			height: '764',
			width: '648'
		},
		practice_102: {
			src: 'http://improve-memory.net/items/5/?iframe=1', 
			height: '855',
			width: '775'
		},
		practice_103: {
			src: 'http://improve-memory.net/dices/5/?iframe=1', 
			height: '621',
			width: '505'
		},
		practice_106: {
			src: 'http://improve-memory.net/chess/7/?iframe=1', 
			height: '688',
			width: '590'
		},
		practice_108: {
			src: 'http://improve-memory.net/matches/6/?iframe=1', 
			height: '675',
			width: '505'
		},
		practice_109: {
			src: 'http://improve-memory.net/words_list/9/?utm_source=qr&utm_medium=qr?iframe=1', 
			height: '834',
			width: '700'
		},
		practice_110: {
			src: 'http://improve-memory.net/cells/4/?iframe=1', 
			height: '883',
			width: '785'
		},
		practice_112: {
			src: 'http://improve-memory.net/words_dict/9/?iframe=1', 
			height: '796',
			width: '680'
		},
		practice_113: {
			src: 'http://improve-memory.net/maps/5/?iframe=1', 
			height: '854',
			width: '648'
		},
		practice_115: {
			src: 'http://improve-memory.net/faces/4/?iframe=1', 
			height: '855',
			width: '775'
		},
		practice_116: {
			src: 'http://improve-memory.net/faces/5/?iframe=1', 
			height: '891',
			width: '775'
		},
		practice_118: {
			src: 'http://improve-memory.net/chess/8/?iframe=1', 
			height: '891',
			width: '775'
		},
		practice_119: {
			src: 'http://improve-memory.net/matches/7/?iframe=1', 
			height: '639',
			width: '505'
		},
		practice_121: {
			src: 'http://improve-memory.net/cells/5/?iframe=1', 
			height: '845',
			width: '1060'
		},
		practice_122: {
			src: 'http://improve-memory.net/words_list/10/?iframe=1', 
			height: '798',
			width: '700'
		},
		practice_123: {
			src: 'http://improve-memory.net/items/6/?iframe=1', 
			height: '891',
			width: '775'
		},
		practice_124: {
			src: 'http://improve-memory.net/words_dict/10/?iframe=1', 
			height: '778',
			width: '680'
		},
		practice_128: {
			src: 'http://improve-memory.net/shult/4/?iframe=1', 
			height: '819',
			width: '685'
		},
		practice_130: {
			src: 'http://improve-memory.net/faces/6/?iframe=1', 
			height: '855',
			width: '775'
		},
		practice_131: {
			src: 'http://improve-memory.net/words_dict/11/?iframe=1', 
			height: '778',
			width: '680'
		},
		practice_133: {
			src: 'http://improve-memory.net/dices/6/?iframe=1', 
			height: '585',
			width: '505'
		},
		practice_134: {
			src: 'http://improve-memory.net/faces/7/?iframe=1', 
			height: '873',
			width: '775'
		}
	};
	
})();