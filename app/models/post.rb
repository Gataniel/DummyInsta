class Post < ApplicationRecord
  TOP_RATED_COUNT = 10

  attr_readonly :comments_count
  attr_readonly :likes_count

  belongs_to :user
  has_one_attached :img
  has_many :comments, as: :commentable, dependent: :destroy
  has_many :likes, as: :reference, dependent: :destroy

  validates_presence_of :img
  # TODO: add validations
  # TODO: add resize on save(multiple variants?)
end
