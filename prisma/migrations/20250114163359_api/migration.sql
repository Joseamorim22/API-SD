-- RedefineIndex
CREATE UNIQUE INDEX `utilizador_email_key` ON `utilizador`(`email`);
DROP INDEX `Utilizador_email_key` ON `utilizador`;
