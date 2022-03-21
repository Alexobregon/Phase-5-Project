class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user
        else
          render json: { errors: "Username/Password combination not found" }, status: :not_found
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
      render json: { error: "User not found" }, status: :not_found
  end

end
