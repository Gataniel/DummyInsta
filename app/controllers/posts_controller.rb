class PostsController < AuthController
  def index
    posts = PostsLoader.new(
      params[:user_id], params[:sorted_by]
    ).load

    render json: posts
  end

  def create
    post = current_user.posts.new({ description: params[:description] })
    post.img.attach(params[:file])

    if post.save
      render json: post, status: :created
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:img, :description)
  end
end
