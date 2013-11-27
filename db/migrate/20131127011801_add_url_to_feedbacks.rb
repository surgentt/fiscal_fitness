class AddUrlToFeedbacks < ActiveRecord::Migration
  def change
    add_column :feedbacks, :url, :string
  end
end
