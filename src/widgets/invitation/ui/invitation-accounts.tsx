import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  accordionDetailsClasses,
  AccordionGroup,
  AccordionSummary,
  accordionSummaryClasses,
  Stack,
  Typography,
} from '@mui/joy';
import { AnimatedSection, SectionHeader } from '@/entities/invitation';

function AccountAccordion({
  isExpanded,
  handleChange,
}: {
  isExpanded: boolean;
  handleChange: () => void;
}) {
  return (
    <Accordion
      sx={{ width: '90%', backgroundColor: '#eeeeee', borderRadius: 8 }}
      expanded={isExpanded}
      onChange={handleChange}
    >
      <AccordionSummary sx={{ paddingBlock: '0.7rem' }}>
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: '#ffffff',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Typography>This is the first panel&#39;s content.</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export function InvitationAccounts() {
  const [accordionStates, setAccordionStates] = useState<boolean[]>([false, false]);

  const handleAccordionStates = (index: number) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'ACCOUNT'} korTitle={'마음 전하실 곳'} />
      </AnimatedSection>

      <AnimatedSection>
        <AccordionGroup
          disableDivider
          sx={() => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            width: '100%',
            [`& .${accordionSummaryClasses.button}:hover`]: {
              bgcolor: 'transparent',
            },
            [`& .${accordionSummaryClasses.button}:active`]: {
              bgcolor: 'transparent',
            },
            [`& .${accordionSummaryClasses.button}:focus`]: {
              bgcolor: 'transparent',
            },
            [`& .${accordionDetailsClasses.content}`]: {
              [`&.${accordionDetailsClasses.expanded}`]: {
                paddingBlock: '0.75rem',
              },
            },
          })}
          transition={{
            initial: '0.3s ease-out',
            expanded: '0.3s ease',
          }}
        >
          {accordionStates.map((isExpanded, index) => (
            <AccountAccordion
              key={index}
              isExpanded={isExpanded}
              handleChange={() => handleAccordionStates(index)}
            />
          ))}
        </AccordionGroup>
      </AnimatedSection>
    </Stack>
  );
}
