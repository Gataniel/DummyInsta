class CommentsController < AuthController
  before_action :set_post

  def index
    comments = @post.comments.includes(:user).order(created_at: :desc)

    render json: comments
  end

  def create
    comment = current_user.comments.new(comment_params)
    comment.commentable = @post

    if comment.save
      render json: comment, status: :created
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:text)
  end
end
