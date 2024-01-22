-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: my_casino
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `minBet` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Казино','Не казино',1),(2,'Рулетка','Рулетка??',12),(3,'34','234',23),(4,'345345','345345',5),(5,'rterter','6756756jtytyj',12),(6,'34234','234',5),(7,'weqwe','qweqwe',67),(8,'dgfsdf','dsfg',1),(9,'11111111111','werwer',12),(10,'222222','2222',2222);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'erik','$2b$10$N5iUmLd7Nx.SZKI49EnxqeDcwWZQisHrU7QQ6XP3oIBqOo.O/kcTu'),(2,'eriku','$2b$10$nrvKvZ0cd9NNkdgu5U13/uPXWhU6TZkB3jbuhXUDe4gkemY8AVliy'),(3,'erikut','$2b$10$zH4Cz.RNMTF8lKpVyATI7.kLhDzTzX1WgPdEKvsg88VYfn9YE8dci'),(4,'4','$2b$10$bOD3vBWRjDsNM2hEMMzR7.1LE4MiT7nCsMfh17cgAACcEwt6YfXcG'),(5,'5','$2b$10$mKcWxJtH2Aj2KdSiMG3wgOHfFVm2iOMvrr5/vmw/J6PqcUiIW0CQC'),(6,'6','$2b$10$3942/XbbNgyMaE3BkivlMOll7NUnTkeQpUm4mWf9IheIM8k0vDtd.'),(7,'7','$2b$10$oP2Nl0J87P46MaRJ/oP1ueNLPF5tTiOhlKj2VG91aOGagksbI32Qy'),(8,'8','$2b$10$O4hfssU8C08IYgnwfrxQ8.g/EeAdGb2bq2Pp.IZAviSFJkq.udZ9O'),(9,'9','$2b$10$.S4lFqFSPCGhX524pLNtkud.H.lf/y6xw0TN6TVQ8agX.MFDp0W4.'),(10,'10','$2b$10$KKIKm/hmldUWkp.99aBtkeRNjRDQenPShpq6IaSy.HaIwVQLp6FD2'),(11,'11','$2b$10$/ZOuu4XizAbJCCrASkKG0O/x04AmGmfD9Ng5rXH5pIap.YSqhmXDG'),(12,'11','$2b$10$OWPk96AlqyThh3LGdWUYbe.jQZhPzOR3nisCMgRXBE59rv2F8tdhW'),(13,'13','$2b$10$y6JAGbs4bQDgK1l5imVwO.0A/R9ScHEn9uMKfqUfh5bmXBD6kPwFO'),(14,'14','$2b$10$w.WHfRq3z8F8Rs5pM7qwX.WzZJfPbg95p5oIt2mLG5r9dAOkk2Mke'),(15,'15','$2b$10$8X8XT62cUvAcmrj52oC3ee/9N2hADrr8VshK90DV6JvWNIWY8IPVW'),(16,'16','$2b$10$0twj9ru5ZcTLxgnQwxgn9uIc6xR6GacLl1HJEtnwvs9/lGLYDG2.2'),(17,'17','$2b$10$NUollKQQNKFcCeTLpHEvJ.4SMtArZOpfHxje1kHOxHgCPsKxz1Dqa'),(18,'18','$2b$10$WBIt5T.cjmtNsX6wjzmFeei8LsB0fsmEb8pX4.CeY1zC/ngJ/JAZW'),(19,'19','$2b$10$WRClGYw7F0R/KExDQwXidOO83FCvjiwmL3hNZz/TZu5XIEhx.1P0e');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-21 22:20:04
