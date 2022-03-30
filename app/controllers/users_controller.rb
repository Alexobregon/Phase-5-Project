class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
      user = User.all
      render json: user
    end

    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end

    def update
      
      user = User.find(params[:id])
      user.update!(user_params)
      render json: user, status: :ok
    
    end

  #   def create 
  #     user = User.find_by(username: params[:username])
  #     if user&.authenticate(params[:password])
  #       session[:user_id] = user.id
  #       render json: user
  #     else
  #       render json: { errors: "Username/Password combination not found" }, status: :not_found
  #     end
  # end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    

    private

    def user_params
      params.permit(:username, :password, :password_confirmation, :avatar_url)
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end


end
