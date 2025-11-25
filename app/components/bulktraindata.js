"use client";
import { useState } from "react";

export default function BulkTrainingUploader() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const upload = async (event) => {
    event.preventDefault();
    setError(null);
    setStatus(null);

    const file = event.currentTarget.csv?.files?.[0];
    if (!file) {
      setError("Please choose a CSV file before uploading.");
      return;
    }

    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/training/bulk", {
        method: "POST",
        body: formData,
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.error || "Upload failed");
      }

      setStatus(`Uploaded ${payload.inserted ?? 0} rows successfully.`);
      event.currentTarget.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={upload}
      className="space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm"
    >
      <div>
        <h2 className="text-xl font-semibold">Bulk Train Your Chatbot</h2>
        <p className="text-sm text-gray-500">
          Upload a CSV with <code>question,answer</code> columns to add entries
          in bulk.
        </p>
      </div>

      <input
        type="file"
        name="csv"
        accept=".csv"
        className="w-full rounded border border-gray-300 p-2 text-sm"
        disabled={isSubmitting}
        required
      />

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Uploading..." : "Upload CSV"}
      </button>

      {status && (
        <p className="text-sm text-green-600" role="status">
          {status}
        </p>
      )}
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
