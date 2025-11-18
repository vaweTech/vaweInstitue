-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Training" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "embedding" JSONB
);
INSERT INTO "new_Training" ("answer", "embedding", "id", "question") SELECT "answer", "embedding", "id", "question" FROM "Training";
DROP TABLE "Training";
ALTER TABLE "new_Training" RENAME TO "Training";
CREATE UNIQUE INDEX "Training_question_key" ON "Training"("question");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
