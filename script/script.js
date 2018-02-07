(function() {
	'use strict';

	let iframeList = {
		/*<iframe class="iframe" src="http://improve-memory.net/shult/1/?iframe=1" height="888" width="502">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/smb_pairs/1/?iframe=1" height="774" width="410">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/matches/1/?iframe=1" height="837" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/letters/1/?iframe=1" height="698" width="470">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/dices/1/?iframe=1" height="711" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/items/1/?iframe=1" height="1146" width="670">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/9/?iframe=1" height="868" width="410">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/cells/1/?iframe=1" height="734" width="420">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/dices/2/?iframe=1" height="801" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/cells/2/?iframe=1" height="672" width="502">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/smb_pairs/2/?iframe=1" height="554" width="420">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/10/?iframe=1" height="706" width="500">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_pairs/1/?iframe=1" height="786" width="580">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_pairs/2/?iframe=1" height="732" width="580">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_pairs/3/?iframe=1" height="732" width="580">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/11/?iframe=1" height="652" width="500">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/1/?iframe=1" height="828" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/3/?iframe=1" height="756" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_pairs/4/?iframe=1" height="696" width="580">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_pairs/5/?iframe=1" height="778" width="680">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/4/?iframe=1" height="756" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/items/2/?iframe=1" height="804" width="670">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/1/?iframe=1" height="792" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/cells/3/?iframe=1" height="744" width="592">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/shult/2/?iframe=1" height="798" width="502">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/matches/2/?iframe=1" height="639" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/dices/3/?iframe=1" height="621" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/matches/3/?iframe=1" height="693" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/3/?iframe=1" height="756" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/12/?iframe=1" height="724" width="590">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/2/?iframe=1" height="810" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/5/?iframe=1" height="738" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/2/?iframe=1" height="756" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/4/?iframe=1" height="774" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/6/?iframe=1" height="774" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/smb_pairs/3/?iframe=1" height="518" width="470">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/5/?iframe=1" height="738" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/dices/4/?iframe=1" height="639" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/maps/1/?iframe=1" height="764" width="648">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/matches/4/?iframe=1" height="603" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/1/?iframe=1" height="616" width="500">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/letters/2/?iframe=1" height="633" width="559">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/2/?iframe=1" height="742" width="590">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/3/?iframe=1" height="688" width="590">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/maps/2/?iframe=1" height="782" width="648">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/7/?iframe=1" height="828" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/shult/3/?iframe=1" height="837" width="685">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/5/?iframe=1" height="652" width="500">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/8/?iframe=1" height="778" width="680">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/matches/5/?iframe=1" height="693" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/letters/3/?iframe=1" height="700" width="629">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/6/?iframe=1" height="742" width="590">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/letters/4/?iframe=1" height="700" width="699">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/6/?iframe=1" height="756" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/7/?iframe=1" height="792" width="640">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/4/?iframe=1" height="909" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/letters/5/?iframe=1" height="833" width="699">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/faces/1/?iframe=1" height="873" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/faces/2/?iframe=1" height="945" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/items/3/?iframe=1" height="804" width="670">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/faces/3/?iframe=1" height="855" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/items/4/?iframe=1" height="927" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/8/?iframe=1" height="778" width="680">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/maps/3/?iframe=1" height="782" width="648">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/maps/4/?utm_source=qr&utm_medium=qr?iframe=1" height="764" width="648">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/items/5/?iframe=1" height="855" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/dices/5/?iframe=1" height="621" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/7/?iframe=1" height="688" width="590">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/matches/6/?iframe=1" height="675" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/9/?utm_source=qr&utm_medium=qr?iframe=1" height="834" width="700">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/cells/4/?iframe=1" height="883" width="785">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/9/?iframe=1" height="796" width="680">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/maps/5/?iframe=1" height="854" width="648">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/faces/4/?iframe=1" height="855" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/faces/5/?iframe=1" height="891" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/chess/8/?iframe=1" height="891" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/matches/7/?iframe=1" height="639" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/cells/5/?iframe=1" height="845" width="1060">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_list/10/?iframe=1" height="798" width="700">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/items/6/?iframe=1" height="891" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/10/?iframe=1" height="778" width="680">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/shult/4/?iframe=1" height="819" width="685">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/faces/6/?iframe=1" height="855" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/words_dict/11/?iframe=1" height="778" width="680">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/dices/6/?iframe=1" height="585" width="505">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>
<iframe class="iframe" src="http://improve-memory.net/faces/7/?iframe=1" height="873" width="775">
						<p>Ваш браузер не поддерживает фреймы!</p>
					</iframe>*/
	};
	
})();