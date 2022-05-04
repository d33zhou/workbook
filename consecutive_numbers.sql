# Write your MySQL query statement below
SELECT DISTINCT a.num AS ConsecutiveNums
FROM Logs a, Logs b, Logs c
WHERE a.id = b.id + 1
    AND a.id = c.id + 2
    AND a.num = b.num
    AND a.num = c.num;