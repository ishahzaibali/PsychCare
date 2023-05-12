import GenericService from './GenericService';
class PatientService extends GenericService {
	addPatient = (data) => this.post('users/patients', data);
	deletePatient = (_id) => this.delete('users/patients/' + _id);
	updatePatient = (_id, data) => this.put('users/patients/' + _id, data);
	getPatient = () => this.get('users/patients/allpatients');
	getSinglePatient = (id) => this.get('users/patients/' + id);
}

let patientService = new PatientService();
export default patientService;
