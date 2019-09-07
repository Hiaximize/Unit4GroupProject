Rails.application.routes.draw do
  
  root 'site#index'

  get '/exercise', to: 'exercise#index'
  get '/exercise/:id', to: 'exercise#show'
  post '/exercises/', to: 'exercises#create'
  put '/exercises/:id', to: 'exercises#update'
  delete 'exercises/:id', to: 'exercises#delete'
end
