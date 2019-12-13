defmodule EarthDev.Repo.Migrations.CreateMarkerTypes do
  use Ecto.Migration

  def change do
    create table(:marker_types) do
      add :title, :string
      add :image, :string
      add :user_selectable, :boolean, default: false, null: false

      timestamps()
    end

  end
end
