class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar_url, :cart_sum, :cart_count, :lastfive
  has_many :carts
  has_many :histories


end
