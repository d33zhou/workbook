# Write your MySQL query statement below
WITH RankedSalaries AS
(
    SELECT departmentId, salary, DENSE_RANK() OVER
        (
            PARTITION BY departmentId
            ORDER BY salary DESC
        ) AS 'rank'
    FROM Employee
)
SELECT DISTINCT
    d.name AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM Employee e
JOIN Department d ON departmentId = d.id
JOIN RankedSalaries r ON (r.departmentId = d.id AND r.salary = e.salary)
WHERE r.rank <= 3