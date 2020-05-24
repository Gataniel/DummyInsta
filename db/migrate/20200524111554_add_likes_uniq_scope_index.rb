class AddLikesUniqScopeIndex < ActiveRecord::Migration[6.0]
  def change
    add_index :likes, [:user_id, :reference_id, :reference_type], unique: true
  end
end
