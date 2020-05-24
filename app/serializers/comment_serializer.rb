class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :by

  def by
    object.user.email
  end
end
