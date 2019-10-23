Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'registrations',
    confirmations: 'confirmations'  # confirmations controller
  }
  root to: "home#index"

  as :user do
    put '/user/confirmation', to: 'confirmations#update', :via => :patch, :as => :update_user_confirmation
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
