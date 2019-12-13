defmodule EarthDev.Repo do
  use Ecto.Repo,
    otp_app: :earth_dev,
    adapter: Ecto.Adapters.Postgres
end
