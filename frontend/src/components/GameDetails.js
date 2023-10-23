import React, { startTransition, Suspense } from 'react';

import { Grid, Typography } from '@mui/material';
import { styled, width } from '@mui/system';

import * as NFLLogos from 'react-nfl-logos';
import LoadingIndicator from '../util/LoadingIndicator';

import BetBox from "./BetBox"

// import "../css/GameDetails.css"

const GameDetails = ({ game }) => {
    // Destructure game properties
    const {
        game_id,
        date,
        sport,
        away_team,
        home_team,
        away_odds,
        home_odds,
        away_spread,
        away_spread_odds,
        home_spread,
        home_spread_odds,
        total,
        over_odds,
        under_odds,
        best_bet_type,
        best_bet_edge,
    } = game;

    const teamToComponent = {
      'San Francisco 49ers': NFLLogos.SF,
      'Arizona Cardinals': NFLLogos.ARI,
      'Atlanta Falcons': NFLLogos.ATL,
      'Baltimore Ravens': NFLLogos.BAL,
      'Buffalo Bills': NFLLogos.BUF,
      'Carolina Panthers': NFLLogos.CAR,
      'Chicago Bears': NFLLogos.CHI,
      'Cincinnati Bengals': NFLLogos.CIN,
      'Cleveland Browns': NFLLogos.CLE,
      'Dallas Cowboys': NFLLogos.DAL,
      'Denver Broncos': NFLLogos.DEN,
      'Detroit Lions': NFLLogos.DET,
      'Green Bay Packers': NFLLogos.GB,
      'Houston Texans': NFLLogos.HOU,
      'Indianapolis Colts': NFLLogos.IND,
      'Jacksonville Jaguars': NFLLogos.JAX,
      'Kansas City Chiefs': NFLLogos.KC,
      'Los Angeles Chargers': NFLLogos.LAC,
      'Los Angeles Rams': NFLLogos.LAR,
      'Las Vegas Raiders': NFLLogos.LV,
      'Miami Dolphins': NFLLogos.MIA,
      'Minnesota Vikings': NFLLogos.MIN,
      'New England Patriots': NFLLogos.NE,
      'New Orleans Saints': NFLLogos.NO,
      'New York Giants': NFLLogos.NYG,
      'New York Jets': NFLLogos.NYJ,
      'Philadelphia Eagles': NFLLogos.PHI,
      'Pittsburgh Steelers': NFLLogos.PIT,
      'Seattle Seahawks': NFLLogos.SEA,
      'Tampa Bay Buccaneers': NFLLogos.TB,
      'Tennessee Titans': NFLLogos.TEN,
      'Washington Commanders': NFLLogos.WAS,
    };
    

    function TeamComponent({ teamName }) {
      // Check if teamName is a valid key in the mapping
      if (teamName in teamToComponent) {
        const Component = teamToComponent[teamName];
    
        return (
          <Suspense fallback={<LoadingIndicator />}>
            <Component />
          </Suspense>
        );
      } else {
        // Handle the case where teamName is not in the mapping
        return <div>Invalid team name</div>;
      }
    }

    const NflIcon = styled('img')({
      width: '100%',
      height: '100px',
    })

    const TimeStyle = styled(Typography)({
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: '#ffffff',
    })

    const TeamName = styled(Typography)({
        fontWeight: 'bold',
        fontSize: '1.2em',
        color: '#ffffff',
    })
    
    // const BetBox = styled.div`
    // width: 80px; // adjust as per your design
    // height: 40px; // adjust as per your design
    // border: 2px solid white; // adjust color as needed
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding: 5px;
    // `;

    const getSpreadColor = (spread) => (spread > 0 ? "green" : "red");
    const getMoneyLineColor = (ml) => (ml > 0 ? "green" : "red");


    const StyledGridContainer = styled(Grid)({
      display: 'flex',
      flexWrap: 'wrap',
      border: '1px solid #E0E0E0',
      borderRadius: '1px',
      boxSizing: 'border-box', // This ensures that the border doesn't add to the overall width/height
    });
    
    const StyledBetBox = styled(BetBox)({
      color: '#ffffff',
      border: '2px solid #E0E0E0',
      borderRadius: '5px',  // Adjusted to match your image
      width: '50px',
      height: '40px',
      flexDirection: 'column',  // Stack content vertically
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0px',
      ":hover" : {border: '2px solid #000000'}
    });

    const LogoContainer = styled(Grid)({
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',  // Space between logos
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '50px',
    });
    
    
    const NameContainer = styled(Grid)({
      minWidth: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '70px',  // Space between names
      justifyContent: 'center',
      alignItems: 'center'
    });

    const BetOptionsContainer = styled(Grid)({
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'  // Space between TeamBetContainers
    });
    
    const TeamBetContainer = styled(Grid)({
      display: 'flex',
      flexDirection: 'row',
      gap: '0px',  // Space between BetBoxes
      justifyContent: 'center',
      alignItems: 'center'
    });
    
    const runningGamesContainer = styled('div')({
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',  // Space between BetBoxes
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '1px solid #E0E0E0',
      paddingBottom: '10px',
      marginBottom: '10px',
      border: '2px solid #E0E0E0',
      borderRadius: '5px',  // Adjusted to match your image
    });
    

    return (
      // <GameDetailsContainer>
      //   <Grid container spacing={2} alignItems="center">
      //     <Grid item xs={1}>
      //       <NflIcon src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg" alt="NFL Logo" />
      //     </Grid>
      //     <Grid item>
      //       <Typography variant="h6">
      //         {sport === "nfl" ? "" : `${sport} Games`}
      //       </Typography>
      //     </Grid>
      //     <Grid item xs={12}>
      //       <TimeStyle variant="subtitle1">
      //         {date}
      //       </TimeStyle>
      //     </Grid>
      
      //     <Grid container direction="row" justifyContent="space-between">

      //       {/* Away team details */}
      //       <Grid container item spacing={5} alignItems="center">
      //         <Grid item>
      //           <TeamComponent teamName={away_team} />
      //         </Grid>
      //         <Grid item spacing={15}>
      //           <TeamName variant="h6">
      //             {away_team}
      //           </TeamName>
      //         </Grid>
      //         <StyledGridItem>
      //           <StyledBetBox bet_type={'away_spread'} away_spread={away_spread} away_spread_odds={away_spread_odds} />
      //         </StyledGridItem>
      //         <StyledGridItem>
      //           <StyledBetBox bet_type={'moneyline_away'} away_odds={away_odds} />
      //         </StyledGridItem>
      //         <StyledGridItem>
      //           <StyledBetBox bet_type={'total_over'} total={total} over_odds={over_odds} />
      //         </StyledGridItem>
      //       </Grid>

      //       {/* Home team details */}
      //       <Grid container item spacing={5} alignItems="center">
      //         <Grid item>
      //           <TeamComponent teamName={home_team} />
      //         </Grid>
      //         <Grid item>
      //           <TeamName variant="h6">
      //             {home_team}
      //           </TeamName>
      //         </Grid>
      //         <StyledGridItem>
      //           <StyledBetBox bet_type={'home_spread'} home_spread={home_spread} home_spread_odds={home_spread_odds} color={getSpreadColor(home_spread)} />
      //         </StyledGridItem>
      //         <StyledGridItem>
      //           <StyledBetBox bet_type={'moneyline_home'} home_odds={home_odds} />
      //         </StyledGridItem>
      //         <StyledGridItem>
      //           <StyledBetBox bet_type={'total_under'} total={total} under_odds={under_odds} />
      //         </StyledGridItem>
      //       </Grid>

      //     </Grid>
      //   </Grid>

      // </GameDetailsContainer>
      <StyledGridContainer container spacing={0} alignItems="center" justifyContent="center" style={{border: '1px solid #E0E0E0', padding: 0, margin: 0, boxSizing: 'border-box'}}>
        <LogoContainer>
          <TeamComponent teamName={away_team} />
          <TeamComponent teamName={home_team} />
        </LogoContainer>

        <NameContainer>
          <TeamName variant="h6">{away_team}</TeamName>
          <TeamName variant="h6">{home_team}</TeamName>
        </NameContainer>

        <BetOptionsContainer>
          <TeamBetContainer>
            <StyledBetBox bet_type={'away_spread'} away_spread={away_spread} away_spread_odds={away_spread_odds} />
            <StyledBetBox bet_type={'moneyline_away'} away_odds={away_odds} />
            <StyledBetBox bet_type={'total_over'} total={total} over_odds={over_odds} />
          </TeamBetContainer>

          <TeamBetContainer>
            <StyledBetBox bet_type={'home_spread'} home_spread={home_spread} home_spread_odds={home_spread_odds} color={getSpreadColor(home_spread)} />
            <StyledBetBox bet_type={'moneyline_home'} home_odds={home_odds} />
            <StyledBetBox bet_type={'total_under'} total={total} under_odds={under_odds} />
          </TeamBetContainer>
        </BetOptionsContainer>
      </StyledGridContainer>
    )
}

export default GameDetails;