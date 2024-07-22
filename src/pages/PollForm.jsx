import React, { useCallback, useState, useMemo } from 'react';
import { Box, Grid, Typography, Button, styled } from "@mui/material";
import { Carousel, PollStep } from '../components';
import { useOnSubmit } from '../hooks/useOnSubmit';
import { Loader } from '../components/loader';

const Questions = [
  'How are you doing?', 
  'How is weather in your city?', 
  'How is your breakfast?', 
  'How do you feel after offering prayer?', 
  'Summary'
];

export const PollForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const { result, handleSubmit, loading } = useOnSubmit();

  const handleOptionSelect = useCallback((event) => {
    setSelectedOptions((prevOptions) => ({...prevOptions, [Questions[currentStep]]: event.currentTarget.value}));
  }, [currentStep]);

  const questionsMarkup = useMemo(
    () =>
      Questions.map((question, index) => (
        <Box key={index}>
          <PollStep
            onIconClick={handleOptionSelect}
            onSubmit={handleSubmit}
            question={question}
            selectedOptions={selectedOptions}
          />
        </Box>
      )),
    [handleOptionSelect, handleSubmit, selectedOptions]
  );

  const handleRefresh = useCallback(() => {
    window.location.reload();
  }, [])

  if (loading) {
    return (
      <><Loader/></>
    );
  }
  
  return (
    <Grid container>
      {result ? (
        <StyledCongoBox>
          <Box>
            <Typography variant="h4">
              Congratulations, your feedback is submitted.
            </Typography>
          </Box>
          <ButtonWrapper>
            <Button
              color="secondary"
              onClick={handleRefresh}
              variant="contained"
            >
              Go Back
            </Button>
          </ButtonWrapper>
        </StyledCongoBox>
      ) : (
        <Carousel setCurrentStep={setCurrentStep}>{questionsMarkup}</Carousel>
      )}
    </Grid>
  );
};

const StyledCongoBox = styled(Box)({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    width: "100vw",
})

const ButtonWrapper = styled(Box)({
 marginTop: "20px",
})
