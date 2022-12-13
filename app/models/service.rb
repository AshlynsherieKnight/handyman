class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependent: :destroy

  validates :info, :location, presence: true
end
