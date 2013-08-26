require 'spec_helper'

describe "Interest Rates Course" do

  describe "Intro" do

    it "should have the content 'Welcome'" do
      visit '/interest_rates/intro'
      expect(page).to have_content('Welcome')
    end
  end
end

