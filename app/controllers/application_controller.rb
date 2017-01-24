class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def client
    render 'application/client'
  end
end
