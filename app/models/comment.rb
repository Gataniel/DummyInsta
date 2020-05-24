class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true, counter_cache: :comments_count
  belongs_to :user

  # TODO: add validations
  validates :text, presence: true
end
