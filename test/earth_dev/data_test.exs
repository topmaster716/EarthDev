defmodule EarthDev.DataTest do
  use EarthDev.DataCase

  alias EarthDev.Data

  describe "marker_types" do
    alias EarthDev.Data.MarkerType

    @valid_attrs %{image: "some image", title: "some title", user_selectable: true}
    @update_attrs %{image: "some updated image", title: "some updated title", user_selectable: false}
    @invalid_attrs %{image: nil, title: nil, user_selectable: nil}

    def marker_type_fixture(attrs \\ %{}) do
      {:ok, marker_type} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Data.create_marker_type()

      marker_type
    end

    test "list_marker_types/0 returns all marker_types" do
      marker_type = marker_type_fixture()
      assert Data.list_marker_types() == [marker_type]
    end

    test "get_marker_type!/1 returns the marker_type with given id" do
      marker_type = marker_type_fixture()
      assert Data.get_marker_type!(marker_type.id) == marker_type
    end

    test "create_marker_type/1 with valid data creates a marker_type" do
      assert {:ok, %MarkerType{} = marker_type} = Data.create_marker_type(@valid_attrs)
      assert marker_type.image == "some image"
      assert marker_type.title == "some title"
      assert marker_type.user_selectable == true
    end

    test "create_marker_type/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Data.create_marker_type(@invalid_attrs)
    end

    test "update_marker_type/2 with valid data updates the marker_type" do
      marker_type = marker_type_fixture()
      assert {:ok, %MarkerType{} = marker_type} = Data.update_marker_type(marker_type, @update_attrs)
      assert marker_type.image == "some updated image"
      assert marker_type.title == "some updated title"
      assert marker_type.user_selectable == false
    end

    test "update_marker_type/2 with invalid data returns error changeset" do
      marker_type = marker_type_fixture()
      assert {:error, %Ecto.Changeset{}} = Data.update_marker_type(marker_type, @invalid_attrs)
      assert marker_type == Data.get_marker_type!(marker_type.id)
    end

    test "delete_marker_type/1 deletes the marker_type" do
      marker_type = marker_type_fixture()
      assert {:ok, %MarkerType{}} = Data.delete_marker_type(marker_type)
      assert_raise Ecto.NoResultsError, fn -> Data.get_marker_type!(marker_type.id) end
    end

    test "change_marker_type/1 returns a marker_type changeset" do
      marker_type = marker_type_fixture()
      assert %Ecto.Changeset{} = Data.change_marker_type(marker_type)
    end
  end

  describe "markers" do
    alias EarthDev.Data.Marker

    @valid_attrs %{email: "some email", link: "some link", message: "some message", nickname: "some nickname"}
    @update_attrs %{email: "some updated email", link: "some updated link", message: "some updated message", nickname: "some updated nickname"}
    @invalid_attrs %{email: nil, link: nil, message: nil, nickname: nil}

    def marker_fixture(attrs \\ %{}) do
      {:ok, marker} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Data.create_marker()

      marker
    end

    test "list_markers/0 returns all markers" do
      marker = marker_fixture()
      assert Data.list_markers() == [marker]
    end

    test "get_marker!/1 returns the marker with given id" do
      marker = marker_fixture()
      assert Data.get_marker!(marker.id) == marker
    end

    test "create_marker/1 with valid data creates a marker" do
      assert {:ok, %Marker{} = marker} = Data.create_marker(@valid_attrs)
      assert marker.email == "some email"
      assert marker.link == "some link"
      assert marker.message == "some message"
      assert marker.nickname == "some nickname"
    end

    test "create_marker/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Data.create_marker(@invalid_attrs)
    end

    test "update_marker/2 with valid data updates the marker" do
      marker = marker_fixture()
      assert {:ok, %Marker{} = marker} = Data.update_marker(marker, @update_attrs)
      assert marker.email == "some updated email"
      assert marker.link == "some updated link"
      assert marker.message == "some updated message"
      assert marker.nickname == "some updated nickname"
    end

    test "update_marker/2 with invalid data returns error changeset" do
      marker = marker_fixture()
      assert {:error, %Ecto.Changeset{}} = Data.update_marker(marker, @invalid_attrs)
      assert marker == Data.get_marker!(marker.id)
    end

    test "delete_marker/1 deletes the marker" do
      marker = marker_fixture()
      assert {:ok, %Marker{}} = Data.delete_marker(marker)
      assert_raise Ecto.NoResultsError, fn -> Data.get_marker!(marker.id) end
    end

    test "change_marker/1 returns a marker changeset" do
      marker = marker_fixture()
      assert %Ecto.Changeset{} = Data.change_marker(marker)
    end
  end
end
