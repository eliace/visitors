

class VisitorsController < ApplicationController

	def index

		json = [{
			id: 1,
			title: 'Петров И.Н.',
			status: :waiting,
			status_text: 'Ожидается',
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
			status_text: 'В здании',
			visit_begin: '24-03-2015T10:40',
			visit_end: '24-03-2015T12:00',
			department: {
				id: 12,
				title: 'Секретариат зам. главы РК'
			}
		}, {
			id: 3,
			title: 'Сидоров В.Е.',
			status: :leaving,
			status_text: 'Выходит',
			visit_begin: '24-03-2015T10:40',
			visit_end: '24-03-2015T12:00',
			department: {
				id: 13,
				title: 'Отдел кадров'
			}			
		}]


		render :json => json
	end

end