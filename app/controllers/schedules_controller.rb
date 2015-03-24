
class SchedulesController < ApplicationController

	def index

		json = [{
			title: 'Петров С.Н.',
			visit_begin: '24-03-2015T10:15',
			visit_end: '24-03-2015T12:00'
		}]


		render :json => json
	end


	def create
	end


	def update
	end


end