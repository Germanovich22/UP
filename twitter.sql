-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: lab11
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `POST_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int DEFAULT NULL,
  `DESCRIPTION` mediumtext,
  `CREATED_AT` datetime DEFAULT NULL,
  `PHOTO_LINK` varchar(255) DEFAULT NULL,
  `LIKES` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`POST_ID`),
  KEY `USER_ID_idx` (`USER_ID`),
  CONSTRAINT `USER_ID` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,1,'Description post1','2020-01-01 12:00:55','https://static8.depositphotos.com/1145675/836/i/450/depositphotos_8369327-stock-photo-networks-internet-and-here-wireless.jpg','[\'test1\']'),(2,2,'Description post2','2006-03-01 00:00:00','https://bipbap.ru/wp-content/uploads/2017/08/16.jpg','[\'test\']'),(3,3,'Description post3','2010-08-25 00:00:00','https://icdn.lenta.ru/images/2020/02/06/17/20200206172304008/pwa_list_rect_320_5ebf5de9bfc105a70594cafd462dbe09.jpg',NULL),(4,4,'Description post4','2015-04-11 00:00:00','https://img.tyt.by/390x260c/n/zamirovskiy/09/1/05_obmennik_20200204_zam_tutby_phsl.jpg',NULL),(5,5,'Description post5','2017-07-05 00:00:00','https://static.1tv.ru/uploads/video/material/splash/2020/03/02/583361/_original/583361_7939c9fcdb.jpg','[\'test9\']'),(6,1,'Description post6','2020-03-03 00:00:00','https://naviny.by/sites/default/files/styles/345x290/public/field/image/01_ue8a6892_1800.jpg',NULL),(7,6,'Description post7','2017-09-10 00:00:00','https://img03.rl0.ru/350be475212c80f6b81b8cc8262bc478/c615x325i/news.rambler.ru/img/2020/05/09/192234.161035.1888.jpeg',NULL),(8,2,'Description post8','2018-07-02 00:00:00','https://i.c97.org/ai/370733/aux-head-1585139668-20200325_vladimir_karanik_onliner_360.jpg',NULL),(9,8,'Description post9','2017-02-06 00:00:00','https://cdn22.img.ria.ru/images/07e4/03/14/1568927114_0:0:2900:1631_1036x0_80_0_0_e2490f8130d8370a0fdbecc84fcf5876.jpg','[\'test6\']'),(10,2,'Description post10','2020-01-25 00:00:00','https://img1.eadaily.com/r650x400/o/0a7/7d94a1e89e5fb7dc1495502f690c4.jpeg',NULL);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USER_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test'),(2,'test1'),(3,'test2'),(4,'test3'),(5,'test4'),(6,'test5'),(7,'test6'),(8,'test7'),(9,'test8'),(10,'test9');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-10 11:18:08
