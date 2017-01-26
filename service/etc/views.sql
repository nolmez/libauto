CREATE VIEW view_category_based_book_counts AS
SELECT category.id, category.name, COUNT(book_categories.book_id) as book_counts
FROM category
LEFT JOIN book_categories ON book_categories.category_id = category.id
GROUP BY category.id;

CREATE VIEW view_publishing_house_based_book_counts AS
SELECT publishing_house.id, publishing_house.name, COUNT(book.publishing_house_id) as book_counts
FROM publishing_house
LEFT JOIN book ON book.publishing_house_id= publishing_house.id
GROUP BY publishing_house.id;