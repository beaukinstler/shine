class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.first_name, null: false
      t.last_name, null: false
      t.email, null: false
      t.username, null:false
      t.timestamps null: false
    end
    add_index :customer, :email, unique: true
    add_index :customer, :username, unique: true
  end
end
