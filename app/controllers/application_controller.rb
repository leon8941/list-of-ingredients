class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    
    def fallback_index_html
        ender :file => 'public/index.html'
    end
    
end

