// VM
;(function(modelData){

	var inputVM = function(data){
		var vm = {
			...data,
			isText: data.type === 'text',
			isSelect: data.type === 'select',
			isNumber: data.type === 'number',
			isSelectNumber: data.type === 'selectNumber',
			isTextarea: data.type === 'textarea',
			val: ko.observable(data.type === 'number' ? data.min : (data.type === 'select' ? data.options[0] : ''))

		};
		if(data.options){
			vm.optionsData = data.options.map(op => {
				return {
					opVal: op
				}
			});
		}
		if(data.type === 'selectNumber'){
			vm.num = ko.observable(0);
			vm.inProduction = ko.observable(false);
			vm.op = ko.observable(data.options[0]);
			vm.optionsData = data.options.map(op => {
				return {
					opVal: op
				}
			});
		}

		vm.resources = ['gold','stone','food','culture','militar','attack','stability','PV','worker','architect'].map(s => {
			return {
				res:s,
				addResource: () => {
					var txt = vm.val().trim() + ' [' + s + '] ';
					vm.val(txt);
				}
			};
		});


		vm.addNewLine = () => {
			var txt = vm.val().trim() + '|';
			vm.val(txt);
		};
		


		vm.addSelNum = () => {
			var txt = vm.val();
			var inProd = vm.inProduction() ? ' prod' : '';
			var nexus = txt === '' ? '' : ', ';
			txt += nexus + vm.num() + ' ' + vm.op() + inProd;
			vm.val(txt);
		};
		vm.clear = () => {
			vm.val('');
		};

		return vm;
	};

	var VModel = function(){
		var inputList = modelData.inputs;

		Utils.storeJSON.console('storedData');

		var storedData = Utils.storeJSON.get('storedData');

		if(!storedData.data){
			storedData.data = [];
		}

		var toTable = storedData.data.map(d => {
			if(d.toTable){
				return d.toTable;
			}else{
				return modelData.toTable(d);
			}
		});

		toTable.reverse();



		var vm = {
			listModel: ko.observableArray(),
			columns: ko.observableArray(),
			table: ko.observableArray(toTable),
			enterJSON: ko.observable(''),
			enterJSONvisible: ko.observable(false)
		};
		inputList.forEach(m => {
			vm.columns.push({
				tcolum: m.name
			});
			var inp = inputVM(m);
			vm.listModel.push(inp);
		});

		vm.showEnterJSON = () => {
			vm.enterJSONvisible(true);
		}
		vm.hideEnterJSON = () => {
			vm.enterJSONvisible(false);
		}

		vm.enterJSONacc = () => {
			var txt = vm.enterJSON();
			Utils.storeJSON.set('storedData',txt);
		};



		vm.add = () => {
			var inputs = vm.listModel();

			var o = {};
			var tr = [];

			inputList.forEach((m,k) => {
				var val = inputs[k].val();
				o[m.name] = val;
				tr.push({
					td: val
				});
			});

			var nowTable = vm.table();

			nowTable.reverse();
			nowTable.push({tr});
			nowTable.reverse();
			vm.table(nowTable);


			var s = modelData.render(o);

			s.toTable = {tr};

			storedData.data.push(s);

			Utils.storeJSON.set('storedData',storedData);

		};

		return vm;
	};




	ko.applyBindings(VModel, document.getElementById('car-enter'));
})(modelData);