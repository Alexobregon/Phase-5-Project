class HistorySerializer < ActiveModel::Serializer
  attributes :id, :order, :price
  has_one :user
end
