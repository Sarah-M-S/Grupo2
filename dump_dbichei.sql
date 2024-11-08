# ************************************************************
# Antares - SQL Client
# Version 0.7.25
# 
# https://antares-sql.app/
# https://github.com/antares-sql/antares
# 
# Host: 127.0.0.1 (Ubuntu 22.04 10.6.18)
# Database: dbichei
# Generation time: 2024-11-07T23:17:42-03:00
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table categoria
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;

INSERT INTO `categoria` (`id_categoria`, `nome`, `createdAt`, `updatedAt`) VALUES
	(1, "Garrafas", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(2, "Livros", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(3, "Carteiras", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(4, "RG/CNH/CPF", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(5, "Bilhete transporte", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(6, "Carteira Estudante/Convenio/Clube", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(7, "Cartões (Crédito/Débito)", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(8, "Outros documentos", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(9, "Laptops", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(10, "Celulares", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(11, "Fones de Ouvido", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(12, "Mouse/teclado", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(13, "Carregadores", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(14, "Outros Eletronicos", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(15, "Chaves", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(16, "Camisetas/Camisetas", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(17, "Calça/Bermuda/Short", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(18, "Saia/vestido", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(19, "Casacos, blusas, jaquetas", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(20, "Chapéis/toucas/bonés", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(21, "Acessórios: Óculos/pulseiras/relógios etc", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(22, "Calçados", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(23, "Artigos esportivos", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(24, "Bolsas/Mochilas", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(25, "Material Escritorio", "2024-10-13 18:50:28", "2024-10-13 18:50:28"),
	(26, "Outros", "2024-10-13 18:50:28", "2024-10-13 18:50:28");

/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table cors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cors`;

CREATE TABLE `cors` (
  `id_cor` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_cor`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `cors` WRITE;
/*!40000 ALTER TABLE `cors` DISABLE KEYS */;

INSERT INTO `cors` (`id_cor`, `nome`, `createdAt`, `updatedAt`) VALUES
	(1, "Vermelho", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(2, "Azul", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(3, "Verde", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(4, "Amarelo", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(5, "Preto", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(6, "Branco", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(7, "Cinza", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(8, "Laranja", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(9, "Rosa", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(10, "Transparente", "2024-10-13 18:51:51", "2024-10-13 18:51:51"),
	(11, "Outro", "2024-10-13 18:51:51", "2024-10-13 18:51:51");

/*!40000 ALTER TABLE `cors` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table cursos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `cursos`;

CREATE TABLE `cursos` (
  `id_curso` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `turno` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;

INSERT INTO `cursos` (`id_curso`, `nome`, `turno`, `createdAt`, `updatedAt`) VALUES
	(1, "Ciências Biológicas", 1, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(2, "Física", 1, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(3, "Química", 2, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(4, "Geografia", 1, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(5, "Letras", 3, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(6, "Matemática", 2, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(7, "Urbanismo", 3, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(8, "Engenharia Civil", 1, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(9, "Engenharia de Automação Industrial", 2, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(10, "Engenharia Eletrônica", 1, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(11, "Engenharia Mecânica", 3, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(12, "Engenharia Elétrica", 2, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(13, "Engenharia de Produção", 1, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(14, "Sistemas de Informação", 3, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(15, "Análise e Desenvolvimento de Sistemas", 2, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(16, "Automação Industrial (Tecnólogo)", 1, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(17, "Gestão de Produção Industrial", 3, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(18, "Turismo", 2, "2024-10-13 18:58:55", "2024-10-13 18:58:55"),
	(19, "Sistemas Elétricos", 1, "2024-10-13 18:58:55", "2024-10-13 18:58:55");

/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table dependencia
# ------------------------------------------------------------

DROP TABLE IF EXISTS `dependencia`;

CREATE TABLE `dependencia` (
  `id_dependencia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `local_pai` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_dependencia`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `dependencia` WRITE;
/*!40000 ALTER TABLE `dependencia` DISABLE KEYS */;

INSERT INTO `dependencia` (`id_dependencia`, `titulo`, `local_pai`, `createdAt`, `updatedAt`) VALUES
	(1, "Sala de Computadores", 7, "2024-11-07 21:16:14", "2024-11-07 21:16:14"),
	(2, "Sala de Reuniões", 18, "2024-11-07 21:16:14", "2024-11-07 21:16:14"),
	(3, "Sala de Artes", 1, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(4, "Sala de Música", 1, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(5, "Sala de Leitura", 6, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(6, "Arquivo Central", 6, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(7, "Laboratório de Robótica", 7, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(8, "Laboratório de Redes", 7, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(9, "Sala de Estudos em Grupo", 8, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(10, "Sala de Estudos Individuais", 8, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(11, "Quadra de Basquete", 9, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(12, "Quadra de Vôlei", 9, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(13, "Sala de Projetos", 15, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(14, "Laboratório de Biologia", 15, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(15, "Laboratório de Física Avançada", 17, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(16, "Laboratório de Química Orgânica", 16, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(17, "Auditório Pequeno", 5, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(18, "Auditório Principal", 5, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(19, "Cozinha do Refeitório", 10, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(20, "Almoxarifado", 10, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(21, "Sala de Conferências Executiva", 18, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(22, "Área Externa do Ginásio", 9, "2024-11-07 21:17:24", "2024-11-07 21:17:24"),
	(23, "Sala de Imprensa", 18, "2024-11-07 21:18:24", "2024-11-07 21:18:24"),
	(24, "Sala de Equipamentos", 1, "2024-11-07 21:18:24", "2024-11-07 21:18:24"),
	(25, "Sala de Controle", 1, "2024-11-07 21:18:24", "2024-11-07 21:18:24"),
	(26, "Estúdio de Gravação", 1, "2024-11-07 21:18:24", "2024-11-07 21:18:24"),
	(27, "Espaço de Leitura Infantil", 6, "2024-11-07 21:18:24", "2024-11-07 21:18:24"),
	(28, "Espaço de Leitura para Jovens", 6, "2024-11-07 21:18:24", "2024-11-07 21:18:24"),
	(29, "Laboratório de Software", 7, "2024-11-07 21:18:24", "2024-11-07 21:18:24"),
	(30, "Laboratório de Hardware", 7, "2024-11-07 21:18:24", "2024-11-07 21:18:24"),
	(31, "Área de Recreação", 9, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(32, "Área de Ginástica", 9, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(33, "Espaço de Artes Cênicas", 19, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(34, "Auditório VIP", 5, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(35, "Cafeteria Executiva", 20, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(36, "Sala de Administração", 15, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(37, "Sala de Pesquisa Biológica", 15, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(38, "Laboratório de Análise de Dados", 15, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(39, "Sala de Aula Experimental", 11, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(40, "Sala de Projetos Avançados", 13, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(41, "Estacionamento de Visitantes", 21, "2024-11-07 21:18:25", "2024-11-07 21:18:25"),
	(42, "Estacionamento Coberto", 21, "2024-11-07 21:18:25", "2024-11-07 21:18:25");

/*!40000 ALTER TABLE `dependencia` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `items`;

CREATE TABLE `items` (
  `id_item` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descricao` text DEFAULT NULL,
  `categoria` int(11) NOT NULL,
  `cor` int(11) NOT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `local_perda` int(11) DEFAULT NULL,
  `dependencia_perda` int(11) DEFAULT NULL,
  `local_encontro` int(11) DEFAULT NULL,
  `dependencia_encontro` tinyint(11) DEFAULT NULL,
  `data_perda` datetime DEFAULT NULL,
  `data_entrada` datetime DEFAULT NULL,
  `data_devolucao` datetime DEFAULT NULL,
  `situacao` int(11) NOT NULL,
  `usuario_cadastrante` int(11) NOT NULL,
  `usuario_resgatante` int(11) DEFAULT NULL,
  `funcionario_devolucao` int(11) DEFAULT NULL,
  `usuario_perda` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_item`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;

INSERT INTO `items` (`id_item`, `titulo`, `descricao`, `categoria`, `cor`, `marca`, `local_perda`, `dependencia_perda`, `local_encontro`, `dependencia_encontro`, `data_perda`, `data_entrada`, `data_devolucao`, `situacao`, `usuario_cadastrante`, `usuario_resgatante`, `funcionario_devolucao`, `usuario_perda`, `createdAt`, `updatedAt`) VALUES
	(1, "Garrafa Térmica", "Garrafa térmica preta.", 1, 5, "Marca A", 1, NULL, 2, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(2, "Livro de Física", "Livro de física básica.", 2, 6, "Editora B", 2, NULL, 3, NULL, "2024-10-02 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(3, "Carteira de Identidade", "Carteira de identidade encontrada.", 4, 1, "N/A", 1, NULL, 1, NULL, "2024-10-05 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(4, "Caneta Preta", "Caneta preta encontrada na biblioteca.", 1, 5, "Marca C", 1, NULL, 2, NULL, "2024-10-03 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(5, "Bilhete de Transporte", "Bilhete de transporte perdido.", 5, 4, "N/A", 2, NULL, 3, NULL, "2024-10-06 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(6, "Carteira de Estudante", "Carteira de estudante encontrada.", 6, 1, "N/A", 1, NULL, 1, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(7, "Cartão de Crédito", "Cartão de crédito perdido.", 7, 10, "N/A", 2, NULL, 3, NULL, "2024-10-04 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(8, "Laptop HP", "Laptop encontrado na sala de aula.", 9, 11, "HP", 1, NULL, 2, NULL, "2024-10-02 00:00:00", "2024-10-13 19:08:52", NULL, 3, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(9, "Celular Samsung", "Celular encontrado no pátio.", 10, 1, "Samsung", 2, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(10, "Fone de Ouvido Bluetooth", "Fone de ouvido perdido.", 11, 1, "Marca D", 1, NULL, 2, NULL, "2024-10-03 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(11, "Mouse Sem Fio", "Mouse encontrado na sala de aula.", 12, 8, "Marca E", 1, NULL, 2, NULL, "2024-10-05 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(12, "Carregador de Laptop", "Carregador perdido.", 13, 5, "Marca F", 1, NULL, 1, NULL, "2024-10-02 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(13, "Tablet", "Tablet encontrado na biblioteca.", 14, 9, "Marca G", 2, NULL, 3, NULL, "2024-10-03 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(14, "Chaves do carro", "Chaves do carro encontradas.", 15, 1, "N/A", 1, NULL, 1, NULL, "2024-10-04 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(15, "Camiseta Branca", "Camiseta encontrada no vestiário.", 16, 6, "Marca H", 1, NULL, 2, NULL, "2024-10-05 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(16, "Calça Jeans", "Calça jeans perdida.", 17, 6, "Marca I", 2, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(17, "Saia Preta", "Saia encontrada no corredor.", 18, 7, "Marca J", 1, NULL, 1, NULL, "2024-10-02 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(18, "Casaco Azul", "Casaco encontrado na sala de aula.", 19, 4, "Marca K", 1, NULL, 2, NULL, "2024-10-03 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(19, "Boné Verde", "Boné perdido no pátio.", 20, 3, "Marca L", 1, NULL, 1, NULL, "2024-10-04 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(20, "Óculos de Sol", "Óculos de sol perdidos.", 21, 1, "Marca M", 2, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(21, "Tênis Preto", "Tênis encontrado na quadra.", 22, 5, "Marca N", 1, NULL, 2, NULL, "2024-10-02 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(22, "Mochila Vermelha", "Mochila encontrada no corredor.", 24, 1, "Marca O", 1, NULL, 2, NULL, "2024-10-03 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(23, "Bolsa de Mão", "Bolsa de mão perdida.", 24, 1, "Marca P", 2, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(24, "Material de Escritório", "Papel e canetas.", 25, 2, "N/A", 1, NULL, 1, NULL, "2024-10-04 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(25, "Caderno de Anotações", "Caderno com notas de aula.", 2, 5, "Marca Q", 2, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(26, "Bicicleta", "Bicicleta encontrada no estacionamento.", 23, 1, "Marca R", 1, NULL, 2, NULL, "2024-10-02 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(27, "Relógio", "Relógio encontrado na sala de aula.", 21, 1, "Marca S", 1, NULL, 1, NULL, "2024-10-03 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(28, "Copo Térmico", "Copo térmico azul.", 1, 4, "Marca T", 2, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(29, "Garrafa de Água", "Garrafa de água encontrada.", 1, 6, "Marca U", 1, NULL, 1, NULL, "2024-10-04 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(30, "Mochila de Costas", "Mochila de costas encontrada.", 24, 2, "Marca V", 1, NULL, 2, NULL, "2024-10-02 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(31, "Camiseta de Grife", "Camiseta de marca encontrada.", 16, 3, "Marca W", 2, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(32, "Lápis de Cor", "Lápis de cor encontrados.", 25, 1, "Marca X", 1, NULL, 1, NULL, "2024-10-04 00:00:00", "2024-10-13 19:08:52", NULL, 2, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(33, "Estojos", "Estojos de escola.", 25, 1, "Marca Y", 2, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:08:52", NULL, 1, 1, NULL, NULL, NULL, "2024-10-13 19:08:52", "2024-10-13 19:08:52"),
	(34, "Capa de Celular", "Capa de celular encontrada.", 10, 2, "Marca A", 5, NULL, 7, NULL, "2024-10-01 00:00:00", "2024-10-13 19:13:41", NULL, 2, 3, 2, 1, 4, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(35, "Caderno de Desenho", "Caderno de desenho perdido.", 2, 3, "Marca B", 1, NULL, 10, NULL, "2024-10-03 00:00:00", "2024-10-13 19:13:41", NULL, 1, 6, NULL, NULL, 5, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(36, "Fone de Ouvido com Fio", "Fone de ouvido com fio perdido.", 11, 4, "Marca C", 15, NULL, 12, NULL, "2024-10-02 00:00:00", "2024-10-13 19:13:41", NULL, 1, 7, NULL, 3, 3, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(37, "Roupa de Frio", "Roupa de frio encontrada.", 19, 6, "Marca D", 2, NULL, 1, NULL, "2024-10-04 00:00:00", "2024-10-13 19:13:41", NULL, 2, 5, 1, 1, 3, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(38, "Livro de Matemática", "Livro de matemática perdido.", 2, 5, "Editora E", 4, NULL, 6, NULL, "2024-10-05 00:00:00", "2024-10-13 19:13:41", NULL, 1, 8, NULL, NULL, 6, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(39, "Tablet Samsung", "Tablet encontrado na sala de aula.", 14, 10, "Samsung", 1, NULL, 3, NULL, "2024-10-01 00:00:00", "2024-10-13 19:13:41", NULL, 2, 9, 8, 3, 4, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(40, "Taco de Beisebol", "Taco de beisebol encontrado.", 23, 2, "Marca F", 19, NULL, 20, NULL, "2024-10-02 00:00:00", "2024-10-13 19:13:41", NULL, 2, 3, NULL, 5, 2, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(41, "Chaveiro", "Chaveiro encontrado na biblioteca.", 15, 1, "N/A", 12, NULL, 1, NULL, "2024-10-03 00:00:00", "2024-10-13 19:13:41", NULL, 1, 10, 7, NULL, 1, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(42, "Bolsa de Trabalho", "Bolsa de trabalho encontrada.", 24, 3, "Marca G", 11, NULL, 21, NULL, "2024-10-04 00:00:00", "2024-10-13 19:13:41", NULL, 2, 2, NULL, 8, 1, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(43, "Relógio de Pulso", "Relógio encontrado no corredor.", 21, 6, "Marca H", 8, NULL, 5, NULL, "2024-10-05 00:00:00", "2024-10-13 19:13:41", NULL, 2, 12, 4, 6, 5, "2024-10-13 19:13:41", "2024-10-13 19:13:41"),
	(44, "Mochila", "Mochila preta encontrada no pátio.", 24, 5, "Marca I", 9, NULL, 2, NULL, "2024-10-06 00:00:00", "2024-10-13 19:14:55", NULL, 2, 11, 9, 4, 5, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(45, "Camiseta Branca", "Camiseta branca perdida na sala de aula.", 16, 6, "Marca J", 3, NULL, 4, NULL, "2024-10-07 00:00:00", "2024-10-13 19:14:55", NULL, 1, 14, NULL, NULL, 2, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(46, "Garrafa de Água", "Garrafa de água encontrada na cantina.", 1, 10, "Marca K", 6, NULL, 8, NULL, "2024-10-06 00:00:00", "2024-10-13 19:14:55", NULL, 2, 12, 6, 3, 1, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(47, "Carregador de Laptop", "Carregador de laptop perdido.", 13, 8, "Marca L", 8, NULL, 11, NULL, "2024-10-08 00:00:00", "2024-10-13 19:14:55", NULL, 1, 3, NULL, 2, 5, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(48, "Caderno de Anotações", "Caderno de anotações encontrado.", 2, 4, "Marca M", 7, NULL, 16, NULL, "2024-10-09 00:00:00", "2024-10-13 19:14:55", NULL, 2, 9, NULL, 7, 2, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(49, "Chaves de Carro", "Chaves de carro encontradas no estacionamento.", 15, 2, "N/A", 14, NULL, 10, NULL, "2024-10-06 00:00:00", "2024-10-13 19:14:55", NULL, 1, 17, 2, 8, 3, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(50, "Óculos de Sol", "Óculos de sol perdidos durante o passeio.", 21, 9, "Marca N", 2, NULL, 12, NULL, "2024-10-07 00:00:00", "2024-10-13 19:14:55", NULL, 1, 15, NULL, 1, 4, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(51, "Tênis", "Tênis encontrado na quadra.", 22, 8, "Marca O", 1, NULL, 5, NULL, "2024-10-08 00:00:00", "2024-10-13 19:14:55", NULL, 2, 6, 10, 2, 3, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(52, "Agenda", "Agenda perdida na biblioteca.", 2, 3, "Marca P", 3, NULL, 19, NULL, "2024-10-06 00:00:00", "2024-10-13 19:14:55", NULL, 1, 11, NULL, NULL, 6, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(53, "Relógio", "Relógio encontrado na sala de aula.", 21, 6, "Marca Q", 18, NULL, 3, NULL, "2024-10-08 00:00:00", "2024-10-13 19:14:55", NULL, 2, 16, 14, 10, 5, "2024-10-13 19:14:55", "2024-10-13 19:14:55"),
	(54, "Carteira", "Carteira preta de couro com documentos", 3, 5, "Marca X", 6, NULL, NULL, NULL, "2024-11-06 00:00:00", NULL, NULL, 1, 22, NULL, NULL, 22, "2024-11-07 01:16:54", "2024-11-07 01:16:54"),
	(55, "Diario de Anne Frank", "Livro diario da A.F. capa vermelha", 2, 1, NULL, NULL, NULL, 1, 4, NULL, "2024-11-06 00:00:00", NULL, 2, 22, NULL, NULL, NULL, "2024-11-08 01:15:38", "2024-11-08 01:15:38"),
	(56, "Carregador Notebook", "carregador branco mac", 13, 6, "Apple", 7, NULL, NULL, NULL, "2024-11-06 00:00:00", NULL, NULL, 1, 22, NULL, NULL, 15, "2024-11-08 02:09:33", "2024-11-08 02:09:33"),
	(57, "Carregador Notebook", "carregador branco mac", 13, 6, "Apple", 7, NULL, NULL, NULL, "2024-11-06 00:00:00", NULL, NULL, 1, 22, NULL, NULL, 15, "2024-11-08 02:11:57", "2024-11-08 02:11:57"),
	(58, "Carregador Notebook", "carregador branco mac", 13, 6, "Apple", 7, 8, NULL, NULL, "2024-11-06 00:00:00", NULL, NULL, 1, 22, NULL, NULL, 15, "2024-11-08 02:15:19", "2024-11-08 02:15:19");

/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table locals
# ------------------------------------------------------------

DROP TABLE IF EXISTS `locals`;

CREATE TABLE `locals` (
  `id_local` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_local`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `locals` WRITE;
/*!40000 ALTER TABLE `locals` DISABLE KEYS */;

INSERT INTO `locals` (`id_local`, `titulo`, `createdAt`, `updatedAt`) VALUES
	(1, "Bloco A", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(2, "Bloco B", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(3, "Bloco C", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(4, "Bloco D", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(5, "Auditório", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(6, "Biblioteca", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(7, "Laboratório de Informática", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(8, "Sala de Estudo", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(9, "Ginásio Poliesportivo", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(10, "Refeitório", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(11, "Sala de Aula 101", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(12, "Sala de Aula 102", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(13, "Sala de Aula 201", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(14, "Sala de Aula 202", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(15, "Centro de Pesquisa", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(16, "Laboratório de Química", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(17, "Laboratório de Física", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(18, "Sala de Conferências", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(19, "Espaço de Eventos", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(20, "Cafeteria", "2024-10-13 18:25:53", "2024-10-13 18:25:53"),
	(21, "Estacionamento", "2024-10-13 18:25:53", "2024-10-13 18:25:53");

/*!40000 ALTER TABLE `locals` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table status_items
# ------------------------------------------------------------

DROP TABLE IF EXISTS `status_items`;

CREATE TABLE `status_items` (
  `id_status_item` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_status_item`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `status_items` WRITE;
/*!40000 ALTER TABLE `status_items` DISABLE KEYS */;

INSERT INTO `status_items` (`id_status_item`, `titulo`, `createdAt`, `updatedAt`) VALUES
	(1, "perdido", "2024-10-13 18:22:12", "2024-10-13 18:22:12"),
	(2, "encontrado", "2024-10-13 18:22:12", "2024-10-13 18:22:12"),
	(3, "devolvido", "2024-10-13 18:22:12", "2024-10-13 18:22:12");

/*!40000 ALTER TABLE `status_items` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table turnos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `turnos`;

CREATE TABLE `turnos` (
  `id_turno` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_turno`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `turnos` WRITE;
/*!40000 ALTER TABLE `turnos` DISABLE KEYS */;

INSERT INTO `turnos` (`id_turno`, `titulo`, `createdAt`, `updatedAt`) VALUES
	(1, "matutino", "2024-10-17 15:50:28", "2024-10-17 15:50:28"),
	(2, "vespertino", "2024-10-17 15:50:28", "2024-10-17 15:50:28"),
	(3, "noturno", "2024-10-17 15:50:28", "2024-10-17 15:50:28"),
	(4, "Integral", "2024-11-06 00:00:00", "2024-11-06 00:00:00");

/*!40000 ALTER TABLE `turnos` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of table usuarios
# ------------------------------------------------------------

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `turno` int(11) DEFAULT NULL,
  `curso` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;

INSERT INTO `usuarios` (`id_usuario`, `nome`, `email`, `senha`, `telefone`, `turno`, `curso`, `status`, `admin`, `createdAt`, `updatedAt`) VALUES
	(1, "João Silva", "joao.silva@example.com", "senha123", "11999999999", 1, 5, 1, 0, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(2, "Maria Oliveira", "maria.oliveira@example.com", "senha123", "21988888888", 2, NULL, 1, 0, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(3, "Carlos Souza", "carlos.souza@example.com", "senha123", "31977777777", 0, 10, 0, 1, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(4, "Ana Costa", "ana.costa@example.com", "senha123", "41966666666", NULL, 3, 1, 0, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(5, "Luiz Pereira", "luiz.pereira@example.com", "senha123", "51955555555", 1, 8, 1, 0, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(6, "Fernanda Almeida", "fernanda.almeida@example.com", "senha123", "61944444444", 2, 15, 0, 1, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(7, "Rafael Lima", "rafael.lima@example.com", "senha123", "71933333333", NULL, NULL, 1, 0, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(8, "Beatriz Ramos", "beatriz.ramos@example.com", "senha123", "81922222222", 0, 12, 1, 1, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(9, "Pedro Martins", "pedro.martins@example.com", "senha123", "91911111111", 2, NULL, 0, 0, "2024-10-13 18:19:08", "2024-10-13 18:19:08"),
	(10, "Juliana Ferreira", "juliana.ferreira@example.com", "senha123", "11900000000", 1, 7, 1, 1, "2024-10-13 18:19:08", "2024-10-13 18:19:08");

/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;



# Dump of views
# ------------------------------------------------------------

# Creating temporary tables to overcome VIEW dependency errors


/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

# Dump completed on 2024-11-07T23:17:43-03:00
