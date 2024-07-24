// O(n) time | O(k) space
const HOME_TEAM_WON = 1;

export const tournamentWinner = (
  competitors: string[][],
  results: number[]
): string => {
  let currentBestTeam = '';
  const scores: { [key: string]: number } = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitors.length; i++) {
    let result = results[i];
    const [homeTeam, awayTeam] = competitors[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 5, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
};

const updateScores = (
  team: string,
  points: number,
  scores: { [key: string]: number }
) => {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
};
