SELECT
	DATE_TRUNC( 'month', clicks.created_at ) AS MONTH,
	campaigns.account_id,
	COUNT ( * ) AS num_clicks,
	MIN ( accounts.NAME ) AS account_name 
FROM
	"clicks"
	LEFT JOIN campaigns ON campaigns.ID = clicks.campaign_id
	LEFT JOIN accounts ON accounts.ID = campaigns.account_id 
GROUP BY
	campaigns.account_id,
	DATE_TRUNC( 'month', clicks.created_at );