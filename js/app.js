SUITS = ['club', 'diamond', 'heart', 'spade'];
FACES = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
OLDMAID = 'joker';

Vue.component('om-modal', {
	props: ['modaltitle'],
	template: '#om-modal-template'
})

Vue.component('om-player', {
	props: ['player'],
	template: '#om-player-template'
})

var game = new Vue ({
	el: '#om-game',
	data: {
		showOptionsModal: true,
		players: [
			{ name: 'Player 1', hand: [] }, 
			{ name: 'Player 2', hand: [] }, 
			{ name: 'Player 3', hand: [] }, 
			{ name: 'Player 4', hand: [] }, 
		],
		deck: buildDeck()
	},
	created: function() {
		var dealto = 0;
		var cardIndex;
		var card; 

		while(this.deck.length) {
			if(dealto == this.players.length) {
				dealto = 0;
			}

			cardIndex = Math.floor(Math.random()*this.deck.length);

			this.players[dealto].hand.push(this.deck[cardIndex]);
			this.deck.splice(cardIndex,1);

			dealto++;
		}
	}
})

function buildDeck() {
	var deck = [];

	for(i=0; i < SUITS.length; i++) {
		for(j=0; j < FACES.length; j++) {
			deck.push({suit: SUITS[i], face: FACES[j], suitImg: "/images/" + SUITS[i] + ".png" });
		}
	}
	deck.push({suit: OLDMAID, suitImg: "/images/" + OLDMAID + ".jpg" });

	return deck;		
}