DELETE a
FROM Person AS a, Person as b
WHERE a.id > b.id
    AND a.email = b.email;