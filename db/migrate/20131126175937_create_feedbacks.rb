class CreateFeedbacks < ActiveRecord::Migration
  def change
  	create_table :feedbacks do |t|
      t.text :general
      t.text :grammer
      t.text :code
      t.text :future_course
      t.integer :price
      t.integer :satisfaction
      t.string :email

      t.timestamps
    end
  end
end
