Rails.application.routes.draw do
  
  root 'site#index'

  get '/exercise', to: 'exercise#index'
  get '/exercise/:id', to: 'exercise#show'
  post '/exercise/', to: 'exercise#create'
  put '/exercise/:id', to: 'exercise#update'
  delete 'exercise/:id', to: 'exercise#delete'
end
