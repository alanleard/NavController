var win = {};
var currentWin = null;

function open(e){
	var arg = e.source?e.source.id:e;
	if(arg != currentWin){
		if(!win[arg]){
			win[arg]={};
			win[arg].obj = Alloy.createController(arg).getView();
			win[arg].persist = win[arg].obj.persist?win[arg].obj.persist:false;
			$.container.add(win[arg].obj);
		} else {
			win[arg].obj.show();
		}
		
		if(currentWin){
			if(win[currentWin].persist){
				win[currentWin].obj.hide();
			} else {
				$.container.remove(win[currentWin].obj);
				win[currentWin] = null;
			}
			currentWin = arg;
		} else {
			currentWin = arg;
		}
		
	}
}
exports.open = open;

function select(e){
	e.source.backgroundColor = 'blue';
	e.source.color = '#fff';
}

function deselect(e){
	e.source.backgroundColor = '#fff'
	e.source.color = '#000';
}

$.nav.open();
open('window1');
