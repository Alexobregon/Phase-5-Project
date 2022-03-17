class User < ApplicationRecord
    has_secure_password
    has_many :carts
    has_many :products, through: :carts

    validates :username, presence: true, uniqueness: true
end
