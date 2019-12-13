defmodule EarthDevWeb.PageController do
  use EarthDevWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
