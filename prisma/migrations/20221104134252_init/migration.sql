-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "address" TEXT,
    "chainId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
