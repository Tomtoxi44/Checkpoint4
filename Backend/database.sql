SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

DROP DATABASE IF EXISTS forum_db;

CREATE SCHEMA IF NOT EXISTS `forum_db` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forum_db`.`user` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`salon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forum_db`.`salon` (
  `idsalon` INT NOT NULL AUTO_INCREMENT,
  `name_salon` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idsalon`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`messagetable`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `forum_db`.`messagetable` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `salon_id` INT NOT NULL,
  `messages` LONGTEXT NULL,
  `fav` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `salon_id_idx` (`salon_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `forum_db`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `salon_id`
    FOREIGN KEY (`salon_id`)
    REFERENCES `forum_db`.`salon` (`idsalon`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO `forum_db`.`user` (`pseudo`,`password`) VALUES ("Tifix","t");
INSERT INTO `forum_db`.`user` (`pseudo`,`password`) VALUES ("Tarte","t");
INSERT INTO `forum_db`.`salon` (`name_salon`) VALUES ("Tartelette");
INSERT INTO `forum_db`.`salon` (`name_salon`) VALUES ("Jambon beurre");
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message1",0);
INSERT INTO `forum_db`.`messagetable` (`user_id`,`salon_id`,`messages`,`fav`) VALUES (1,1,"Hello message2",0);


