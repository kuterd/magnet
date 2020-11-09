//TODO: Burası komple serverside a

function ScoreManager() {
	var scoreData = [];
	
	this.maxScore = 0;	
	
	for(var i = 0; i < 4; i++) {
		scoreData.push({i: i, score:1});		
	}
		
	this.add = function(i) {
		if(++(scoreData[i].score) > this.maxScore) {
			this.maxScore = scoreData[i].score;
		}
	};
	
	this.getSorted = function() {
		var sdClone = scoreData.slice(0);
		
		console.log("after clone: " + scoreData.length);

		sdClone.sort(function(a, b) {
			return a.score > b.score;
		});

		console.log("after sort: " + scoreData.length);

		return sdClone.map(function(a) {
			return a.i;
		});
	};
}

module.exports = ScoreManager;
