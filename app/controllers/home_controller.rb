
class HomeController < ApplicationController
  
  def index
    
    @user = {
      username: 'Петров А.В.',
      department: 'Канцелярия'
    }
    
    
  end
  
end