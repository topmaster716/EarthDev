defmodule EarthDev.Data.MarkerType do
  use Ecto.Schema
  import Ecto.Changeset

  schema "marker_types" do
    field :image, :string
    field :title, :string
    field :user_selectable, :boolean, default: false

    timestamps()
  end

  @doc false
  def changeset(marker_type, attrs) do
    marker_type
    |> cast(attrs, [:title, :image, :user_selectable])
    |> validate_required([:title, :image, :user_selectable])
  end
end
