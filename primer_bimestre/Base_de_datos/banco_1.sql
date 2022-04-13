# MySQL-Front 5.0  (Build 1.0)

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE */;
/*!40101 SET SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES */;
/*!40103 SET SQL_NOTES='ON' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;


# Host: LOCALHOST    Database: banco
# ------------------------------------------------------
# Server version 5.0.24a-community-nt

#
# Table structure for table cliente
#

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `Id` int(11) NOT NULL auto_increment,
  `nombre` varchar(255) default NULL,
  `numerodecuenta` int(11) default NULL,
  `numerodetelefono` int(11) default NULL,
  PRIMARY KEY  (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO `cliente` VALUES (1,'Jorge Servantez ',123456,222134542);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

#
# Table structure for table cuenta
#

DROP TABLE IF EXISTS `cuenta`;
CREATE TABLE `cuenta` (
  `Id` int(11) NOT NULL auto_increment,
  `numerodecuenta` int(255) default NULL,
  `fecha` datetime default NULL,
  `saldo` int(11) default NULL,
  `tipodetransaccion` varchar(255) default NULL,
  `nombredelasucursal` varchar(255) default NULL,
  PRIMARY KEY  (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO `cuenta` VALUES (1,123456,'2013-06-07',120000,'deposito','bancomer');
/*!40000 ALTER TABLE `cuenta` ENABLE KEYS */;
UNLOCK TABLES;

#
# Table structure for table sucursal
#

DROP TABLE IF EXISTS `sucursal`;
CREATE TABLE `sucursal` (
  `Id` int(11) NOT NULL auto_increment,
  `nombre` varchar(255) default NULL,
  `ubicacion` varchar(255) default NULL,
  `telefono` int(11) default NULL,
  `nombredelgerente` varchar(255) default NULL,
  PRIMARY KEY  (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO `sucursal` VALUES (1,'bancomer','av. reforma nu. 13',263289,'Rodrigo Flores');
/*!40000 ALTER TABLE `sucursal` ENABLE KEYS */;
UNLOCK TABLES;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
