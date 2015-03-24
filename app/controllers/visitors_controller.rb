

class VisitorsController < ApplicationController

	def index

		json = [{
			id: 1,
			title: 'Петров И.Н.',
			status: :waiting,
			visit_begin: '24-03-2015T10:00',
			visit_end: '24-03-2015T11:00',
			department: {
				id: 11,
				title: 'Общий отдел'
			}
		}, {
			id: 2,
			title: 'Иванов С.Р.',
			status: :visiting,
			visit_begin: '24-03-2015T10:40',
			visit_end: '24-03-2015T12:00'
		}, {
			id: 3,
			title: 'Сидоров В.Е.',
			status: :leaving,
			visit_begin: '24-03-2015T10:40',
			visit_end: '24-03-2015T12:00'
		}]


		render :json => json
	end

end