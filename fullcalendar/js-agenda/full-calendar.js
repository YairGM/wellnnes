$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: '2019-10-15',
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'Ice Wrap',
					start: '2019-10-01'
				},
				{
					title: 'UltraShape Power',
					start: '2019-10-07',
					end: '2019-10-08'
				},
				{
					title: 'Body Contour de Tacha',
					start: '2019-10-15T16:00:00'
				},
				{
					title: 'Body Contour de Tacha',
					start: '2019-10-20T16:00:00'
				},
				{
					title: 'Conference',
					start: '2019-10-11'
				},
				{
					title: 'Deep Slim',
					start: '2019-10-22T10:30:00'
									},
				{
					title: 'Lunch',
					start: '2019-10-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2019-10-25T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2019-10-26T17:30:00'
				},
				{
					title: 'Deep Slim',
					start: '2019-10-27T20:00:00'
				},
				{
					title: 'UltraShape',
					start: '2019-10-18T07:00:00'
				},
				{
					title: 'Body Contour de Tacha',
					start: '2019-10-30'
				}
			]
		});
		
	});