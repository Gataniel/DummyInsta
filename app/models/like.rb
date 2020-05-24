class Like < ApplicationRecord
  belongs_to :user
  belongs_to :reference, polymorphic: true, counter_cache: :likes_count
  validates :user_id, uniqueness: { scope: [:reference_id, :reference_type] }
end
