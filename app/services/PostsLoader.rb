class PostsLoader
  attr_accessor :user_id, :sorted_by, :posts

  def initialize(user_id, sorted_by)
    @user_id = user_id
    @sorted_by = sorted_by
    @posts = nil
  end

  def load
    user_id == 'top' ? load_top_posts : load_user_posts
    preload_shared_and_order
  end

  private

  def load_top_posts
    @posts = Post.order(likes_count: :desc).limit(Post::TOP_RATED_COUNT)
      .includes(:user)
  end

  def load_user_posts
    @posts = User.find(user_id).posts
  end

  def preload_shared_and_order
    posts
      .includes(:likes)
      .with_attached_img
      .order(mapped_order_by => :desc)
  end

  def mapped_order_by
    case sorted_by
    when 'likes'
      :likes_count
    when 'comments'
      :comments_count
    else
      :created_at
    end
  end
end
