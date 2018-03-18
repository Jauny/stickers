class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.create(:title => "title")
    respond_to do |format|
      format.json
    end
  end

  def destroy
    Task.delete(params[:id])
  end
end
