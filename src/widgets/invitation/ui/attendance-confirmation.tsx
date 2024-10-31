import { useLayoutEffect, useRef, useState } from 'react';
import { Box, Stack, Typography } from '@mui/joy';

import { CustomedFormControl, FuturRadioGroup, OutlinedInput, SolidButton } from '@/shared/ui';
import { TranslucentMobileModal } from '@/shared/components';

export function AttendanceConfirmationModal({
  isAttendanceConfirmationOpen,
  onClose,
}: {
  isAttendanceConfirmationOpen: boolean;
  onClose: () => void;
}) {
  const stackRef = useRef<HTMLDivElement>(null);
  const [, setStackWidth] = useState(200);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (stackRef.current) {
        setStackWidth(stackRef.current.offsetWidth);
      }
    };
    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (stackRef.current) {
      resizeObserver.observe(stackRef.current);
    }

    return () => {
      if (stackRef.current) {
        resizeObserver.unobserve(stackRef.current);
      }
    };
  }, []);

  return (
    <TranslucentMobileModal
      title={
        <Stack>
          <Typography sx={{ color: '#333333', fontSize: '1.1rem', fontWeight: 800 }}>
            참석의사 전달
          </Typography>
        </Stack>
      }
      isOpen={isAttendanceConfirmationOpen}
      onClose={onClose}
      sx={{ backgroundColor: '#ffffff' }}
      closeIconColor={'#999999'}
    >
      <Stack
        ref={stackRef}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          py: 3,
          gap: 3,
        }}
      >
        <CustomedFormControl label={'참석 가능 여부'}>
          {/*<ToggleButtonGroup*/}
          {/*  label={''}*/}
          {/*  options={[*/}
          {/*    { key: 1, value: '가능' },*/}
          {/*    { key: 2, value: '불가능' },*/}
          {/*  ]}*/}
          {/*  colors={{*/}
          {/*    1: '#81b631',*/}
          {/*    2: '#f15151',*/}
          {/*  }}*/}
          {/*  groupKey={1}*/}
          {/*  buttonWidth={stackWidth / 2}*/}
          {/*/>*/}
          <FuturRadioGroup
            defaultValue={1}
            options={[
              { key: 1, value: 1, label: '가능' },
              { key: 2, value: 2, label: '불가능' },
            ]}
            color={'neutral'}
          />
        </CustomedFormControl>
        <CustomedFormControl label={'하객 구분'}>
          {/*<ToggleButtonGroup*/}
          {/*  label={''}*/}
          {/*  options={[*/}
          {/*    { key: 1, value: '신랑측' },*/}
          {/*    { key: 2, value: '신부측' },*/}
          {/*  ]}*/}
          {/*  colors={{*/}
          {/*    1: '#3891ec',*/}
          {/*    2: '#ec77ad',*/}
          {/*  }}*/}
          {/*  groupKey={1}*/}
          {/*  buttonWidth={stackWidth / 2}*/}
          {/*/>*/}
          <FuturRadioGroup
            defaultValue={1}
            options={[
              { key: 1, value: 1, label: '신랑측' },
              { key: 2, value: 2, label: '신부측' },
            ]}
            color={'neutral'}
          />
        </CustomedFormControl>
        <CustomedFormControl label={'성함'} required={true}>
          <OutlinedInput
            sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            focusWithin={false}
            placeholder={'대표자 한 분의 성함을 입력해 주세요.'}
          />
        </CustomedFormControl>
        <CustomedFormControl label={'연락처'}>
          <OutlinedInput
            sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            focusWithin={false}
            placeholder={'대표자 분의 연락처를 입력해 주세요.'}
          />
        </CustomedFormControl>
        <CustomedFormControl label={'총 인원'} required={true}>
          <OutlinedInput
            sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
            type={'number'}
            focusWithin={false}
            placeholder={'본인 포함 총 인원수를 입력해 주세요.'}
          />
        </CustomedFormControl>
        <CustomedFormControl label={'식사여부'} required={true}>
          <FuturRadioGroup
            defaultValue={1}
            options={[
              { key: 1, value: 1, label: '예정' },
              { key: 2, value: 2, label: '안함' },
              { key: 3, value: 3, label: '미정' },
            ]}
            color={'neutral'}
          />
        </CustomedFormControl>
        <Box
          sx={{ position: 'sticky', bottom: 0, width: '100%', pt: 2, backgroundColor: '#ffffff' }}
        >
          <SolidButton
            sx={{ width: '100%', height: 50, fontFamily: 'Pretendard', fontSize: '0.9rem' }}
            buttonColor={'#000000'}
          >
            전송
          </SolidButton>
        </Box>
      </Stack>
    </TranslucentMobileModal>
  );
}
