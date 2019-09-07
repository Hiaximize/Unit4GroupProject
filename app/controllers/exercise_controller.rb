class ExerciseController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Gainz.all
    end
end