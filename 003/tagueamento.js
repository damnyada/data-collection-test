$(document).ready(function() {
	buttons = $('#botoes button');
	strCount = '';
	strShow = false;

	$(buttons).on('click', function() {
		$(this).addClass('counted');
		strCount += this.innerText+', ';

		if (buttons.length == $('.counted').length && strShow == false) {
			strShow = true;
			strCount = strCount.slice(0, -2);
			console.log(strCount);
		}

		var text = this.innerText.split('-')[2];
		console.log(text);
	});
});


// Todos os botões da página foram armazenados na variável buttons, e em cada um destes botões foi adicionado um listener de cliques
// para que eles recebessem a classe "counted" após o primeiro evento.

// A variável strCount, na sequência, armazenou numa string os valores de todos os botões já clicados. Na primeira vez em a quantidade
// de botões "counted" seja equivalente ao total de botões, a string strCount será tratada para retirar da última vírgula e em seguida
// será retornada ao console.

// Além disso, cada clique de botão captura o primeiro trecho de seu respectivo valor (tudo o houver após o segundo hífen) e retorna num console.log.