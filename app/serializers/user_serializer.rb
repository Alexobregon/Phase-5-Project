class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :cart_sum
  has_many :carts


end
