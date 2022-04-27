const fs = require('fs');

module.exports = {
	archivo: 'tareas.json',

	read: function () {
		return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
	},

	list: function (array) {
		if (array === undefined) {
			array = this.read();
		} 
		array.forEach((tarea, indice) => {
			console.log((indice + 1) + '. ' + tarea.titulo + ' - ' + tarea.estado);
		})
	},

	write: function (array) {
		let deArrayAJSON = JSON.stringify(array, null, ' ');
		fs.writeFileSync(this.archivo, deArrayAJSON);
	},
	
	save: function (tarea) {
		let tareasActuales = this.read();
		tareasActuales.push(tarea);
		this.write(tareasActuales);
	},
	
	filter: function (estado) {
		let tareasActuales = this.read();
		const tareasFiltradas = tareasActuales.filter(unaTarea => estado === unaTarea.estado);
		return tareasFiltradas
	}
}