defmodule EarthDev.Repo.Migrations.CreateMarkers do
  use Ecto.Migration

  def change do
    create table(:markers) do
      add :nickname, :string
      add :email, :string
      add :link, :string
      add :message, :string

      timestamps()
    end

  end
end
