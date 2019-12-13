use Mix.Config

# Configure your database
config :earth_dev, EarthDev.Repo,
  username: "postgres",
  password: "postgres",
  database: "earth_dev_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :earth_dev, EarthDevWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn
