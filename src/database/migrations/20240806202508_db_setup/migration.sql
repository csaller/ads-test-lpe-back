-- CreateTable
CREATE TABLE "veiculo" (
    "id" SERIAL NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "preco" INTEGER NOT NULL,
    "url_foto" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Proposta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "proposta" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "veiculo_id" INTEGER NOT NULL,

    CONSTRAINT "Proposta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proposta_email_key" ON "Proposta"("email");

-- AddForeignKey
ALTER TABLE "Proposta" ADD CONSTRAINT "Proposta_veiculo_id_fkey" FOREIGN KEY ("veiculo_id") REFERENCES "veiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
