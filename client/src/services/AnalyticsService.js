import GenericService from './GenericService';
class AnalyticsService extends GenericService {
	getadminanalytics = () => this.get('analytics/appointmentanalytics');

	getsinglepsychologistanalytics = (id) =>
		this.get('analytics/appointmentanalytics/' + id); //id patientid.....id2 psychologitid
}

let analyticsService = new AnalyticsService();
export default analyticsService;
