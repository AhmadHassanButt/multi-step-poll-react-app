import React, { useMemo } from 'react';
import { IconButton, Box, Tooltip, styled } from '@mui/material';
import { motion } from 'framer-motion'; 

export const PollOptions = ({ onOptionClick, OptList}) => {
  const optionsMarkup = useMemo(
    () =>
      OptList.map(({ Icon, label, isSelected }, index) => (
        <Box key={index}>
          <Tooltip title={label} placement="top">
            <motion.div
              style={{ cursor: "pointer" }}
              whileHover={{ scale: 1.1 }}
            >
              <StyledIconButton
                background={isSelected ? "rgba(0, 0, 0, 0.04)" : ""}
                onClick={onOptionClick}
                value={label}
                data-testid={`thumbsUp-${index}`}
              >
                <Icon />
              </StyledIconButton>
            </motion.div>
          </Tooltip>
          {isSelected && <Box>{label}</Box>}
        </Box>
      )),
    [OptList, onOptionClick]
  );

  return <StyledBox>{optionsMarkup}</StyledBox>;
};

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (propName) => propName !== 'background',
})(({ background = '' }) => ({
  background,
  textDecoration: 'none',
}));
