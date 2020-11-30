-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2020 at 10:55 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fastextpay`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '1586170439094_country_schema', 1, '2020-04-06 11:09:03'),
(2, '1586170631975_users_schema', 1, '2020-04-06 11:09:03'),
(3, '1586252276129_division_schema', 2, '2020-04-07 09:42:32'),
(4, '1586251136238_users_schema', 3, '2020-04-07 11:33:59'),
(5, '1586323049827_sub_division_schema', 4, '2020-04-08 10:26:17'),
(6, '1586323100953_state_schema', 4, '2020-04-08 10:26:18'),
(7, '1586409264532_category_schema', 5, '2020-04-09 06:16:55'),
(8, '1586409282874_sub_category_schema', 5, '2020-04-09 06:16:55'),
(9, '1586409310022_service_schema', 5, '2020-04-09 06:16:56'),
(10, '1586409369970_service_image_schema', 5, '2020-04-09 06:16:56'),
(11, '1586409400794_review_schema', 5, '2020-04-09 06:16:56'),
(12, '1586413090933_conversation_schema', 6, '2020-04-09 07:06:30'),
(13, '1586413114317_message_schema', 6, '2020-04-09 07:06:31'),
(14, '1586413174200_reservation_schema', 6, '2020-04-09 07:06:31'),
(15, '1586413224431_pricingplan_schema', 6, '2020-04-09 07:06:32'),
(16, '1586413241399_income_schema', 6, '2020-04-09 07:06:32'),
(17, '1586413290508_reservationpayment_schema', 6, '2020-04-09 07:06:32'),
(18, '1586409310021_service_schema', 7, '2020-04-09 07:14:44');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `conversations`
--

CREATE TABLE `conversations` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_one` int(11) DEFAULT NULL,
  `user_two` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `code` varchar(191) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `code`, `created_at`, `updated_at`) VALUES
