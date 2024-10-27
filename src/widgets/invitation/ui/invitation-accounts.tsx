import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  accordionDetailsClasses,
  AccordionGroup,
  AccordionSummary,
  accordionSummaryClasses,
  Box,
  Divider,
  Stack,
  Typography,
} from '@mui/joy';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { AnimatedSection, marriedPersons, SectionHeader } from '@/entities/invitation';
import { OutlinedButton, SolidButton } from '@/shared/ui';
import KakaoPayIcon from '@/shared/assets/images/kakao-pay-icon.svg?react';

function AccountAccordion({
  accordionTitle,
  accounts,
  isExpanded,
  handleChange,
}: {
  accordionTitle: string;
  accounts: {
    bank: string;
    accountHolder: string;
    accountNumber: string;
  }[];
  isExpanded: boolean;
  handleChange: () => void;
}) {
  return (
    <Accordion
      sx={{ width: '90%', backgroundColor: '#eaeaea', borderRadius: 8 }}
      expanded={isExpanded}
      onChange={handleChange}
    >
      <AccordionSummary sx={{ paddingBlock: '0.7rem' }}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 700 }}>{accordionTitle}</Typography>
          <ExpandMoreIcon
            sx={{
              position: 'absolute',
              right: 0,
              transition: 'transform 0.3s ease',
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              marginLeft: 'auto',
              fontSize: 22,
            }}
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: '#ffffff',
        }}
      >
        {accounts.map((account, index) => {
          return (
            <Stack key={index} sx={{ position: 'relative', width: '100%' }}>
              <Stack sx={{ width: '100%', p: 1.4, gap: 0.8 }}>
                <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', gap: 1.4 }}>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 800 }}>
                    {account.bank}
                  </Typography>
                  <Divider
                    orientation={'vertical'}
                    sx={{ height: 20, alignSelf: 'center', backgroundColor: '#dddddd' }}
                  />
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 800 }}>
                    {account.accountNumber}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.8rem', fontWeight: 800 }}>
                  {account.accountHolder}
                </Typography>
              </Stack>
              {index !== accounts.length - 1 && <Divider />}

              <Stack sx={{ position: 'absolute', width: 80, top: 4, right: 10, gap: 0.6 }}>
                <OutlinedButton
                  sx={{ minHeight: 0, height: 28, color: '#333333', fontSize: '0.8rem' }}
                  buttonColor={'#dddddd'}
                  startDecorator={<ContentCopyIcon sx={{ color: '#333333', fontSize: 14 }} />}
                >
                  복사
                </OutlinedButton>
                <SolidButton
                  sx={{ minHeight: 0, height: 28, paddingBlock: 0 }}
                  buttonColor={'#ffe000'}
                  noHighlight={true}
                >
                  <KakaoPayIcon style={{ width: '100%', height: '100%', display: 'block' }} />
                </SolidButton>
              </Stack>
            </Stack>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export function InvitationAccounts() {
  const [accordionStates, setAccordionStates] = useState([
    {
      expanded: false,
      accordionTitle: '신랑측 계좌번호',
      accounts: [
        marriedPersons.groom.account,
        marriedPersons.groomsFather.account,
        marriedPersons.groomsMother.account,
      ],
    },
    {
      expanded: false,
      accordionTitle: '신부측 계좌번호',
      accounts: [
        marriedPersons.bride.account,
        marriedPersons.bridesFather.account,
        marriedPersons.bridesMother.account,
      ],
    },
  ]);

  const handleAccordionStates = (index: number) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index].expanded = !newAccordionStates[index].expanded;
    setAccordionStates(newAccordionStates);
  };

  return (
    <Stack component={'section'} sx={{ width: '100%', alignItems: 'center', gap: 3 }}>
      <AnimatedSection>
        <SectionHeader engTitle={'ACCOUNT'} korTitle={'마음 전하실 곳'} />
      </AnimatedSection>

      <AnimatedSection>
        <Stack sx={{ width: '100%', alignItems: 'center' }}>
          <Typography
            sx={{
              color: '#666666',
              fontSize: '0.9rem',
              fontWeight: 700,
              width: '100%',
              textAlign: 'center',
              lineHeight: 2,
            }}
          >
            직접 참석이 어려우신 분들을 위해
            <br />
            계좌번호를 함께 안내드립니다.
            <br />
            너그러운 양해 부탁드립니다.
          </Typography>
        </Stack>
      </AnimatedSection>

      <AnimatedSection>
        <AccordionGroup
          disableDivider
          sx={() => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            width: '100%',
            [`& .MuiAccordionSummary-indicator`]: {
              display: 'none',
            },
            [`& .${accordionSummaryClasses.button}:hover`]: {
              bgcolor: 'transparent !important',
            },
            [`& .${accordionSummaryClasses.button}:active`]: {
              bgcolor: 'transparent !important',
            },
            [`& .${accordionSummaryClasses.button}:focus`]: {
              bgcolor: 'transparent !important',
            },
            [`& .${accordionDetailsClasses.content}`]: {
              padding: 0,
              [`&.${accordionDetailsClasses.expanded}`]: {
                borderLeft: '1px solid #dddddd',
                borderRight: '1px solid #dddddd',
                borderBottom: '1px solid #dddddd',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              },
            },
          })}
          transition={{
            initial: '0.3s ease-out',
            expanded: '0.3s ease',
          }}
        >
          {accordionStates.map((accordionState, index) => (
            <AccountAccordion
              key={index}
              accordionTitle={accordionState.accordionTitle}
              accounts={accordionState.accounts}
              isExpanded={accordionState.expanded}
              handleChange={() => handleAccordionStates(index)}
            />
          ))}
        </AccordionGroup>
      </AnimatedSection>
    </Stack>
  );
}