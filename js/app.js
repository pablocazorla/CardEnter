// APP
var resources = ['gold','stone','food','culture','stability','militar','PV','worker'];

var blueCardsModel = {
	inputs: [
		{
			name: 'title',
			label: 'Title',
			type: 'text'
		},
		{
			name: 'reward',
			label: 'Reward',
			type: 'selectNumber',
			options: resources,
			min: -9,
			max: 20
		},
		{
			name: 'cost',
			label: 'Cost',
			type: 'selectNumber',
			options: resources,
			min: -9,
			max: 9
		},
		{
			name: 'workers',
			label: 'Workers',
			type: 'selectNumber',
			options: ['PV'],
			min: -9,
			max: 9
		},
		{
			name: 'age',
			label: 'Age',
			type: 'number',
			min: 0,
			max: 4
		}
	],
	render: (o) => {
		var s = {
			...o
		};
		s.color = 'blue';
		s.title = Utils.capitalize(o.title);

		s.image = Utils.toUrl(o.title);

		return s;
	},
	toTable: (o) => {
		var tr = [];

		var order = ['title',	'reward',	'cost',	'workers',	'age'];

		order.forEach(ord => {
			tr.push({
				td: o[ord]
			});
		});
		return {tr};
	}
};

var redCardsModel = {
	inputs: [
		{
			name: 'title',
			label: 'Title',
			type: 'text'
		},
		{
			name: 'reward',
			label: 'Reward',
			type: 'selectNumber',
			options: resources,
			min: -9,
			max: 9
		},
		{
			name: 'attack',
			label: 'Attack',
			type: 'number',
			min: 0,
			max: 9
		},
		{
			name: 'cost',
			label: 'Cost',
			type: 'selectNumber',
			options: resources,
			min: -9,
			max: 9
		},
		{
			name: 'workers',
			label: 'Workers',
			type: 'selectNumber',
			options: ['PV'],
			min: -9,
			max: 9
		},
		{
			name: 'age',
			label: 'Age',
			type: 'number',
			min: 0,
			max: 4
		}
	],
	render: (o) => {
		var s = {
			...o
		};
		s.color = 'red';
		s.title = Utils.capitalize(o.title);

		s.image = Utils.toUrl(o.title);

		return s;
	},
	toTable: (o) => {
		var tr = [];

		var order = ['title',	'reward',	'attack', 'cost',	'workers',	'age'];

		order.forEach(ord => {
			tr.push({
				td: o[ord]
			});
		});
		return {tr};
	}
};

var blackCardsModel = {
	inputs: [
		{
			name: 'history',
			label: 'Hitory moment',
			type: 'text'
		},
		{
			name: 'title',
			label: 'Title',
			type: 'text'
		},
		{
			name: 'cost',
			label: 'Cost',
			type: 'selectNumber',
			options: resources,
			min: -20,
			max: 0
		},
		{
			name: 'pvLost',
			label: 'PV Lost',
			type: 'number',
			min: -20,
			max: 0
		},
		{
			name: 'age',
			label: 'Age',
			type: 'number',
			min: 0,
			max: 4
		}
	],
	render: (o) => {
		var s = {
			...o
		};
		s.color = 'black';
		s.title = Utils.capitalize(o.title);

		s.image = Utils.toUrl(o.title);

		return s;
	},
	toTable: (o) => {
		var tr = [];

		var order = ['history', 'title',	'cost',	'pvLost', 'age'];

		order.forEach(ord => {
			tr.push({
				td: o[ord]
			});
		});
		return {tr};
	}
};

var greyCardsModel = {
	inputs: [
		{
			name: 'history',
			label: 'Hitory moment',
			type: 'text'
		},
		{
			name: 'title',
			label: 'Title',
			type: 'text'
		},
		{
			name: 'age',
			label: 'Age',
			type: 'number',
			min: 0,
			max: 4
		}
	],
	render: (o) => {
		var s = {
			...o
		};
		s.color = 'grey';
		s.title = Utils.capitalize(o.title);

		s.prize = ['culture','food','stone'];

		s.image = Utils.toUrl(o.title);

		return s;
	},
	toTable: (o) => {
		var tr = [];

		var order = ['history', 'title', 'age'];

		order.forEach(ord => {
			tr.push({
				td: o[ord]
			});
		});
		return {tr};
	}
};
var brownCardsModel = {
	inputs: [
		{
			name: 'history',
			label: 'Hitory moment',
			type: 'text'
		},
		{
			name: 'title',
			label: 'Title',
			type: 'text'
		},
		{
			name: 'architects',
			label: 'Architects',
			type: 'selectNumber',
			options: ['stone'],
			min: -9,
			max: 9
		},
		{
			name: 'pv',
			label: 'PV',
			type: 'number',
			min: 0,
			max: 12
		},
		{
			name: 'reward',
			label: 'Reward',
			type: 'selectNumber',
			options: resources,
			min: -9,
			max: 9
		},
		{
			name: 'text',
			label: 'Text',
			type: 'textarea'
		},
		{
			name: 'age',
			label: 'Age',
			type: 'number',
			min: 0,
			max: 4
		}
	],
	render: (o) => {
		var s = {
			...o
		};
		s.color = 'brown';
		s.title = Utils.capitalize(o.title);

		s.image = Utils.toUrl(o.title);

		return s;
	},
	toTable: (o) => {
		var tr = [];

		var order = ['history', 'title', 'architects', 'pv', 'reward', 'textarea', 'age'];

		order.forEach(ord => {
			tr.push({
				td: o[ord]
			});
		});
		return {tr};
	}
};

//
var modelData = brownCardsModel;