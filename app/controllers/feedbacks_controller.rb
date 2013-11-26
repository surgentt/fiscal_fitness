class FeedbacksController < ApplicationController

	def index
		@feedback = Feedback.all
	end

	private

    def feedback_params
      params.require(:feedback).permit(:general, :grammer, :code,
                                   :future_course, :price, :satisfaction, :email)
    end

end