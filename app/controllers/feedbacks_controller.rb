class FeedbacksController < ApplicationController

	def index
		@feedbacks = Feedback.all
	end

	def new
	end

	def create 
		@feedback = Feedback.new(feedback_params)
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
                                   :future_course, :price, :satisfaction, :email, :url)
    end

end