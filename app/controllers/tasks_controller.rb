class TasksController < ApplicationController
  def index
    @tasks = []
    5.times do |i|
      @tasks << {id: i, title: "task #{i}"}
    end
  end
end
