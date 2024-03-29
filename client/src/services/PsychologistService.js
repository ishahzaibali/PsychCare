import GenericService from './GenericService';
class PsychologistService extends GenericService {
	addPsychologist = (data) =>
		this.post('users/psychologists/addnewpsychologist', data);
	deletePsychologist = (id) => this.delete('users/psychologists/' + id);
	updatePsychologist = (_id, data) =>
		this.put('users/psychologists/' + _id, data);

	getPsychologist = () => this.get('users/psychologists/allpsychologists');
	getSinglePsychologist = (id) => this.get('users/psychologists/' + id);
	isApproved() {
		if (this.getPsychologist().approved === true) {
			return true;
		} else {
			return false;
		}
	}
}

let psychologistService = new PsychologistService();
export default psychologistService;
