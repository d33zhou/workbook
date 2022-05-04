SELECT name AS Customers
FROM Customers
LEFT JOIN Orders ON customerId = Customers.id
WHERE customerId IS NULL;