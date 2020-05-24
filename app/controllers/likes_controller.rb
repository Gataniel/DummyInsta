class LikesController < AuthController
  def create
    like = current_user.likes.new(like_params)

    if like.save
      render json: { id: like.id }, status: :created
    else
      render json: like.errors, status: :unprocessable_entity
    end
  end

  def destroy
    like = current_user.likes.find(params[:id])

    if like.destroy
      render json: {}, status: :created
    else
      render json: like.errors, status: :unprocessable_entity
    end
  end

  private

  def like_params
    params.require(:like).permit(:reference_id, :reference_type)
  end
end
