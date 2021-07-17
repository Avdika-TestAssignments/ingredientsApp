This small application was part of a test assignment to test the API and work with the basic React principles

Application principle

The app allows you to search for a dish based on a given ingredient.
Please enter the name of the ingredient or ingredients in the search 
box and press the "submit" button, then the results will appear below 
the search box for you. To enter more than one ingredient use a comma,
 e.g: "banana, apple, carrot".

 The technical part.
The use of the API has a limit of 150 queries per day, so the application uses local storage to save queries. 

Saving the number of daily requests can be achieved in 2 ways. The first is to check the full string to see if a similar query has been sent, this can save the number of similar queries but the chance of a full string match when queried is small, so duplicate queries are possible. The second option is to split the query into parts and check the individual parts and send the queries separately as well. At the beginning this will increase the number of queries a lot, but in the end it will quickly create a database from which the information will be taken instead of sending queries, which should save more queries in the end.

So, now after the query, the keyword and the server response are stored in a variable. After pressing the "submit" button, the application splits the request into individual words (if more than one ingredient is specified in the request) and checks if a request with a similar keyword has been sent. If there is a match, the result for the keyword is output from the variable and all new words are sent with the request to the server.
