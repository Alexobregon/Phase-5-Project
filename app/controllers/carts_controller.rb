class CartsController < ApplicationController
    def index
        render json: Cart.all
    end

    def create
        cart = Cart.create!(cart_params)
        render json: cart, status: :created
    end

    def destroy
        cart = Cart.find(params[:id])
        cart.destroy
        head :no_content
    end

    private

    def cart_params
        params.permit(:product_id, :user_id)
    end

end
