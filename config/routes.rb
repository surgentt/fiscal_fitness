FiscalFitness::Application.routes.draw do
  # resources gives :users all RESTful routes
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  root  'static_pages#home'
  match '/signup',  to: 'users#new',            via: 'get'
  match '/signin',  to: 'sessions#new',         via: 'get'
  match '/emails', to: 'users#index',           via: 'get'
  match '/signout', to: 'sessions#destroy',     via: 'delete'
  match '/help',    to: 'static_pages#help',    via: 'get'
  match '/about',   to: 'static_pages#about',   via: 'get'

  resources :interest_rates
  #Interest Rates Course Routes, There must be an easier way to do this
  match '/slide/1',  to: 'interest_rates#slide1', via: 'get'
  match '/slide/2',  to: 'interest_rates#slide2', via: 'get'
  match '/slide3',  to: 'interest_rates#slide3', via: 'get'
  match '/slide4',  to: 'interest_rates#slide4', via: 'get'
  match '/slide5',  to: 'interest_rates#slide5', via: 'get'
  match '/slide6',  to: 'interest_rates#slide6', via: 'get'
  match '/slide7',  to: 'interest_rates#slide7', via: 'get'
  match '/slide8',  to: 'interest_rates#slide8', via: 'get'
  match '/slide9',  to: 'interest_rates#slide9', via: 'get'
  match '/slide10',  to: 'interest_rates#slide10', via: 'get'

  resources :feedbacks

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end
  
  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
