
class SchedulesController < ApplicationController

	def index

		json = [{
			title: 'Петров С.Н.',
			visit_begin: '2015-03-24T10:15',
			visit_end: '2015-03-24T12:00',
			department: {
				id: 12,
				title: 'Секретариат зам. главы РК'
			}
		}, {
			title: 'Васильев А.А.',
			visit_begin: '2015-03-21T12:30',
			visit_end: '2015-03-21T14:10',
			department: {
				id: 12,
				title: 'Секретариат зам. главы РК'
			}
		}, {
			title: 'Кондратьев У.В.',
			visit_begin: '2015-03-21T15:00',
			visit_end: '2015-03-21T17:30',
			department: {
				id: 12,
				title: 'Секретариат зам. главы РК'
			}
		}]


		render :json => json
	end


	def create
	end


	def update
	end


end