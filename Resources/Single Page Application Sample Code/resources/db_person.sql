--
-- Database: `db_person`
--

-- --------------------------------------------------------

--
-- Table structure for table `idd_person`
--

CREATE TABLE `idd_person` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `age` int(3) NOT NULL,
  `fpath` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `idd_person`
--

INSERT INTO `idd_person` (`id`, `name`, `age`, `fpath`) VALUES
(2, 'Chris', 19, 'img/smiley1.png'),
(3, 'Diana', 25, 'img/smiley2.png'),
(4, 'Eric', 23, 'img/smiley2.png'),
(5, 'Gary', 12, 'img/smiley1.png'),
(6, 'Freda', 23, 'img/smiley2.png'),
(8, 'Chris', 19, 'img/smiley1.png'),
(9, 'Diana', 25, 'img/smiley2.png'),
(10, 'Eric', 23, 'img/smiley2.png'),
(11, 'Gary', 12, 'img/smiley1.png'),
(12, 'Freda', 23, 'img/smiley2.png'),
(72, 'Savi', 30, 'img/smiley1.png'),
(70, 'Sunik Shakya', 24, 'img/smiley2.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'hellovue');
