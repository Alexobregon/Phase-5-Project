class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest
  has_many :carts

  validates :username, presence: true, uniqueness: true
end
