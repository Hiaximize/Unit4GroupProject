class ExerciseController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Gainz.all
    end

    def show
        render json: Gainz.find(params["id"])
    end
end