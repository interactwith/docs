# Pagination

In some cases, the InteractWith API may return a large number of items in response to a query. To make it easier to work with these results and avoid overwhelming your application with data, the API supports pagination for all queries that return lists of items.

To paginate the results of a query, you can use the `pagination` argument. The `pagination` argument has two fields: `page` and `take`. The `page` field represents the page number, and the `take` field represents the number of items per page.

By default, the `page` field is set to `1` and the `take` field is set to `10`. This means that if you don't specify a different value for these fields, the API will return the first page of results with 10 items per page.

You can customize the pagination of your results by setting the `page` and `take` fields to different values. For example, if you want to retrieve the second page of results with 20 items per page, you could set the `page` field to `2` and the `take` field to `20`.

It is important to note that the `take` field has a maximum value of `100`. If you set the `take` field to a value greater than `100`, the API will return an error. This is to prevent excessively large responses that could impact the performance of your application.

The `page` and `take` fields are both optional, so you can choose to use one or both of them in your queries. If you don't specify a value for these fields, the API will use the default values of `1` and `10`, respectively.

By using the `pagination` argument, you can easily control the amount of data that is returned by the InteractWith API and ensure that your application can handle the results in a manageable way.