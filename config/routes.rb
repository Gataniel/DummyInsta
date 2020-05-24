Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :posts, only: [:index, :create] do
  end

  resources :comments, only: [:index, :create] do
  end

  resources :likes, only: [:create, :destroy] do
  end
end
