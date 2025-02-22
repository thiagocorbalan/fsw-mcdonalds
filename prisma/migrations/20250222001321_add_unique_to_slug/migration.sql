/*
  Warnings:

  - A unique constraint covering the columns `[slug_url]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_slug_url_key" ON "Restaurant"("slug_url");
