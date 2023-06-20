import GenericService from './GenericService';

class AppointmentService extends GenericService {
	addAppointment = (data) => {
		return new Promise((resolve, reject) => {
			this.post('appointments', data)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};
	deleteAppointment = (_id) => {
		return new Promise((resolve, reject) => {
			this.delete('appointments/' + _id)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};
	updateAppointment = (_id, data) => {
		return new Promise((resolve, reject) => {
			this.put('appointments/' + _id, data)
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};
	getAppointments = () => {
		this.get('appointments');
	};
	getPsychologistAppointments = (id) => {
		this.get('appointments/psychologist/' + id);
	};
	getPatienttAppointments = (id) => {
		this.get('appointments/patient/' + id);
	};
	getnoteswithspecificusers = (id, id2) =>
		this.get('appointments/notes/' + id + '/' + id2); //id= patientid....id2= psychologistid

	// deleteAppointment = (_id) => {
	// 	this.delete('appointments/' + _id);
	// };
	// updateAppointment = (_id, data) => {
	// 	this.put('appointments/' + _id, data);
	// };
}

let appointmentService = new AppointmentService();
export default appointmentService;
