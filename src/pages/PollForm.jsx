import React, { useCallback, useState, useMemo } from 'react';
import { Box, Grid, Typography, Button } from "@mui/material";
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

export const PollApp = () => {
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
        <>
          <Box>
            <Typography variant="h4">
              Congratulations, your feedback is submitted.
            </Typography>
          </Box>
          <Box>
            <Button
              color="secondary"
              onClick={handleRefresh}
              variant="outlined"
            >
              Go Back
            </Button>
          </Box>
        </>
      ) : (
        <Carousel setCurrentStep={setCurrentStep}>{questionsMarkup}</Carousel>
      )}
    </Grid>
  );
};
