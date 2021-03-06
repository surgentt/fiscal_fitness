class UsersController < ApplicationController
  def new
    @user = User.new  
  end

  def create
    @user = User.new(user_params)
    if @user.save
      #sign_in @user
    	flash[:success] = "You have been added to our mailing list"
      redirect_to root_url
    else
      render 'new'
    end
  end

  def show
  	@user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password,
                                   :password_confirmation)
    end
end
