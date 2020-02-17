# EarthDev



DATABASE_URL=ecto://postgres:postgres@localhost/earth_dev SECRET_KEY_BASE=W1rs8ilKXkyVDzgMTRbJ8an+n5I0fzeHaQAr3IpTx/uOgrA6qjAphzcsdaJIxKtI MIX_ENV=prod mix compile

DATABASE_URL=ecto://postgres:postgres@localhost/earth_dev SECRET_KEY_BASE=W1rs8ilKXkyVDzgMTRbJ8an+n5I0fzeHaQAr3IpTx/uOgrA6qjAphzcsdaJIxKtI  MIX_ENV=prod mix reset

DATABASE_URL=ecto://postgres:postgres@localhost/earth_dev SECRET_KEY_BASE=W1rs8ilKXkyVDzgMTRbJ8an+n5I0fzeHaQAr3IpTx/uOgrA6qjAphzcsdaJIxKtI PORT=4000 MIX_ENV=prod mix phx.server

DATABASE_URL=ecto://postgres:postgres@localhost/earth_dev SECRET_KEY_BASE=W1rs8ilKXkyVDzgMTRbJ8an+n5I0fzeHaQAr3IpTx/uOgrA6qjAphzcsdaJIxKtI PORT=4000 MIX_ENV=prod elixir --erl "-detached" -S mix phx.server