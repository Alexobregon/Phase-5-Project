class HistoriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
        history = History.all
        render json: history
    end

    def create
        history = History.create!(history_params)
        render json: history, status: :created
    end


    private

    def history_params
        params.permit(:order, :price, :user_id)
    end

    def render_not_found_response
        render json: { error: "Item not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
