---

sidebar_position: 5

---

# Pagination

InteractWith API supports pagination for all queries that return a list of items. You can use the `pagination` argument to paginate the results. The `pagination` argument has the following fields: `page`, `take`. The `page` field is the page number. The `take` field is the number of items per page. The default value for `page` is `1` and the default value for `take` is `10`. The maximum value for `take` is `100`. If you set `take` to a value greater than `100`, the API will return an error. The `take` field is optional. If you don't set it, the API will return the default value which is `10`. The `page` field is optional. If you don't set it, the API will return the default value which is `1`.