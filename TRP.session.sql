WITH recent_users AS (
  SELECT DISTINCT id AS user_id
  FROM users
  WHERE last_request >= NOW() - INTERVAL 10 MINUTE
),
latest_view_logs AS (
  SELECT 
    vl.user_id,
    vl.channel_id,
    vl.finished_watching_at,
    ROW_NUMBER() OVER (PARTITION BY vl.user_id ORDER BY vl.finished_watching_at DESC) AS row_num
  FROM view_logs vl
  WHERE vl.user_id IN (SELECT user_id FROM recent_users)
)
SELECT 
    c.channel_name,
    COUNT(DISTINCT l.user_id) AS user_count
FROM 
    latest_view_logs l
JOIN 
    channels c ON l.channel_id = c.id
WHERE 
    l.row_num = 1
GROUP BY 
    c.channel_name;