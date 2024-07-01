-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-07-2024 a las 03:37:35
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `licencias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargas`
--

DROP TABLE IF EXISTS `cargas`;
CREATE TABLE IF NOT EXISTS `cargas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(250) NOT NULL,
  `id_emp` int NOT NULL,
  `id_user` int NOT NULL,
  `fecha_ini` date NOT NULL,
  `fecha_fin` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `cargas`
--

INSERT INTO `cargas` (`id`, `tipo`, `id_emp`, `id_user`, `fecha_ini`, `fecha_fin`) VALUES
(2, 'Enfermedad', 20118827, 3, '2024-06-06', '2024-06-08'),
(3, 'vacaciones', 37581580, 3, '2024-07-02', '2024-06-17'),
(4, 'Enfermedad', 37581580, 3, '2024-06-02', '2024-06-11'),
(5, 'Cumpleaños', 37581580, 3, '2023-09-14', '2023-09-15'),
(6, 'Paternidad', 37581580, 1, '2024-06-04', '2024-06-06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `dni` int NOT NULL,
  `fecha_ingreso` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `dni`, `fecha_ingreso`) VALUES
(1, 'Sergio_Gaston_Goi', 37581580, '2023-09-06'),
(3, 'Juan_Perez', 10520843, '2015-03-10'),
(4, 'Sergio_Anibal_Goi', 20118827, '1998-11-01'),
(6, 'Juan_Román_riquelme', 35968259, '2023-05-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `admin`) VALUES
(1, 'administrador', 'e10adc3949ba59abbe56e057f20f883e', 1),
(3, 'rrhh', 'e10adc3949ba59abbe56e057f20f883e', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
