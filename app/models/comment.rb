class Comment < ApplicationRecord
  belongs_to :service

  validates :comment_subject, :comment_body, presence: true
end
