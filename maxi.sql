-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 11, 2018 at 06:29 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maxi`
--

-- --------------------------------------------------------

--
-- Table structure for table `archive`
--

DROP TABLE IF EXISTS `archive`;
CREATE TABLE IF NOT EXISTS `archive` (
  `UID` int(11) NOT NULL,
  `last_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `dynamicrp`
--
CREATE TABLE `dynamicrp` (
  `game` varchar(2) NOT NULL,
  `sec` varchar(4) NOT NULL,
  `marital` varchar(2) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `min_age` int(11) NOT NULL,
  `max_age` int(11) NOT NULL,
  `education` varchar(2) NOT NULL,
  `juice` int(11) DEFAULT NULL,
  `dryer` int(11) DEFAULT NULL,
  `newspaper` int(11) DEFAULT NULL,
  `internet` int(11) DEFAULT NULL,
  `car` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `time` int(10) NOT NULL DEFAULT '10'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamea`
--

DROP TABLE IF EXISTS `gamea`;
CREATE TABLE IF NOT EXISTS `gamea` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gameb`
--

DROP TABLE IF EXISTS `gameb`;
CREATE TABLE IF NOT EXISTS `gameb` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamec`
--

DROP TABLE IF EXISTS `gamec`;
CREATE TABLE IF NOT EXISTS `gamec` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamed`
--

DROP TABLE IF EXISTS `gamed`;
CREATE TABLE IF NOT EXISTS `gamed` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamee1`
--

DROP TABLE IF EXISTS `gamee1`;
CREATE TABLE IF NOT EXISTS `gamee1` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------
--
-- Table structure for table `gamee2``
--

DROP TABLE IF EXISTS `gamee2`;
CREATE TABLE IF NOT EXISTS `gamee2`` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamef`
--

DROP TABLE IF EXISTS `gamef`;
CREATE TABLE IF NOT EXISTS `gamef` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gameg`
--

DROP TABLE IF EXISTS `gameg`;
CREATE TABLE IF NOT EXISTS `gameg` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gameh`
--

DROP TABLE IF EXISTS `gameh`;
CREATE TABLE IF NOT EXISTS `gameh` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `participant`
--

DROP TABLE IF EXISTS `participant`;
CREATE TABLE IF NOT EXISTS `participant` (
  `UID` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sec` varchar(10) NOT NULL,
  `games_allocated` varchar(100) NOT NULL,
  `games_played` varchar(100) DEFAULT NULL,
  `last_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `registered` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `phno` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `profile` text NOT NULL,
  `json` text,
  PRIMARY KEY (`UID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registrations`
--

DROP TABLE IF EXISTS `registrations`;
CREATE TABLE IF NOT EXISTS `registrations` (
  `UID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `sec` varchar(10) NOT NULL,
  `games_allocated` varchar(100) NOT NULL,
  `games_played` varchar(100) DEFAULT NULL,
  `last_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `registered` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `phno` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `profile` text NOT NULL,
  `json` text,
  PRIMARY KEY (`UID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



ALTER TABLE `gamea` ADD `queued` INT(1) NOT NULL DEFAULT '0' AFTER `played`; 
ALTER TABLE `gameb` ADD `queued` INT(1) NOT NULL DEFAULT '0' AFTER `played`; 
ALTER TABLE `gamec` ADD `queued` INT(1) NOT NULL DEFAULT '0' AFTER `played`; 
ALTER TABLE `gamed` ADD `queued` INT(1) NOT NULL DEFAULT '0' AFTER `played`; 
ALTER TABLE `gamee1` ADD `queued` INT(1) NOT NULL DEFAULT '0' AFTER `played`;
ALTER TABLE `gamee2` ADD `queued` INT(1) NOT NULL DEFAULT '0' AFTER `played`; 
ALTER TABLE `gamef` ADD `queued` INT(1) NOT NULL DEFAULT '0' AFTER `played`; 



--
-- Dumping data for table `dynamicrp`
--

INSERT INTO `dynamicrp` (`game`, `sec`, `marital`, `gender`, `min_age`, `max_age`, `education`, `juice`, `dryer`, `newspaper`, `internet`, `car`, `phone`, `time`) VALUES
('a', '1111', '11', '11', 16, 35, '11', 1, 0, 0, 0, 0, 0, 10),
('b', '1110', '11', '01', 23, 45, '11', 0, 0, 0, 0, 0, 0, 20),
('c', '1110', '11', '01', 18, 99, '11', 0, 0, 0, 0, 0, 0, 20),
('d', '1110', '11', '01', 18, 99, '11', 0, 0, 0, 0, 0, 0, 20),
('e', '1100', '11', '11', 20, 40, '11', 0, 0, 0, 0, 1, 1, 15),
('f', '1110', '11', '10', 18, 35, '11', 0, 1, 1, 1, 0, 0, 16),
('g', '1110', '11', '01', 18, 35, '11', 0, 1, 1, 1, 0, 0, 16);
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------