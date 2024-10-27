import { Box, Stack } from '@mui/joy';
import { CustomedFormControl, OutlinedInput, SolidButton, TextArea } from '@/shared/ui';

export function GuestbookModal() {
  return (
    <Stack sx={{ position: 'relative', width: '100%', height: '100%', gap: 2, py: 2 }}>
      <CustomedFormControl label={'작성자'} required={true}>
        <OutlinedInput
          sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
          focusWithin={false}
          placeholder={'10자 이내로 입력해 주세요.'}
        />
      </CustomedFormControl>
      <CustomedFormControl label={'비밀번호'} required={true}>
        <OutlinedInput
          sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
          focusWithin={false}
          placeholder={'작성자명을 입력해 주세요.'}
        />
      </CustomedFormControl>
      <CustomedFormControl label={'내용'} required={true}>
        <TextArea
          sx={{ fontFamily: 'Pretendard', fontWeight: 500 }}
          placeholder={'500자 이내로 작성해 주세요.'}
          variant={'outlined'}
          focusWithin={false}
          minRows={10}
          maxRows={10}
        />
      </CustomedFormControl>
      <Box sx={{ position: 'sticky', bottom: 0, width: '100%', pt: 2, backgroundColor: '#ffffff' }}>
        <SolidButton
          sx={{ width: '100%', height: 50, fontFamily: 'Pretendard', fontSize: '0.9rem' }}
          buttonColor={'#000000'}
        >
          전송
        </SolidButton>
      </Box>
    </Stack>
  );
}
