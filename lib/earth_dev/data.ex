defmodule EarthDev.Data do
  @moduledoc """
  The Data context.
  """

  import Ecto.Query, warn: false
  alias EarthDev.Repo

  alias EarthDev.Data.MarkerType

  @doc """
  Returns the list of marker_types.

  ## Examples

      iex> list_marker_types()
      [%MarkerType{}, ...]

  """
  def list_marker_types do
    Repo.all(MarkerType)
  end

  @doc """
  Gets a single marker_type.

  Raises `Ecto.NoResultsError` if the Marker type does not exist.

  ## Examples

      iex> get_marker_type!(123)
      %MarkerType{}

      iex> get_marker_type!(456)
      ** (Ecto.NoResultsError)

  """
  def get_marker_type!(id), do: Repo.get!(MarkerType, id)

  @doc """
  Creates a marker_type.

  ## Examples

      iex> create_marker_type(%{field: value})
      {:ok, %MarkerType{}}

      iex> create_marker_type(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_marker_type(attrs \\ %{}) do
    %MarkerType{}
    |> MarkerType.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a marker_type.

  ## Examples

      iex> update_marker_type(marker_type, %{field: new_value})
      {:ok, %MarkerType{}}

      iex> update_marker_type(marker_type, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_marker_type(%MarkerType{} = marker_type, attrs) do
    marker_type
    |> MarkerType.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a MarkerType.

  ## Examples

      iex> delete_marker_type(marker_type)
      {:ok, %MarkerType{}}

      iex> delete_marker_type(marker_type)
      {:error, %Ecto.Changeset{}}

  """
  def delete_marker_type(%MarkerType{} = marker_type) do
    Repo.delete(marker_type)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking marker_type changes.

  ## Examples

      iex> change_marker_type(marker_type)
      %Ecto.Changeset{source: %MarkerType{}}

  """
  def change_marker_type(%MarkerType{} = marker_type) do
    MarkerType.changeset(marker_type, %{})
  end

  alias EarthDev.Data.Marker

  @doc """
  Returns the list of markers.

  ## Examples

      iex> list_markers()
      [%Marker{}, ...]

  """
  def list_markers do
    Repo.all(Marker)
  end

  @doc """
  Gets a single marker.

  Raises `Ecto.NoResultsError` if the Marker does not exist.

  ## Examples

      iex> get_marker!(123)
      %Marker{}

      iex> get_marker!(456)
      ** (Ecto.NoResultsError)

  """
  def get_marker!(id), do: Repo.get!(Marker, id)

  @doc """
  Creates a marker.

  ## Examples

      iex> create_marker(%{field: value})
      {:ok, %Marker{}}

      iex> create_marker(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_marker(attrs \\ %{}) do
    %Marker{}
    |> Marker.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a marker.

  ## Examples

      iex> update_marker(marker, %{field: new_value})
      {:ok, %Marker{}}

      iex> update_marker(marker, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_marker(%Marker{} = marker, attrs) do
    marker
    |> Marker.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Marker.

  ## Examples

      iex> delete_marker(marker)
      {:ok, %Marker{}}

      iex> delete_marker(marker)
      {:error, %Ecto.Changeset{}}

  """
  def delete_marker(%Marker{} = marker) do
    Repo.delete(marker)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking marker changes.

  ## Examples

      iex> change_marker(marker)
      %Ecto.Changeset{source: %Marker{}}

  """
  def change_marker(%Marker{} = marker) do
    Marker.changeset(marker, %{})
  end
end
