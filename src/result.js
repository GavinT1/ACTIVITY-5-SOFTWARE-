export function resultLabel(score) {
  if (score < 0 || score > 100) {
    return 'Invalid score';
  }
  if (score >= 75) {
    return 'Passed';
  }
  return 'Needs improvement';
}

