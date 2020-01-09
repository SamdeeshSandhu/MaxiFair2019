-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2019 at 09:14 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

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

CREATE TABLE `archive` (
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
  `time` int(10) NOT NULL DEFAULT '10',
  `isTentActive` int(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dynamicrp`
--

INSERT INTO `dynamicrp` (`game`, `sec`, `marital`, `gender`, `min_age`, `max_age`, `education`, `juice`, `dryer`, `newspaper`, `internet`, `car`, `phone`, `time`) VALUES
('d', '1110', '11', '01', 18, 99, '11', 0, 0, 0, 0, 0, 0, 20),
('b', '1110', '11', '01', 23, 45, '11', 0, 0, 0, 0, 0, 0, 20),
('e', '1100', '11', '11', 20, 40, '11', 0, 0, 0, 0, 1, 1, 15),
('a', '1111', '11', '11', 16, 35, '11', 1, 0, 0, 0, 0, 0, 10),
('f', '1110', '11', '10', 18, 35, '11', 0, 1, 1, 1, 0, 0, 16),
('c', '1110', '11', '01', 18, 99, '11', 0, 0, 0, 0, 0, 0, 20),
('g', '1110', '11', '01', 18, 35, '11', 0, 1, 1, 1, 0, 0, 16);

-- --------------------------------------------------------

--
-- Table structure for table `gamea`
--

CREATE TABLE `gamea` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `queued` int(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gameb`
--

CREATE TABLE `gameb` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `queued` int(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamec`
--

CREATE TABLE `gamec` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `queued` int(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamed`
--

CREATE TABLE `gamed` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `queued` int(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamee`
--

CREATE TABLE `gamee` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `queued` int(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gamef`
--

CREATE TABLE `gamef` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `queued` int(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gameg`
--

CREATE TABLE `gameg` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `queued` int(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gameh`
--

CREATE TABLE `gameh` (
  `UID` int(11) NOT NULL,
  `played` tinyint(1) NOT NULL DEFAULT '0',
  `queued` int(1) NOT NULL DEFAULT '0',
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `participant`
--

CREATE TABLE `participant` (
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
  `json` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `registrations`
--

CREATE TABLE `registrations` (
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
  `json` text
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dynamicrp`
--
ALTER TABLE `dynamicrp`
  ADD UNIQUE KEY `game` (`game`);

--
-- Indexes for table `participant`
--
ALTER TABLE `participant`
  ADD PRIMARY KEY (`UID`);

--
-- Indexes for table `registrations`
--
ALTER TABLE `registrations`
  ADD PRIMARY KEY (`UID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registrations`
--
ALTER TABLE `registrations`
  MODIFY `UID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
