class Api::commentssController < ApplicationController

  before_action :set_comments, only: [:show, :update, :destroy]
   
   def index
     render json:Comments.all
   end
   
   def show
     render json: @comments
       end
   
    def create
    @comments = Comments.new(comments_params)
     if @comments.save
      render json: @comments
      else
       render json: { errors: @comments.errors }, status: :unprocessable_entity
      end
     end
   
     def update
       if @comments.update(comments_params)
         render json: @comments
       else
         render json: { errors: @comments.errors }, status: :unprocessable_entity
       end
     end
   
     def destroy
       @comments.destroy
       render json: { message: 'comments deleted' }
   
       
     end
     private
     
       def comments_params
         params.require(:comments).permit(:first_name, :last_name)
       end
      
       def set_comments
         @comments = comments.find(params[:id])
       end
   end
 
 
 
 end
 
 