(1, 'Afghanistan', '93', '2020-04-16 16:20:43', '2020-04-16 16:20:43'),
(2, 'Åland Islands', '358', '2020-04-16 16:21:00', '2020-04-16 16:21:00'),
(3, 'Albania', '355', '2020-04-16 16:21:01', '2020-04-16 16:21:01'),
(4, 'Algeria', '213', '2020-04-16 16:21:01', '2020-04-16 16:21:01'),
(5, 'American Samoa', '1684', '2020-04-16 16:21:01', '2020-04-16 16:21:01'),
(6, 'Andorra', '376', '2020-04-16 16:21:01', '2020-04-16 16:21:01'),
(7, 'Angola', '244', '2020-04-16 16:21:02', '2020-04-16 16:21:02'),
(8, 'Anguilla', '1264', '2020-04-16 16:21:02', '2020-04-16 16:21:02'),
(9, 'Antarctica', '672', '2020-04-16 16:21:02', '2020-04-16 16:21:02'),
(10, 'Antigua and Barbuda', '1268', '2020-04-16 16:21:03', '2020-04-16 16:21:03'),
(11, 'Argentina', '54', '2020-04-16 16:21:04', '2020-04-16 16:21:04'),
(12, 'Armenia', '374', '2020-04-16 16:21:04', '2020-04-16 16:21:04'),
(13, 'Aruba', '297', '2020-04-16 16:21:05', '2020-04-16 16:21:05'),
(14, 'Australia', '61', '2020-04-16 16:21:05', '2020-04-16 16:21:05'),
(15, 'Austria', '43', '2020-04-16 16:21:05', '2020-04-16 16:21:05'),
(16, 'Azerbaijan', '994', '2020-04-16 16:21:05', '2020-04-16 16:21:05'),
(17, 'Bahamas', '1242', '2020-04-16 16:21:05', '2020-04-16 16:21:05'),
(18, 'Bahrain', '973', '2020-04-16 16:21:06', '2020-04-16 16:21:06'),
(19, 'Bangladesh', '880', '2020-04-16 16:21:06', '2020-04-16 16:21:06'),
(20, 'Barbados', '1246', '2020-04-16 16:21:08', '2020-04-16 16:21:08'),
(21, 'Belarus', '375', '2020-04-16 16:21:08', '2020-04-16 16:21:08'),
(22, 'Belgium', '32', '2020-04-16 16:21:09', '2020-04-16 16:21:09'),
(23, 'Belize', '501', '2020-04-16 16:21:09', '2020-04-16 16:21:09'),
(24, 'Benin', '229', '2020-04-16 16:21:09', '2020-04-16 16:21:09'),
(25, 'Bermuda', '1441', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(26, 'Bhutan', '975', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(27, 'Bolivia (Plurinational State of)', '591', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(28, 'Bonaire, Sint Eustatius and Saba', '5997', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(29, 'Bosnia and Herzegovina', '387', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(30, 'Botswana', '267', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(31, 'Bouvet Island', '', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(32, 'Brazil', '55', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(33, 'British Indian Ocean Territory', '246', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(34, 'United States Minor Outlying Islands', '', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(35, 'Virgin Islands (British)', '1284', '2020-04-16 16:21:10', '2020-04-16 16:21:10'),
(36, 'Virgin Islands (U.S.)', '1 340', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(37, 'Brunei Darussalam', '673', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(38, 'Bulgaria', '359', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(39, 'Burkina Faso', '226', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(40, 'Burundi', '257', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(41, 'Cambodia', '855', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(42, 'Cameroon', '237', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(43, 'Canada', '1', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(44, 'Cabo Verde', '238', '2020-04-16 16:21:11', '2020-04-16 16:21:11'),
(45, 'Cayman Islands', '1345', '2020-04-16 16:21:12', '2020-04-16 16:21:12'),
(46, 'Central African Republic', '236', '2020-04-16 16:21:12', '2020-04-16 16:21:12'),
(47, 'Chad', '235', '2020-04-16 16:21:12', '2020-04-16 16:21:12'),
(48, 'Chile', '56', '2020-04-16 16:21:12', '2020-04-16 16:21:12'),
(49, 'China', '86', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(50, 'Christmas Island', '61', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(51, 'Cocos (Keeling) Islands', '61', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(52, 'Colombia', '57', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(53, 'Comoros', '269', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(54, 'Congo', '242', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(55, 'Congo (Democratic Republic of the)', '243', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(56, 'Cook Islands', '682', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(57, 'Costa Rica', '506', '2020-04-16 16:21:13', '2020-04-16 16:21:13'),
(58, 'Croatia', '385', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(59, 'Cuba', '53', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(60, 'Curaçao', '599', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(61, 'Cyprus', '357', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(62, 'Czech Republic', '420', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(63, 'Denmark', '45', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(64, 'Djibouti', '253', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(65, 'Dominica', '1767', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(66, 'Dominican Republic', '1809', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(67, 'Ecuador', '593', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(68, 'Egypt', '20', '2020-04-16 16:21:14', '2020-04-16 16:21:14'),
(69, 'El Salvador', '503', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(70, 'Equatorial Guinea', '240', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(71, 'Eritrea', '291', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(72, 'Estonia', '372', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(73, 'Ethiopia', '251', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(74, 'Falkland Islands (Malvinas)', '500', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(75, 'Faroe Islands', '298', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(76, 'Fiji', '679', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(77, 'Finland', '358', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(78, 'France', '33', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(79, 'French Guiana', '594', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(80, 'French Polynesia', '689', '2020-04-16 16:21:15', '2020-04-16 16:21:15'),
(81, 'French Southern Territories', '', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(82, 'Gabon', '241', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(83, 'Gambia', '220', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(84, 'Georgia', '995', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(85, 'Germany', '49', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(86, 'Ghana', '233', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(87, 'Gibraltar', '350', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(88, 'Greece', '30', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(89, 'Greenland', '299', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(90, 'Grenada', '1473', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(91, 'Guadeloupe', '590', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(92, 'Guam', '1671', '2020-04-16 16:21:16', '2020-04-16 16:21:16'),
(93, 'Guatemala', '502', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(94, 'Guernsey', '44', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(95, 'Guinea', '224', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(96, 'Guinea-Bissau', '245', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(97, 'Guyana', '592', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(98, 'Haiti', '509', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(99, 'Heard Island and McDonald Islands', '', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(100, 'Holy See', '379', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(101, 'Honduras', '504', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(102, 'Hong Kong', '852', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(103, 'Hungary', '36', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(104, 'Iceland', '354', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(105, 'India', '91', '2020-04-16 16:21:17', '2020-04-16 16:21:17'),
(106, 'Indonesia', '62', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(107, 'Côte d\'Ivoire', '225', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(108, 'Iran (Islamic Republic of)', '98', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(109, 'Iraq', '964', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(110, 'Ireland', '353', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(111, 'Isle of Man', '44', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(112, 'Israel', '972', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(113, 'Italy', '39', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(114, 'Jamaica', '1876', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(115, 'Japan', '81', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(116, 'Jersey', '44', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(117, 'Jordan', '962', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(118, 'Kazakhstan', '76', '2020-04-16 16:21:18', '2020-04-16 16:21:18'),
(119, 'Kenya', '254', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(120, 'Kiribati', '686', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(121, 'Kuwait', '965', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(122, 'Kyrgyzstan', '996', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(123, 'Lao People\'s Democratic Republic', '856', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(124, 'Latvia', '371', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(125, 'Lebanon', '961', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(126, 'Lesotho', '266', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(127, 'Liberia', '231', '2020-04-16 16:21:19', '2020-04-16 16:21:19'),
(128, 'Libya', '218', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(129, 'Liechtenstein', '423', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(130, 'Lithuania', '370', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(131, 'Luxembourg', '352', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(132, 'Macao', '853', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(133, 'Macedonia (the former Yugoslav Republic of)', '389', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(134, 'Madagascar', '261', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(135, 'Malawi', '265', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(136, 'Malaysia', '60', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(137, 'Maldives', '960', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(138, 'Mali', '223', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(139, 'Malta', '356', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(140, 'Marshall Islands', '692', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(141, 'Martinique', '596', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(142, 'Mauritania', '222', '2020-04-16 16:21:20', '2020-04-16 16:21:20'),
(143, 'Mauritius', '230', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(144, 'Mayotte', '262', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(145, 'Mexico', '52', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(146, 'Micronesia (Federated States of)', '691', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(147, 'Moldova (Republic of)', '373', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(148, 'Monaco', '377', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(149, 'Mongolia', '976', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(150, 'Montenegro', '382', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(151, 'Montserrat', '1664', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(152, 'Morocco', '212', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(153, 'Mozambique', '258', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(154, 'Myanmar', '95', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(155, 'Namibia', '264', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(156, 'Nauru', '674', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(157, 'Nepal', '977', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(158, 'Netherlands', '31', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(159, 'New Caledonia', '687', '2020-04-16 16:21:21', '2020-04-16 16:21:21'),
(160, 'New Zealand', '64', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(161, 'Nicaragua', '505', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(162, 'Niger', '227', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(163, 'Nigeria', '234', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(164, 'Niue', '683', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(165, 'Norfolk Island', '672', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(166, 'Korea (Democratic People\'s Republic of)', '850', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(167, 'Northern Mariana Islands', '1670', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(168, 'Norway', '47', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(169, 'Oman', '968', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(170, 'Pakistan', '92', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(171, 'Palau', '680', '2020-04-16 16:21:22', '2020-04-16 16:21:22'),
(172, 'Palestine, State of', '970', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(173, 'Panama', '507', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(174, 'Papua New Guinea', '675', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(175, 'Paraguay', '595', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(176, 'Peru', '51', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(177, 'Philippines', '63', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(178, 'Pitcairn', '64', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(179, 'Poland', '48', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(180, 'Portugal', '351', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(181, 'Puerto Rico', '1787', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(182, 'Qatar', '974', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(183, 'Republic of Kosovo', '383', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(184, 'Réunion', '262', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(185, 'Romania', '40', '2020-04-16 16:21:23', '2020-04-16 16:21:23'),
(186, 'Russian Federation', '7', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(187, 'Rwanda', '250', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(188, 'Saint Barthélemy', '590', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(189, 'Saint Helena, Ascension and Tristan da Cunha', '290', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(190, 'Saint Kitts and Nevis', '1869', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(191, 'Saint Lucia', '1758', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(192, 'Saint Martin (French part)', '590', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(193, 'Saint Pierre and Miquelon', '508', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(194, 'Saint Vincent and the Grenadines', '1784', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(195, 'Samoa', '685', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(196, 'San Marino', '378', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(197, 'Sao Tome and Principe', '239', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(198, 'Saudi Arabia', '966', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(199, 'Senegal', '221', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(200, 'Serbia', '381', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(201, 'Seychelles', '248', '2020-04-16 16:21:24', '2020-04-16 16:21:24'),
(202, 'Sierra Leone', '232', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(203, 'Singapore', '65', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(204, 'Sint Maarten (Dutch part)', '1721', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(205, 'Slovakia', '421', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(206, 'Slovenia', '386', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(207, 'Solomon Islands', '677', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(208, 'Somalia', '252', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(209, 'South Africa', '27', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(210, 'South Georgia and the South Sandwich Islands', '500', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(211, 'Korea (Republic of)', '82', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(212, 'South Sudan', '211', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(213, 'Spain', '34', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(214, 'Sri Lanka', '94', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(215, 'Sudan', '249', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(216, 'Suriname', '597', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(217, 'Svalbard and Jan Mayen', '4779', '2020-04-16 16:21:25', '2020-04-16 16:21:25'),
(218, 'Swaziland', '268', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(219, 'Sweden', '46', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(220, 'Switzerland', '41', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(221, 'Syrian Arab Republic', '963', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(222, 'Taiwan', '886', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(223, 'Tajikistan', '992', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(224, 'Tanzania, United Republic of', '255', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(225, 'Thailand', '66', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(226, 'Timor-Leste', '670', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(227, 'Togo', '228', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(228, 'Tokelau', '690', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(229, 'Tonga', '676', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(230, 'Trinidad and Tobago', '1868', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(231, 'Tunisia', '216', '2020-04-16 16:21:26', '2020-04-16 16:21:26'),
(232, 'Turkey', '90', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(233, 'Turkmenistan', '993', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(234, 'Turks and Caicos Islands', '1649', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(235, 'Tuvalu', '688', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(236, 'Uganda', '256', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(237, 'Ukraine', '380', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(238, 'United Arab Emirates', '971', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(239, 'United Kingdom of Great Britain and Northern Ireland', '44', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(240, 'United States of America', '1', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(241, 'Uruguay', '598', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(242, 'Uzbekistan', '998', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(243, 'Vanuatu', '678', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(244, 'Venezuela (Bolivarian Republic of)', '58', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(245, 'Viet Nam', '84', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(246, 'Wallis and Futuna', '681', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(247, 'Western Sahara', '212', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(248, 'Yemen', '967', '2020-04-16 16:21:27', '2020-04-16 16:21:27'),
(249, 'Zambia', '260', '2020-04-16 16:21:28', '2020-04-16 16:21:28'),
(250, 'Zimbabwe', '263', '2020-04-16 16:21:28', '2020-04-16 16:21:28');

-- --------------------------------------------------------

--
-- Table structure for table `divisions`
--

CREATE TABLE `divisions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `country_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `divisions`
--

INSERT INTO `divisions` (`id`, `name`, `country_id`, `created_at`, `updated_at`) VALUES
(9, 'sylhet', 19, NULL, NULL),
(10, 'dhaka', 19, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `incomes`
--

CREATE TABLE `incomes` (
  `id` int(10) UNSIGNED NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `plan_id` int(11) DEFAULT NULL,
  `planName` varchar(255) DEFAULT NULL,
  `planDuration` int(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(10) UNSIGNED NOT NULL,
  `from` int(11) DEFAULT NULL,
  `conversation_id` int(255) DEFAULT NULL,
  `to` int(11) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pricingplans`
--

CREATE TABLE `pricingplans` (
  `id` int(10) UNSIGNED NOT NULL,
  `planName` varchar(255) DEFAULT NULL,
  `planDuration` int(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reservationpayments`
--

CREATE TABLE `reservationpayments` (
  `id` int(10) UNSIGNED NOT NULL,
  `seller_id` int(11) DEFAULT NULL,
  `buyer_id` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `reservationDate` int(11) DEFAULT NULL,
  `adminRecive` tinyint(1) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(10) UNSIGNED NOT NULL,
  `service_id` int(11) DEFAULT NULL,
  `seller_id` int(255) DEFAULT NULL,
  `buyer_id` int(255) DEFAULT NULL,
  `seller_mobile` varchar(255) DEFAULT NULL,
  `buyer_mobile` int(255) DEFAULT NULL,
  `details` text,
  `address` text,
  `price` int(11) DEFAULT NULL,
  `payment` tinyint(1) DEFAULT NULL,
  `reservation_amount` int(11) DEFAULT NULL,
  `reservation_date` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) UNSIGNED NOT NULL,
  `review_id` int(11) DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `rate` int(255) DEFAULT NULL,
  `review_for` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `qualification` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `subcategories` varchar(255) DEFAULT NULL,
  `country_id` int(10) UNSIGNED DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `division_id` int(255) DEFAULT NULL,
  `sub_division_id` int(255) DEFAULT NULL,
  `state_id` int(255) DEFAULT NULL,
  `service_type` varchar(255) DEFAULT NULL,
  `providedType` varchar(255) DEFAULT NULL,
  `paymentType` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT '0',
  `startTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `payment` int(11) DEFAULT NULL,
  `seller_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `description`, `qualification`, `location`, `size`, `color`, `category`, `subcategories`, `country_id`, `price`, `division_id`, `sub_division_id`, `state_id`, `service_type`, `providedType`, `paymentType`, `subscribe`, `startTime`, `endTime`, `payment`, `seller_id`, `created_at`, `updated_at`) VALUES
(1, 'samsung iz2 mobile phone', '2 camera,3charger and 2head phone', 'fresh', 'sylhet', NULL, NULL, '1', 'one,two,threee', 19, 20, 9, 2, 1, 'service', 'some type', NULL, 0, NULL, NULL, NULL, 1, '2020-04-16 12:51:21', '2020-04-16 12:51:21'),
(12, 'samsung iz2 mobile phone', '2 camera,3charger and 2head phone', 'fresh', 'sylhet', NULL, NULL, '1', 'one,two,threee', 19, 20, 10, 4, 3, 'product', 'some type', NULL, 0, NULL, NULL, NULL, 1, '2020-04-16 14:27:21', '2020-04-16 14:27:21');

-- --------------------------------------------------------

--
-- Table structure for table `service_images`
--

CREATE TABLE `service_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `service_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service_images`
--

INSERT INTO `service_images` (`id`, `service_id`, `image`, `created_at`, `updated_at`) VALUES
(1, 12, 'dkjfk', '2020-04-16 14:27:21', '2020-04-16 14:27:21'),
(2, 12, 'dkjfk', '2020-04-16 14:27:21', '2020-04-16 14:27:21'),
(3, 12, 'dkjfk', '2020-04-16 14:27:21', '2020-04-16 14:27:21'),
(4, 12, 'dkjfk', '2020-04-16 14:27:21', '2020-04-16 14:27:21');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(10) UNSIGNED NOT NULL,
  `sub_division_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `sub_division_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 2, 'rampur', NULL, NULL),
(2, 2, 'madabpur', NULL, NULL),
(3, 4, 'mirpur', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sub_divisions`
--

CREATE TABLE `sub_divisions` (
  `id` int(10) UNSIGNED NOT NULL,
  `division_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sub_divisions`
--

INSERT INTO `sub_divisions` (`id`, `division_id`, `name`, `created_at`, `updated_at`) VALUES
(2, 9, 'sylhet', NULL, NULL),
(3, 9, 'bishonath', NULL, NULL),
(4, 10, 'madraipur', NULL, NULL),
(5, 10, 'norshingdi', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `phone` varchar(191) NOT NULL,
  `firstName` varchar(191) NOT NULL,
  `lastName` varchar(191) NOT NULL,
  `country` varchar(191) DEFAULT NULL,
  `varification_code` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `file` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `token` varchar(191) DEFAULT NULL,
  `app_Token` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `phone`, `firstName`, `lastName`, `country`, `varification_code`, `image`, `file`, `email`, `password`, `token`, `app_Token`, `created_at`, `updated_at`) VALUES
(1, '', 'as', 'asdf', 'asdf', 'asdf', 'afsd', 'asdf', 'fsda', 'afsd', NULL, '', NULL, NULL),
(2, '01726', 'kamran', 'ahmed', NULL, NULL, NULL, NULL, 'ahmedkamran265@gmail.com', '$2a$10$gT.RzaL5H6f7ceMpVmIOfOAwITMbppzzO3dDJS65up.8UpRqMiwU6', NULL, NULL, '2020-04-07 13:47:06', '2020-04-07 13:47:06'),
(3, '0172600', 'nazmul', 'choudhury', NULL, NULL, NULL, NULL, 'nazmul@gmail.com', '$2a$10$DxYmtxFoi3lo4AQ7mEzpqOn/qA.3Cnp6IXrmHCTeDfKgq/.SvVq7e', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU4NzAxOTcyNn0.oqJmdcHwTu7Juiujeb4lu7GMqvHzQvO1Ye5-7zdqKbU', '', '2020-04-16 06:09:21', '2020-04-16 06:48:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conversations`
--
ALTER TABLE `conversations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `divisions`
--
ALTER TABLE `divisions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `incomes`
--
ALTER TABLE `incomes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pricingplans`
--
ALTER TABLE `pricingplans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservationpayments`
--
ALTER TABLE `reservationpayments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_images`
--
ALTER TABLE `service_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_divisions`
--
ALTER TABLE `sub_divisions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `conversations`
--
ALTER TABLE `conversations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `divisions`
--
ALTER TABLE `divisions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `incomes`
--
ALTER TABLE `incomes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pricingplans`
--
ALTER TABLE `pricingplans`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservationpayments`
--
ALTER TABLE `reservationpayments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `service_images`
--
ALTER TABLE `service_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_divisions`
--
ALTER TABLE `sub_divisions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
