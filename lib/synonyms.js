  export const synonyms = {
    duration: ["time", "long", "period", "length", "how long", "duration"],
    fees: ["price", "cost", "charges", "payment", "fee"],
    course: ["training", "class", "program", "module"],
    placement: ["job", "jobs", "interview", "support", "career"],
    contact: ["phone", "mobile", "call", "reach"],
    start: ["begin", "commence", "opening", "batch start", "when start"],
  };
  

  // Levenshtein Distance for fuzzy matching
export function levenshtein(a, b) {
    const m = [];
  
    for (let i = 0; i <= b.length; i++) m[i] = [i];
    for (let j = 0; j <= a.length; j++) m[0][j] = j;
  
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        m[i][j] =
          b.charAt(i - 1) === a.charAt(j - 1)
            ? m[i - 1][j - 1]
            : Math.min(
                m[i - 1][j - 1] + 1,
                m[i][j - 1] + 1,
                m[i - 1][j] + 1
              );
      }
    }
    return m[b.length][a.length];
  }
  
  // Convert similarity into 0–1 range
  export function similarity(a, b) {
    const dist = levenshtein(a, b);
    const maxLen = Math.max(a.length, b.length);
    return 1 - dist / maxLen;
  }
  