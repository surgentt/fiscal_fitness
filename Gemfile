source 'https://rubygems.org'

ruby '2.0.0'

gem 'rails', '4.0.1'

gem 'jquery-rails', '2.2.1'
gem 'rickshaw_rails'

gem 'sass-rails', '~> 4.0.0'
gem 'bootstrap-sass', '~> 3.0.3.0'

gem 'uglifier', '2.1.1'
gem 'coffee-rails', '~>4.0.0'
gem 'bcrypt-ruby', '~> 3.0.0'

group :development, :test do
  gem 'pry'
  gem 'rspec-rails', '2.13.1'
  gem 'guard-rspec', '2.5.0'
  gem 'spork-rails', github: 'sporkrb/spork-rails'
  gem 'guard-spork', '1.5.0'
  gem 'childprocess', '0.3.6'
  gem 'konacha'
  gem 'sqlite3'
end

group :test do
  gem 'selenium-webdriver', '2.0.0'
  gem 'capybara', '2.1.0'
  gem 'factory_girl_rails', '4.2.1'
end

group :production, :staging do
  gem 'rails_12factor'
  gem 'pg'
end

group :doc do
  gem 'sdoc', require: false
end


