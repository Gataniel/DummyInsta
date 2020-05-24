class PostSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :description, :by, :created_at,
    :comments_count, :likes_count, :current_users_like_id

  def img_url
    Rails.application.routes.url_helpers::rails_blob_path(
      object.img, only_path: true
    )
  end

  def by
    object.user.email
  end

  def current_users_like_id
    object.likes.find do |like|
      like.user_id == current_user.id
    end
  end
end
