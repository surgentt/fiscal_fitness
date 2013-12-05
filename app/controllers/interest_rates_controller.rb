class InterestRatesController < ApplicationController
  
  def show
    render :template => "interest_rates/slide" + params[:id] + ".html.erb"
  end

end
