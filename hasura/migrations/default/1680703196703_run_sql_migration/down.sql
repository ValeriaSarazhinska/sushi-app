-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE VIEW last_week_orders AS
--     SELECT DATE(o.created_at AT TIME ZONE 'Europe/Kiev'), SUM(sum_by_order(o)), COUNT(o.created_at)
--     FROM orders o
--     WHERE DATE(o.created_at AT TIME ZONE 'Europe/Kiev') > now() - interval '1 week'
--     GROUP BY DATE(o.created_at AT TIME ZONE 'Europe/Kiev')
--     ORDER BY DATE(o.created_at AT TIME ZONE 'Europe/Kiev') DESC;
