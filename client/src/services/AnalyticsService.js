import GenericService from './GenericService';
class AnalyticsService extends GenericService {
	getadminanalytics = () => this.get('analytics/appointmentanalytics');
	getsinglepsychologistanalytics = (id) => this.get('analytics/' + id);
}

let analyticsService = new AnalyticsService();
export default analyticsService;
