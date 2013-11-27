class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include SessionsHelper


  private

  def feedback_params
    params.require(:feedback).permit(:general, :grammer, :code,
                                 :future_course, :price, :satisfaction, :email)
  end

end
