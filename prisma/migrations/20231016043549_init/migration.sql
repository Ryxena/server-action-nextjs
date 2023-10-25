-- CreateTable
CREATE TABLE `Kandidat` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,

    UNIQUE INDEX `Kandidat_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
