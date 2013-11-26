class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SessionsHelper

  	def feedback
		@feedback = Feedback.new(feedback_params)
		binding.pry
	    if @feedback.save
	      #sign_in @user
	    	flash[:success] = "Thank you for the Feedback"
	      redirect_to :back
	    else
	      redirect_to :back
	    end
	end


private

  def feedback_params
    params.require(:feedback).permit(:general, :grammer, :code,
                                 :future_course, :price, :satisfaction, :email)
  end

end
