class ExerciseController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Gainz.all
    end

    def show
        render json: Gainz.find(params["id"])
    end

    def delete
        render json: Gainz.delete(params["id"])
    end

    def update
        render json: Gainz.update(params["id"], params["exercise"])
    end

    def create
        render json: Gainz.create(params["exercise"])
    end
end