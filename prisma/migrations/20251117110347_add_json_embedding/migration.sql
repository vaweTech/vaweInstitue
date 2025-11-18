/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Training` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Training" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "embedding" JSONB
);
INSERT INTO "new_Training" ("answer", "id", "question") SELECT "answer", "id", "question" FROM "Training";
DROP TABLE "Training";
ALTER TABLE "new_Training" RENAME TO "Training";
CREATE UNIQUE INDEX "Training_question_key" ON "Training"("question");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
