class User < ApplicationRecord
    has_secure_password
    has_many :carts
    has_many :products, through: :carts

    validates :username, presence: true, uniqueness: true


    def cart_sum
        if self.carts.length > 0
        return self.carts.sum { |c| c.product.price }
        else
           return 0
        end
       end

       def cart
        self.products
      end
end
