configure(function() {
  set("root", __dirname)

  use(Logger)
  use(Static, { path: require("path").join(__dirname, "..", "public") })
  enable("show exceptions")
})

get("/", function() {
    return 'Hello world'
})

run(parseInt(process.env.PORT || 8000), null)
