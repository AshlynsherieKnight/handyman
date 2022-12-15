class Api::servicessController < ApplicationController

 before_action :set_services, only: [:show, :update, :destroy]
  
  def index
    render json: Services.all
  end
  
  def show
    render json: @services
      end
  
   def create
   @services = Services.new(services_params)
    if @services.save
     render json: @services
     else
      render json: { errors: @services.errors }, status: :unprocessable_entity
     end
    end
  
    def update
      if @services.update(services_params)
        render json: @services
      else
        render json: { errors: @services.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @services.destroy
      render json: { message: 'services deleted' }
  
      
    end
    private
    
      def services_params
        params.require(:services).permit(:first_name, :last_name)
      end
     
      def set_services
        @services = Services.find(params[:id])
      end
  end



end



