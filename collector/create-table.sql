CREATE TABLE `fine_dust` (
                             `so2Grade` varchar(100) DEFAULT NULL,
                             `coFlag` varchar(100) DEFAULT NULL,
                             `khaiValue` varchar(100) DEFAULT NULL,
                             `so2Value` varchar(100) DEFAULT NULL,
                             `coValue` varchar(100) DEFAULT NULL,
                             `pm25Flag` varchar(100) DEFAULT NULL,
                             `pm10Flag` varchar(100) DEFAULT NULL,
                             `pm10Value` varchar(100) DEFAULT NULL,
                             `o3Grade` varchar(100) DEFAULT NULL,
                             `khaiGrade` varchar(100) DEFAULT NULL,
                             `pm25Value` varchar(100) DEFAULT NULL,
                             `no2Flag` varchar(100) DEFAULT NULL,
                             `no2Grade` varchar(100) DEFAULT NULL,
                             `o3Flag` varchar(100) DEFAULT NULL,
                             `pm25Grade` varchar(100) DEFAULT NULL,
                             `so2Flag` varchar(100) DEFAULT NULL,
                             `dataTime` varchar(100) NOT NULL,
                             `coGrade` varchar(100) DEFAULT NULL,
                             `no2Value` varchar(100) DEFAULT NULL,
                             `pm10Grade` varchar(100) DEFAULT NULL,
                             `o3Value` varchar(100) DEFAULT NULL,
                             PRIMARY KEY (`dataTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3