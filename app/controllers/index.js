//****MULTI WINDOW NAV CONTROLLER USE STATIC MULTI WINDOWS******
// function open(e){ 
	// var arg = e.source.id	
	// if(Alloy.Globals.win[arg]){
		// if(Alloy.Globals.win[arg].visible == false){
			// Alloy.Globals.win[arg].show();
			// Alloy.Globals.win[Alloy.Globals.currentWin].hide();
			// Alloy.Globals.currentWin = arg;
		// }
	// } else {
		// Alloy.Globals.win[arg] = Alloy.createController(arg).getView();
		// Alloy.Globals.win[arg].open();
		// Alloy.Globals.win[arg].visible = true;
		// Alloy.Globals.win[Alloy.Globals.currentWin].hide();
		// Alloy.Globals.currentWin = arg;
	// }
// }

// ****MULTI WINDOW NAV CONTROLLER USING SINGLE WINDOWS******
// function open(e){
	// var arg = e.source.id
	// if(arg != Alloy.Globals.currentWin){
		// Alloy.Globals.win[arg] = Alloy.createController(arg).getView();
		// Alloy.Globals.win[arg].open();
		// Alloy.Globals.win[Alloy.Globals.currentWin].close();
		// Alloy.Globals.win[Alloy.Globals.currentWin] = null;
		// Alloy.Globals.currentWin = arg;
	// }
// }

//*****SINGLE NAV CONTROLLER WINDOW AND VIEWS********

var win = {};
var currentWin = null;

function open(e){
	var arg = e.source?e.source.id:e;
	if(arg != currentWin){
		win[arg] = Alloy.createController(arg).getView();
		
		$.container.add(win[arg]);
		if(currentWin){
			$.container.remove(win[currentWin]);
			win[currentWin] = null;
		}
		currentWin = arg;
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

$.index.open();
open('window1');
