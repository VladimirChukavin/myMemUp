(function() {
	'use strict';

	let iframeList = {
		iframe_3: {
			src: 'http://improve-memory.net/shult/1/?iframe=1',
			height: '888'
		},
		iframe_4: {
			src:'http://improve-memory.net/smb_pairs/1/?iframe=1',
			height: '774'
		},
		iframe_6: {
			src: 'http://improve-memory.net/matches/1/?iframe=1',
			height: '837'
		},
		iframe_7: {
			src: 'http://improve-memory.net/letters/1/?iframe=1', 
			height: '698'
		},
		iframe_10: {
			src: 'http://improve-memory.net/dices/1/?iframe=1', 
			height: '711'
		},
		iframe_11: {
			src: 'http://improve-memory.net/items/1/?iframe=1', 
			height: '1146'
		},
		iframe_15: {
			src: 'http://improve-memory.net/chess/9/?iframe=1', 
			height: '868'
		},
		iframe_16: {
			src: 'http://improve-memory.net/cells/1/?iframe=1', 
			height: '734'
		},
		iframe_17: {
			src: 'http://improve-memory.net/dices/2/?iframe=1', 
			height: '801'
		},
		iframe_18: {
			src: 'http://improve-memory.net/cells/2/?iframe=1', 
			height: '672'
		},
		iframe_20: {
			src: 'http://improve-memory.net/smb_pairs/2/?iframe=1', 
			height: '554'
		},
		iframe_22: {
			src: 'http://improve-memory.net/chess/10/?iframe=1', 
			height: '706'
		},
		iframe_25: {
			src: 'http://improve-memory.net/words_pairs/1/?iframe=1', 
			height: '786'
		},
		iframe_26: {
			src: 'http://improve-memory.net/words_pairs/2/?iframe=1', 
			height: '732'
		},
		iframe_27: {
			src: 'http://improve-memory.net/words_pairs/3/?iframe=1', 
			height: '732'
		},
		iframe_28: {
			src: 'http://improve-memory.net/chess/11/?iframe=1', 
			height: '652'
		},
		iframe_31: {
			src: 'http://improve-memory.net/words_list/1/?iframe=1', 
			height: '828'
		},
		iframe_32: {
			src: 'http://improve-memory.net/words_list/3/?iframe=1', 
			height: '756'
		},
		iframe_34: {
			src: 'http://improve-memory.net/words_pairs/4/?iframe=1', 
			height: '696'
		},
		iframe_35: {
			src: 'http://improve-memory.net/words_pairs/5/?iframe=1', 
			height: '778'
		},
		iframe_37: {
			src: 'http://improve-memory.net/words_list/4/?iframe=1', 
			height: '756'
		},
		iframe_38: {
			src: 'http://improve-memory.net/items/2/?iframe=1', 
			height: '804'
		},
		iframe_40: {
			src: 'http://improve-memory.net/words_dict/1/?iframe=1', 
			height: '792'
		},
		iframe_41: {
			src: 'http://improve-memory.net/cells/3/?iframe=1', 
			height: '744'
		},
		iframe_42: {
			src: 'http://improve-memory.net/shult/2/?iframe=1', 
			height: '798'
		},
		iframe_43: {
			src: 'http://improve-memory.net/matches/2/?iframe=1', 
			height: '639'
		},
		iframe_44: {
			src: 'http://improve-memory.net/dices/3/?iframe=1', 
			height: '621'
		},
		iframe_45: {
			src: 'http://improve-memory.net/matches/3/?iframe=1', 
			height: '693'
		},
		iframe_46: {
			src: 'http://improve-memory.net/words_dict/3/?iframe=1', 
			height: '756'
		},
		iframe_47: {
			src: 'http://improve-memory.net/chess/12/?iframe=1', 
			height: '724'
		},
		iframe_51: {
			src: 'http://improve-memory.net/words_list/2/?iframe=1', 
			height: '810'
		},
		iframe_52: {
			src: 'http://improve-memory.net/words_list/5/?iframe=1', 
			height: '738'
		},
		iframe_53: {
			src: 'http://improve-memory.net/words_dict/2/?iframe=1', 
			height: '756'
		},
		iframe_55: {
			src: 'http://improve-memory.net/words_dict/4/?iframe=1', 
			height: '774'
		},
		iframe_56: {
			src: 'http://improve-memory.net/words_list/6/?iframe=1', 
			height: '774'
		},
		iframe_57: {
			src: 'http://improve-memory.net/smb_pairs/3/?iframe=1', 
			height: '518'
		},
		iframe_58: {
			src: 'http://improve-memory.net/words_dict/5/?iframe=1', 
			height: '738'
		},
		iframe_61: {
			src: 'http://improve-memory.net/dices/4/?iframe=1', 
			height: '639'
		},
		iframe_62: {
			src: 'http://improve-memory.net/maps/1/?iframe=1', 
			height: '764'
		},
		iframe_63: {
			src: 'http://improve-memory.net/matches/4/?iframe=1', 
			height: '603'
		},
		iframe_64: {
			src: 'http://improve-memory.net/chess/1/?iframe=1', 
			height: '616'
		},
		iframe_65: {
			src: 'http://improve-memory.net/letters/2/?iframe=1', 
			height: '633'
		},
		iframe_66: {
			src: 'http://improve-memory.net/chess/2/?iframe=1', 
			height: '742'
		},
		iframe_71: {
			src: 'http://improve-memory.net/chess/3/?iframe=1', 
			height: '688'
		},
		iframe_72: {
			src: 'http://improve-memory.net/maps/2/?iframe=1', 
			height: '782'
		},
		iframe_73: {
			src: 'http://improve-memory.net/words_list/7/?iframe=1', 
			height: '828'
		},
		iframe_74: {
			src: 'http://improve-memory.net/shult/3/?iframe=1', 
			height: '837'
		},
		iframe_75: {
			src: 'http://improve-memory.net/chess/5/?iframe=1', 
			height: '652'
		},
		iframe_76: {
			src: 'http://improve-memory.net/words_list/8/?iframe=1', 
			height: '778'
		},
		iframe_78: {
			src: 'http://improve-memory.net/matches/5/?iframe=1', 
			height: '693'
		},
		iframe_80: {
			src: 'http://improve-memory.net/letters/3/?iframe=1', 
			height: '700'
		},
		iframe_82: {
			src: 'http://improve-memory.net/chess/6/?iframe=1', 
			height: '742'
		},
		iframe_83: {
			src: 'http://improve-memory.net/letters/4/?iframe=1', 
			height: '700'
		},
		iframe_84: {
			src: 'http://improve-memory.net/words_dict/6/?iframe=1', 
			height: '756'
		},
		iframe_85: {
			src: 'http://improve-memory.net/words_dict/7/?iframe=1', 
			height: '792'
		},
		iframe_87: {
			src: 'http://improve-memory.net/chess/4/?iframe=1', 
			height: '909'
		},
		iframe_88: {
			src: 'http://improve-memory.net/letters/5/?iframe=1', 
			height: '833'
		},
		iframe_90: {
			src: 'http://improve-memory.net/faces/1/?iframe=1', 
			height: '873'
		},
		iframe_93: {
			src: 'http://improve-memory.net/faces/2/?iframe=1', 
			height: '945'
		},
		iframe_94: {
			src: 'http://improve-memory.net/items/3/?iframe=1', 
			height: '804'
		},
		iframe_96: {
			src: 'http://improve-memory.net/faces/3/?iframe=1', 
			height: '855'
		},
		iframe_97: {
			src: 'http://improve-memory.net/items/4/?iframe=1', 
			height: '927'
		},
		iframe_98: {
			src: 'http://improve-memory.net/words_dict/8/?iframe=1', 
			height: '778'
		},
		iframe_100: {
			src: 'http://improve-memory.net/maps/3/?iframe=1', 
			height: '782'
		},
		iframe_102: {
			src: 'http://improve-memory.net/maps/4/?utm_source=qr&utm_medium=qr?iframe=1', 
			height: '764'
		},
		iframe_103: {
			src: 'http://improve-memory.net/items/5/?iframe=1', 
			height: '855'
		},
		iframe_106: {
			src: 'http://improve-memory.net/dices/5/?iframe=1', 
			height: '621'
		},
		iframe_108: {
			src: 'http://improve-memory.net/chess/7/?iframe=1', 
			height: '688'
		},
		iframe_109: {
			src: 'http://improve-memory.net/matches/6/?iframe=1', 
			height: '675'
		},
		iframe_110: {
			src: 'http://improve-memory.net/words_list/9/?utm_source=qr&utm_medium=qr?iframe=1', 
			height: '834'
		},
		iframe_112: {
			src: 'http://improve-memory.net/cells/4/?iframe=1', 
			height: '883'
		},
		iframe_113: {
			src: 'http://improve-memory.net/words_dict/9/?iframe=1', 
			height: '796'
		},
		iframe_115: {
			src: 'http://improve-memory.net/maps/5/?iframe=1', 
			height: '854'
		},
		iframe_116: {
			src: 'http://improve-memory.net/faces/4/?iframe=1', 
			height: '855'
		},
		iframe_118: {
			src: 'http://improve-memory.net/faces/5/?iframe=1', 
			height: '891'
		},
		iframe_119: {
			src: 'http://improve-memory.net/chess/8/?iframe=1', 
			height: '891'
		},
		iframe_121: {
			src: 'http://improve-memory.net/matches/7/?iframe=1', 
			height: '639'
		},
		iframe_122: {
			src: 'http://improve-memory.net/cells/5/?iframe=1', 
			height: '845'
		},
		iframe_123: {
			src: 'http://improve-memory.net/words_list/10/?iframe=1', 
			height: '798'
		},
		iframe_124: {
			src: 'http://improve-memory.net/items/6/?iframe=1', 
			height: '891'
		},
		iframe_128: {
			src: 'http://improve-memory.net/words_dict/10/?iframe=1', 
			height: '778'
		},
		iframe_130: {
			src: 'http://improve-memory.net/shult/4/?iframe=1', 
			height: '819'
		},
		iframe_131: {
			src: 'http://improve-memory.net/faces/6/?iframe=1', 
			height: '855'
		},
		iframe_133: {
			src: 'http://improve-memory.net/words_dict/11/?iframe=1', 
			height: '778'
		},
		iframe_134: {
			src: 'http://improve-memory.net/dices/6/?iframe=1', 
			height: '585'
		},
		iframe_135: {
			src: 'http://improve-memory.net/faces/7/?iframe=1', 
			height: '873'
		}
	};

	let linkAll = [...document.querySelectorAll('[data-link]')];
	
	hideDiv();

	/**
	 * Обработчик клика, по нажатию открывает или скрывает блоки контента
	 */
	linkAll.forEach(item => {
		item.addEventListener('click', () => {
			let valAttr = item.getAttribute('data-link');
			let contBlock = document.querySelector('[data-practice="' + valAttr + '"]');
			contBlock.classList.toggle('hidden');
			let flag = contBlock.classList.contains('hidden');
			
			hideDiv(valAttr);

			if (valAttr.indexOf('iframe') != -1) {
				if (!flag) {
					hideIframe(!flag);
					openIframe(valAttr, contBlock);
				} else {
					hideIframe(flag);
				}
			} else {
				hideIframe(!flag);
			}
		});
	});

	/**
	 * Назначает всем div, чей атрибут data-practice не равен val, класс hidden,
	 * то есть скрывает все div
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

	/**
	 * Открывает iframe
	 * @param  {string} val   значение атрибута data-link
	 * @param  {string} block значение переменной contBlock
	 * @return {object}
	 */
	function openIframe(val, block) {
		let frame = document.createElement('iframe');
		let p = document.createElement('p');
		
		frame.className = 'iframe';
		p.innerHTML = 'Ваш браузер не поддерживает фреймы!';

		for (let item in iframeList) {
			if (item == val) {
				frame.src = iframeList[val].src;
				frame.width = '700';
				frame.height = iframeList[val].height;
			}
		}
		
		frame.appendChild(p);
		block.appendChild(frame);
	}

	/**
	 * Закрывает iframe
	 * @param  {string} out значение переменной flag
	 * @return {object}
	 */
	function hideIframe(out) {
		let frame = document.querySelector('iframe');
		
		if (frame) {
			let prntElem = frame.parentElement;
			if (out) prntElem.removeChild(frame);
		}
	}
})();