// UTILS
var Utils = {
	capitalize: (string) => {

		var arr = string.split(' ');
		var txt = '';

		arr.forEach(w => {
			txt += ' ' + w.charAt(0).toUpperCase() + w.slice(1);
		});

		return txt.slice(1);
	},
	toUrl: (string) => {
		return string.toLowerCase().replace(/ /g, "-");
	},
	storeJSON: {
		set: (name,json) => {
			if(localStorage){
				var j = typeof json === 'string'? json : JSON.stringify(json);
				localStorage.setItem(name, j);
			}		
		},
		get: (name) => {
			if(localStorage){
				var str = localStorage.getItem(name) || '{}';
				return JSON.parse(str);
			}else{
				return {};
			}
		},
		console: (name) => {
			var j = Utils.storeJSON.get(name);
			if(j.data){
				j.data.forEach(d => {
					delete d.toTable;
				});				
			}
			console.log(name,JSON.stringify(j));
		}
	}
};