defmodule EarthDevWeb.MarkerTypeControllerTest do
  use EarthDevWeb.ConnCase

  alias EarthDev.Data
  alias EarthDev.Data.MarkerType

  @create_attrs %{
    image: "some image",
    title: "some title",
    user_selectable: true
  }
  @update_attrs %{
    image: "some updated image",
    title: "some updated title",
    user_selectable: false
  }
  @invalid_attrs %{image: nil, title: nil, user_selectable: nil}

  def fixture(:marker_type) do
    {:ok, marker_type} = Data.create_marker_type(@create_attrs)
    marker_type
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all marker_types", %{conn: conn} do
      conn = get(conn, Routes.marker_type_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create marker_type" do
    test "renders marker_type when data is valid", %{conn: conn} do
      conn = post(conn, Routes.marker_type_path(conn, :create), marker_type: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.marker_type_path(conn, :show, id))

      assert %{
               "id" => id,
               "image" => "some image",
               "title" => "some title",
               "user_selectable" => true
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.marker_type_path(conn, :create), marker_type: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update marker_type" do
    setup [:create_marker_type]

    test "renders marker_type when data is valid", %{conn: conn, marker_type: %MarkerType{id: id} = marker_type} do
      conn = put(conn, Routes.marker_type_path(conn, :update, marker_type), marker_type: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.marker_type_path(conn, :show, id))

      assert %{
               "id" => id,
               "image" => "some updated image",
               "title" => "some updated title",
               "user_selectable" => false
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, marker_type: marker_type} do
      conn = put(conn, Routes.marker_type_path(conn, :update, marker_type), marker_type: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete marker_type" do
    setup [:create_marker_type]

    test "deletes chosen marker_type", %{conn: conn, marker_type: marker_type} do
      conn = delete(conn, Routes.marker_type_path(conn, :delete, marker_type))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.marker_type_path(conn, :show, marker_type))
      end
    end
  end

  defp create_marker_type(_) do
    marker_type = fixture(:marker_type)
    {:ok, marker_type: marker_type}
  end
end
