class User < ApplicationRecord
    has_secure_password
    after_initialize :set_defaults, unless: :persisted?
    has_many :histories
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

      def cart_count
        if self.carts.length > 0
          return self.carts.length
        else return 0
        end
        
      end

      def lastfive
       h = self.histories.last(5).reverse
      h
      end

      def set_defaults
        self.avatar_url = 'https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923__340.png'
      end
      
end
