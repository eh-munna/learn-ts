{
  type Player = 'player';
  type Bowler = Player | 'bowler';
  type Batter = Player | 'batter';

  type AllRounder = Bowler | Batter;
  const allRounder: AllRounder = 'batter';
}
