import React from 'react';

const GlobalContext = React.createContext({
	monthIndex: 0,
	setMonthIndex: (index) => {},
	smallCalendarMonth: 0,
	setSmallCalendarMonth: (index) => {},
	daySelected: null,
	setDaySelected: (day) => {},

	showEventModal: false,
	setShowEventModal: () => {},
	openRight: false,
	setOpenRight: () => {},
	openReschedule: false,
	setOpenReschedule: () => {},

	dispatchCalEvent: ({ type, payload }) => {},
	savedEvents: [],
	selectedEvent: null,
	setSelectedEvent: () => {},
	setLabels: () => {},
	labels: [],
	updateLabel: () => {},
	filteredEvents: [],
});

export default GlobalContext;
