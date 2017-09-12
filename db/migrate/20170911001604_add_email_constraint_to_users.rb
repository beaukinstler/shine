class AddEmailConstraintToUsers < ActiveRecord::Migration
  # def change
  def up
    execute %{
      ALTER TABLE users
      ADD CONSTRAINT
      email_must_be_company_email
      CHECK ( email ~*'^[^@]+@beaukinstler\\.info')
    }
  end
  
  def down 
    execute %{
      ALTER TABLE users
      DROP CONSTRAINT
      email_must_be_company_email
    }
  end
end
