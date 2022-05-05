# Write your MySQL query statement below
SELECT
    d.name AS Department,
    e.name AS Employee,
    salary AS Salary
FROM Employee e
JOIN Department d ON d.id = departmentId
WHERE
    (departmentId, salary) IN
        (SELECT departmentId, MAX(salary)
        FROM Employee
        GROUP BY departmentId);