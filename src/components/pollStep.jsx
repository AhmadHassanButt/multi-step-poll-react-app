import React, { useMemo }from 'react';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import { PollOptions } from './pollOptions';
import ThinkingFace from '../assets/thinkingFace';
import ThumbsDown from '../assets/thumbsDown';
import ThumbsUp from '../assets/thumbsUp';
import { REACTIONS } from '../constants';

export const PollStep = ({ question, onIconClick, selectedOptions, onSubmit}) => {
  const OptList = useMemo(
    () => [
      {
        Icon: ThumbsUp,
        isSelected: selectedOptions[question] === REACTIONS.GOOD,
        label: REACTIONS.GOOD,
      },
      {
        Icon: ThinkingFace,
        isSelected: selectedOptions[question] === REACTIONS.THINKING,
        label: REACTIONS.THINKING,
      },
      {
        Icon: ThumbsDown,
        label: REACTIONS.BAD,
        isSelected: selectedOptions[question] === REACTIONS.BAD,
      },
    ],
    [question, selectedOptions]
  );

  const rightSectionMarkup = useMemo(() => (
    <Box sx={{ marginBottom: "20px" }}>
      {!Object.keys(selectedOptions).length ? (
        <CustomItems>
          <Typography>No Question is Answered yet</Typography>
        </CustomItems>
      ) : (
        Object.keys(selectedOptions)?.map((question, index) => (
          <CustomItems key={index}>
            <Typography>Question: {question}</Typography>
            <Typography>Answer:{selectedOptions[question]}</Typography>
          </CustomItems>
        ))
      )}
    </Box>
  ), [selectedOptions]);
      
  return (
    <CustomGrid container spacing={2}>
      <LeftSection item xs={6}>
        <StyledTypography>{question}</StyledTypography>
      </LeftSection>
      <RightSection item xs={6}>
        {question !== "Summary" ? (
          <PollOptions onOptionClick={onIconClick} OptList={OptList} />
        ) : (
          <Box>
            {rightSectionMarkup}
            <Box>
              <Button
                disabled={!Object.keys(selectedOptions).length}
                onClick={() => onSubmit(selectedOptions)}
                variant={"contained"}
              >
                Submit
              </Button>
            </Box>
          </Box>
        )}
      </RightSection>
    </CustomGrid>
  );
};

const CustomGrid = styled(Grid)({
  height: "100vh",
  width: "100vw",
});

const CustomItems = styled(Box)({
  alignItems: "flex-start",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ccc",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
  padding: "10px",
});

const LeftSection = styled(Grid)({
  alignItems: 'center',
  backgroundColor: 'blue',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  padding: '20px',
});

const RightSection = styled(Grid)({
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  padding: '20px',
});

const StyledTypography = styled(Typography)({
  color: "white",
  fontSize: "50px",
  fontWeight: "bold",
  padding: "0 5px",
});
