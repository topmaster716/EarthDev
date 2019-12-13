defmodule EarthDev.Data.Marker do
  use Ecto.Schema
  import Ecto.Changeset

  schema "markers" do
    field :email, :string
    field :link, :string
    field :message, :string
    field :nickname, :string

    timestamps()
  end

  @doc false
  def changeset(marker, attrs) do
    marker
    |> cast(attrs, [:nickname, :email, :link, :message])
    |> validate_required([:nickname, :email, :link, :message])
  end
end
