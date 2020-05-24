class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :name
      t.text :text
      t.references :commentable, polymorphic: true
      t.timestamps
    end
  end
end
