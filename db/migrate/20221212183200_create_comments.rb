class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :comment_subject
      t.text :comment_body
      t.belongs_to :service, null: false, foreign_key: true

      t.timestamps
    end
  end
end
