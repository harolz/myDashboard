CREATE TABLE IF NOT EXISTS stock_summary (
                                             stock_symbol VARCHAR(255) NOT NULL,
                                             date DATE,
                                             day_low FLOAT,
                                             day_high FLOAT,
                                             volume INT,
                                             description TEXT,
                                             PRIMARY KEY (date)
)  ENGINE=INNODB;

INSERT INTO `stock_summary` (`stock_symbol`,`date`,`day_low`,`day_high`,`volume`) VALUES ('AAPL','2019-7-05','196.83', '200.53','25330964');
INSERT INTO `stock_summary` (`stock_symbol`,`date`,`day_low`,`day_high`,`volume`) VALUES ('AAPL','2019-7-08','194.63', '202.28','21367657');
INSERT INTO `stock_summary` (`stock_symbol`,`date`,`day_low`,`day_high`,`volume`) VALUES ('AAPL','2019-7-09','191.37', '199.75','17689434');
INSERT INTO `stock_summary` (`stock_symbol`,`date`,`day_low`,`day_high`,`volume`) VALUES ('AAPL','2019-7-10','183.28', '219.29','31092878');
INSERT INTO `stock_summary` (`stock_symbol`,`date`,`day_low`,`day_high`,`volume`) VALUES ('AAPL','2019-7-11','192.54', '225.66','61092878');
INSERT INTO `stock_summary` (`stock_symbol`,`date`,`day_low`,`day_high`,`volume`) VALUES ('AAPL','2019-7-12','188.24', '211.46','11092878');