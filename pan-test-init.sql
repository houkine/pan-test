-- USE `pan_test`;
-- UNLOCK TABLES;
CREATE DATABASE  IF NOT EXISTS `pan_test` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `pan_test`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: pan_test
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `u_id` int(11) UNSIGNED auto_increment,
  `u_email` varchar(255) NOT NULL DEFAULT '',
  `u_password` varchar(255) NOT NULL DEFAULT '',
  `u_name` varchar(100) NOT NULL DEFAULT '',
  `u_image` varchar(255) DEFAULT '',
  `u_address` varchar(255) DEFAULT '',
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
-- abcdef
-- ghijklm
-- nopqrst
INSERT INTO `users` VALUES
(1,'susiewilson@emailaddress.com','1234','Susie Wilson','avatar1.png','Lot432'),
(2,'cameronjones@gmail.com','1234','Cameron Jones','avatar2.png','Lot433');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `updates`
--

DROP TABLE IF EXISTS `updates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `updates` (
  `up_id` int(11) UNSIGNED auto_increment,
  `up_title` varchar(255) NOT NULL DEFAULT '',
  `up_content` varchar(255) NOT NULL DEFAULT '',
  `u_id` int(11) NOT NULL DEFAULT 0,
  `up_time` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`up_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `updates`
--

LOCK TABLES `updates` WRITE;
/*!40000 ALTER TABLE `updates` DISABLE KEYS */;
INSERT INTO `updates` VALUES
(1,"Meeting","Hi @Cameron, do you think we could have a meeting sometime next week? Let me know what times you are free and I can book it in the best option for me.",1,"Today 12:05pm"),
(2,"Start of Pre-Development","Hi Again @Susie, now that the plan has been signed off on, the pre-development stage begins! Let me know if you haveany questions, otherwise we can get started on the details.",2,"Sat 1:15pm");
/*!40000 ALTER TABLE `updates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `e_id` int(11) UNSIGNED auto_increment,
  `u_id` int(11) NOT NULL DEFAULT 0,
  `e_title` varchar(255) NOT NULL DEFAULT '',
  `e_time` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES
(1,1,"Electrical Meeting",'2:00pm Mon 05/04/21'),
(2,1,"Contract Meeting",'10:00am Thu 08/04/21'),
(3,1,"Construction Starts",'6:00am Wed 21/04/21');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `l_id` int(11) UNSIGNED auto_increment,
  `u_id` int(11) NOT NULL DEFAULT 0, -- user like
  `up_id` int(11) NOT NULL DEFAULT 0, -- comment be liked
  PRIMARY KEY (`l_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES
(1,1,2);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;



/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-01 18:44:07
