--
-- Table structure for table `idd_person`
--

CREATE TABLE IF NOT EXISTS `idd_person` (
  `name` varchar(30) NOT NULL,
  `age` int(3) NOT NULL,
  `fpath` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `idd_person`
--

INSERT INTO `idd_person` (`name`, `age`, `fpath`) VALUES
('Alice', 22, 'img/smiley2.png'),
('Billy', 35, 'img/smiley1.png'),
('Chris', 19, 'img/smiley1.png'),
('Diana', 25, 'img/smiley2.png'),
('Eric', 23, 'img/smiley2.png'),
('Freda', 23, 'img/smiley2.png'),
('Gary', 12, 'img/smiley1.png');
