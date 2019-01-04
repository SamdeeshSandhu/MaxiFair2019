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

DROP TABLE IF EXISTS `dynamicrp`;
CREATE TABLE IF NOT EXISTS `dynamicrp` (
  `game` varchar(2) NOT NULL,
  `sec` varchar(3) NOT NULL,
  `marital` varchar(2) NOT NULL,
  `gender` varchar(2) NOT NULL,
  `age` varchar(8) NOT NULL,
  `education` varchar(2) NOT NULL,
  `drive` int(11) DEFAULT NULL,
  `child` int(11) DEFAULT NULL,
  `newspaper` int(11) DEFAULT NULL,
  `internet` int(11) DEFAULT NULL,
  UNIQUE KEY `game` (`game`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dynamicrp`
--

INSERT INTO `dynamicrp` (`game`, `sec`, `marital`, `gender`, `age`, `education`, `drive`, `child`, `newspaper`, `internet`) VALUES
('d', '011', '01', '01', '01111111', '11', 0, 0, 0, 0),
('c', '111', '11', '11', '00111111', '11', 0, 0, 1, 1),
('b', '111', '11', '11', '01110000', '11', 1, 0, 0, 0),
('a', '111', '01', '11', '00111000', '11', 0, 0, 0, 0),
('e', '001', '11', '11', '01111000', '11', 0, 0, 0, 0),
('f', '110', '01', '01', '01110000', '11', 0, 1, 0, 0);

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
-- Table structure for table `gamee`
--

DROP TABLE IF EXISTS `gamee`;
CREATE TABLE IF NOT EXISTS `gamee` (
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

--Add field time in table dynamicrp
ALTER TABLE `dynamicrp` ADD `time` INT(10) NOT NULL DEFAULT '10' AFTER `internet`;
--done

